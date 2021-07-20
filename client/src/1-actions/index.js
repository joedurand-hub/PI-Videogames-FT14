import axios from 'axios';

// Type de las actions
export const VIDEOGAME_DETAIL_FOR_ID_CARD = "VIDEOGAME_DETAIL_FOR_ID_CARD"; 
export const SEARCH_VIDEOGAME             =  "SEARCH_VIDEOGAME"; 
export const ADD_NEW_VIDEOGAME            = "ADD_NEW_VIDEOGAME"; 
export const GET_GENRES                   = "GET_GENRES";
export const FILTER_BY_GENRE              = 'FILTER_BY-GENRE';
export const ORDER_BY_CREATION             = 'ORDER_BY_CREATOR';
export const ORDER_ASC_FOR_NAME           = 'ORDER_ASC_FOR_NAME';
export const ORDER_DESC_FOR_NAME          = 'ORDER_DESC_FOR_NAME'; 
export const ORDER_ASC_FOR_RATING         = 'ORDER_ASC_FOR_RATING';
export const ORDER_DESC_FOR_RATING        = 'ORDER_DESC_FOR_RATING'; 


// Busco videojuegos por name
export function SearchForGamesByName(name) {
    return async function(dispatch) {
         try {
           const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({type: SEARCH_VIDEOGAME, payload: response.data})
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
            return dispatch({type: VIDEOGAME_DETAIL_FOR_ID_CARD, payload: response.data})
         } catch(error) {
            console.log(error)
         }
    }
}


// Creo uno nuevo
export function postGame(game) {
    // name, img, releaseDate, rating, platforms, description
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

// Traigo por género
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

export const filterByGenre = (genres) => (dispatch, getState) => {
    let filteredGames = [];
  
    if (genres === "All") {
        filteredGames = getState().videogames;
    } else {
        filteredGames = getState().videogames.filter((game) =>
            (game.genres).includes(genres)
        )
    };
    dispatch({
        type: FILTER_BY_GENRE,
        payload: {
            genres,
            videogameGenre: filteredGames,
        },
    });
};

export const orderAsc = (type) => (dispatch, getState) => {
    const filtered = getState().filteredVideogames;
    let videogamesOrder = []

    if(type === "asc_name") {
        videogamesOrder = filtered.sort((a, b) => {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
        })
    } else if(type === "asc_rating") {
        videogamesOrder = filtered.sort(
            (a, b) => a.rating - b.rating
        )
    }
    dispatch({
        type: ORDER_ASC_FOR_RATING, 
        payload: {videogamesOrder, name: type}
    })
}

export const orderDesc = (type) => (dispatch, getState) => {
    const filtered = getState().filteredVideogames;
    let videogamesOrder = []
      
    if (type === "desc_name") {
        videogamesOrder = filtered.sort((a, b) => {
            if (a.name < b.name) return 1;
            if (a.name > b.name) return -1;
            return 0;
        });
    } else if (type === "desc_rating") {
        videogamesOrder = filtered.sort(
            (a, b) => b.rating - a.rating
        );
    }
    dispatch({
        type: ORDER_DESC_FOR_RATING, 
        payload: {videogamesOrder, name: type,}
    });
}
  
  
export const orderByCreation = (source) => (dispatch, getState) => {
    const videogames = getState().videogames.filter(function (G) {
        return G.source === source
    });
    dispatch({
        type: ORDER_BY_CREATION, 
        payload: {videogames, source}
    });
};