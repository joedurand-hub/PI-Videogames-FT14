import axios from 'axios';

// Type de las actions
export const VIDEOGAME_DETAIL_FOR_ID_CARD = "VIDEOGAME_DETAIL_FOR_ID_CARD"; 
export const SEARCH_VIDEOGAME             =  "SEARCH_VIDEOGAME"; 
export const ADD_NEW_VIDEOGAME            = "ADD_NEW_VIDEOGAME"; 
export const GET_GENRES                   = "GET_GENRES";
export const FILTER_BY_GENRE              = 'FILTER_BY-GENRE';
export const ORDER_BY_CREATOR             = 'ORDER_BY_CREATOR';
export const ORDER_ASC_FOR_NAME           = 'ORDER_ASC_FOR_NAME';
export const ORDER_ASC_FOR_RATING         = 'ORDER_ASC_FOR_RATING';
export const ORDER_DESC_FOR_NAME          = 'ORDER_DESC_FOR_NAME'; 
export const ORDER_DESC_FOR_RATING        = 'ORDER_DESC_FOR_RATING'; 


// Busco videojuegos por name
export function SearchForGamesByName(name) {
    return async function(dispatch) {
         try {
           const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({type: "SEARCH_VIDEOGAME", payload: response.data})
         } catch(error) {
            console.log(error)
         }
    }
}

// Busco por ID
export function VideogameByID(id) {
    return async function(dispatch) {
         try {
           const response = await axios.get(`http://localhost:3001/videogame/${id}`)
            return dispatch({type: "VIDEOGAME_DETAIL_FOR_ID_CARD", payload: response.data})
         } catch(error) {
            console.log(error)
         }
    }
}


// Creo uno nuevo
export function postGame(name, img, releaseDate, rating, platforms, description) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/videogame', {
            name,
            img,
            releaseDate,
            rating,
            platforms,
            description
        });
        console.log(response)
        return response;
    } 
}
