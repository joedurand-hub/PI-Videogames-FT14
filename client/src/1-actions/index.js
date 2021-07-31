import axios from 'axios';

// Type de las actions
export const VIDEOGAME_DETAIL_FOR_ID_CARD = "VIDEOGAME_DETAIL_FOR_ID_CARD";
export const SEARCH_VIDEOGAME             = "SEARCH_VIDEOGAME";
export const ADD_NEW_VIDEOGAME            = "ADD_NEW_VIDEOGAME"; 
export const GET_GENRES                   = "GET_GENRES"; 
export const FILTER_BY_GENRE              = 'FILTER_BY_GENRE'; 
export const FILTER_BY_CREATED            = 'FILTER_BY_CREATED';
export const AZ                           = "AZ";
export const ZA                           = "ZA";
export const ASC                          = "ASC";
export const DESC                         = "DESC";
export const RESET                        = 'RESET';  

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
export const orderBy = (sort) => (dispatch) => {  
    //console.log(sort)    
    dispatch({
        type: sort,        
      })    
  };

export const resetAll = () => { // Feature no implementada
    return (dispatch) => {
        dispatch({type: RESET})
    }
}