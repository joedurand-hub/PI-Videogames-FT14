import axios from 'axios';

// Type de las actions
export const VIDEOGAME_DETAIL_FOR_ID_CARD = "VIDEOGAME_DETAIL_FOR_ID_CARD"; // Id
export const SEARCH_VIDEOGAME             = "SEARCH_VIDEOGAME";            // Name o todos
export const ADD_NEW_VIDEOGAME            = "ADD_NEW_VIDEOGAME";            // Añadir uno nuevo
export const GET_GENRES                   = "GET_GENRES";                   // Géneros
export const FILTER_BY_GENRE              = 'FILTER_BY_GENRE';              // Trae los que incluyan un género (no excluye)
export const FILTER_BY_CREATED            = 'FILTER_BY_CREATED';            // Si viene de la DB o la API
export const ORDER_ASC_NAME               = "ORDER_ASC_NAME";
export const ORDER_ASC_RATING             = "ORDER_ASC_RATING";
export const ORDER_DESC_NAME              = "ORDER_DESC_NAME";
export const ORDER_DESC_RATING            = "ORDER_DESC_RATING";
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

export const orderAscByNameAndRating = (type) => (dispatch, getState) => {
    const filtered = getState().searchVideogames;
    let videogamesOrder = []

    if(type === "ASC_NAME") {
        videogamesOrder = filtered.sort((a, b) => {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
        })
    } else if(type === "ASC_RATING") {
        videogamesOrder = filtered.sort(
            (a, b) => a.rating - b.rating
        )
    }
    dispatch({
        type: ORDER_ASC_RATING, 
        payload: {videogamesOrder, name: type}
    })
}

export const orderDescByNameAndRating = (type) => (dispatch, getState) => {
    const filtered = getState().searchVideogames;
    let videogamesOrder = []
      
    if (type === "DESC_NAME") {
        videogamesOrder = filtered.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        });
    } else if (type === "DESC_RATING") {
        videogamesOrder = filtered.sort(
            (a, b) => b.rating - a.rating
        );
    }
    dispatch({type: ORDER_DESC_RATING, payload: {videogamesOrder, name: type} });
}

export const resetAll = () => { // Feature no implementada
    return (dispatch) => {
        dispatch({type: RESET})
    }
}