import { 
    VIDEOGAME_DETAIL_FOR_ID_CARD, 
    SEARCH_VIDEOGAME, 
    ADD_NEW_VIDEOGAME, 
    GET_GENRES, 
    FILTER_BY_GENRE, 
    ORDER_BY_CREATOR, 
    ORDER_ASC_FOR_NAME,
    ORDER_ASC_FOR_RATING,
    ORDER_DESC_FOR_NAME,
    ORDER_DESC_FOR_RATING
} from '../1-actions/index'

const initialState = { 
    searchVideogames : [],
    gameDetailById : [],
    newVideogame: null,  
    genres: [],
    order: "Select",
    filter: "All"
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case VIDEOGAME_DETAIL_FOR_ID_CARD:
            return { ...state, gameDetailById: action.payload }

        case SEARCH_VIDEOGAME:
            return { ...state, searchVideogames: action.payload }

        case ADD_NEW_VIDEOGAME:
            return { ...state, newVideogame: action.payload }

        case GET_GENRES:
            return { ...state, genres: action.payload }
            
        case FILTER_BY_GENRE:
            return {  ...state, filterByGenre: action.payload };    
        default: 
            return state;
    }
}


export default rootReducer;



// import {GET_RAZA_DETAIL, GET_RAZA_ALL, GET_RAZA, GET_TEMPERAMENTO, SORT_RAZA} from '../actions/index'

// function rootReducer(state = initialState, action){

//     if(action.type === GET_RAZA_ALL) {
//         return {
//             ...state,
//             razas : action.payload
//         }
//     }

//     if(action.type === GET_RAZA_DETAIL) {
//         return {
//             ...state,
//             razasDetail : action.payload
//         }
//     }

//     if(action.type === GET_RAZA) {
//         return {
//             ...state,
//             razas : action.payload
//         }
//     }
