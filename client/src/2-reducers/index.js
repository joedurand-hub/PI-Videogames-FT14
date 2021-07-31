import { 
    VIDEOGAME_DETAIL_FOR_ID_CARD,   // Listo
    SEARCH_VIDEOGAME,               // Listo
    ADD_NEW_VIDEOGAME,              // Listo
    GET_GENRES,                     // Listo
    FILTER_BY_GENRE,                // Listo
    FILTER_BY_CREATED,              // Listo
    AZ,
    ZA,
    ASC,
    DESC,
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

        case AZ:      
            const allVideogames2 = state.allVideogames
            const orderAZ = action.payload === 'All' ? state.searchVideogames
            : allVideogames2.sort((a, b) => {
              const game1 = a.name;
              const game2 = b.name;
              if(game1 < game2) return -1
              if(game1 > game2) return 1
               else {
                return 0
              }
            })      
            return { ...state, searchVideogames: action.payload === "All" ? allVideogames2: [...orderAZ] };
      
        case ASC:
            const allVideogames3 = state.allVideogames
            const orderASC = action.payload === 'All' ? state.searchVideogames : allVideogames3.sort((a, b) =>  a.rating - b.rating);     
            return { ...state, searchVideogames: [...orderASC] };
        
        case ZA:
            const allVideogames4 = state.allVideogames
            const orderZA = action.payload === 'All' ? state.searchVideogames : allVideogames4.sort((a, b) => {
              const game1 = a.name;
              const game2 = b.name;
              if(game1 > game2) return -1
              
              if(game1 < game2) return 1
               else {
                return 0
              }
            })      
            return { ...state, searchVideogames: [...orderZA] };
        
        case DESC:
            const allVideogames5 = state.allVideogames
            const orderDESC = action.payload === 'All' ? state.searchVideogames : allVideogames5.sort((a, b) =>  b.rating - a.rating);     
            return { ...state, searchVideogames: [...orderDESC] };
        
        case RESET:
            return { ...state, searchVideogames: [] }
        
        default: 
            return state;
    }
}


export default rootReducer;