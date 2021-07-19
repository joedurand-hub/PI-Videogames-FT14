import { SEARCH_VIDEOGAME } from '../1-actions/index'
const initialState = { 
    searchGames : [],
    gameDetail : {},
    newVideogame: [],  
}



function rootReducer(state = initialState, action) {
    switch(action.type) {
        case SEARCH_VIDEOGAME:
            return { ...state, searchGames: action.payload }
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
