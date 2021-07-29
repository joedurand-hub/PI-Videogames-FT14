import { 
    VIDEOGAME_DETAIL_FOR_ID_CARD,   // Listo
    SEARCH_VIDEOGAME,               // Listo
    ADD_NEW_VIDEOGAME,              // Listo
    GET_GENRES,                     // Listo
    FILTER_BY_GENRE,                // 
    RESET,              

} from '../1-actions/index'

const initialState = { 
    searchVideogames: [], // Usado
    allVideogames: [],
    gameDetailById: [],   // Usado
    newVideogame: null,    // Usado
    getGenres: [],         // Usado
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case VIDEOGAME_DETAIL_FOR_ID_CARD:
            return { ...state, gameDetailById: action.payload }

        case SEARCH_VIDEOGAME:
            return { ...state, searchVideogames: action.payload, allVideogames: action.payload }

        case ADD_NEW_VIDEOGAME:
            return { ...state, newVideogame: action.payload }

        case GET_GENRES:
            return { ...state, getGenres: action.payload }
            
        case FILTER_BY_GENRE:
            const allVideogames = state.allVideogames
            const genresFiltered = action.payload === 'All' ? allVideogames 
            : allVideogames.filter(card => (card.genre).includes(action.payload))
            return { ...state, searchVideogames: genresFiltered }
        
        case RESET:
            return { ...state, searchVideogames: [] }
        
        default: 
            return state;
    }
}


export default rootReducer;