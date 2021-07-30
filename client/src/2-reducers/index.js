import { 
    VIDEOGAME_DETAIL_FOR_ID_CARD,   // Listo
    SEARCH_VIDEOGAME,               // Listo
    ADD_NEW_VIDEOGAME,              // Listo
    GET_GENRES,                     // Listo
    FILTER_BY_GENRE,                // Listo? Refiltra sobre lo filtrado, debe filtrar siempre sobre el estado inicial
    FILTER_BY_CREATED,              // Listo?
    ORDER_ASC_NAME,
    ORDER_DESC_NAME,
    ORDER_ASC_RATING,
    ORDER_DESC_RATING,
    RESET,              

} from '../1-actions/index'

const initialState = { 
    searchVideogames: [],  // Usado
    allVideogames: [],     // Usado
    gameDetailById: [],    // Usado
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
        
        case FILTER_BY_CREATED:
            const createdFiltered = action.payload === 'DB' ? state.allVideogames.filter(game => game.createdInDb)
            : state.allVideogames.filter(game => !game.createdInDb)
            return { ...state, searchVideogames: action.payload === 'All' ? state.allVideogames: createdFiltered }

        case ORDER_ASC_NAME:
        case ORDER_ASC_RATING:
        case ORDER_DESC_NAME:
        case ORDER_DESC_RATING:
            return { ...state, searchVideogames: action.payload.videogamesOrder, searchVideogames: action.payload.name };
        
        case RESET:
            return { ...state, searchVideogames: [] }
        
        default: 
            return state;
    }
}


export default rootReducer;