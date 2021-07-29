import axios from 'axios';

// Type de las actions
export const VIDEOGAME_DETAIL_FOR_ID_CARD = "VIDEOGAME_DETAIL_FOR_ID_CARD"; // Id
export const SEARCH_VIDEOGAME             =  "SEARCH_VIDEOGAME";            // Name o todos
export const ADD_NEW_VIDEOGAME            = "ADD_NEW_VIDEOGAME";            // Añadir uno nuevo
export const GET_GENRES                   = "GET_GENRES";                   // Géneros
export const FILTER_BY_GENRE              = 'FILTER_BY_GENRE';

export const FILTER_BY_CREATED            = 'FILTER_BY_CREATED'; 

export const ORDER_NAME                   = 'ORDER_NAME'; 
export const ORDER_RATING                 = 'ORDER_RATING'; 
export const ORDER_ASC                    = 'ORDER_ASC';  
export const ORDER_DESC                   = 'ORDER_DESC';  

export const RESET                        = 'RESET';                        // Seteo valores en 0

export const SearchForGamesByName = (name) => async (dispatch) => {
    try {
        const response = await axios.get(`http://localhost:3001/videogames?name=${name}`);
         dispatch({type: SEARCH_VIDEOGAME, payload: response.data
        })
    } catch (error) {
        console.log(error)
    }
}

export function VideogameByID(id) {
    return async function(dispatch) {
         try {
           const response = await axios.get(`http://localhost:3001/videogame/${id}`)
            return dispatch({type: VIDEOGAME_DETAIL_FOR_ID_CARD, payload: response.data})
         } catch(error) {
            console.log(error)
         }
    }
}

export function postGame(game) {
    try {
        return async function (dispatch) {
            const response = await axios.post('http://localhost:3001/videogame', game
            );
            console.log(response)
            return dispatch({type: ADD_NEW_VIDEOGAME, payload: response.data});
    }
    } catch (error) {
        console.log(error)
    }
}

export function getGenres() {
    return async function(dispatch) {
        try {
            const response = await axios.get('http://localhost:3001/genres')
            return dispatch({type: GET_GENRES, payload: response.data}) 

        } catch(error) {
            console.log(error)
        }
    }
}

export function filterByGenre(payload) {           
    return { type: FILTER_BY_GENRE, payload }
}

export function filterCreated(payload) {  
    return { type: FILTER_BY_CREATED, payload }    
};

export const resetAll = () => { // Feature no implementada
    return (dispatch) => {
        dispatch({type: RESET})
    }
}