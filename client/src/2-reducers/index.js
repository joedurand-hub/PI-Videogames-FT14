import { 
    VIDEOGAME_DETAIL_FOR_ID_CARD,   // Listo
    SEARCH_VIDEOGAME,               // Listo
    ADD_NEW_VIDEOGAME,              // Listo
    GET_GENRES,                     // Listo
    RESET,              
    FILTER_GENRE,                   // 
    OPTIONS_DATA_DB_API_RATING_ALPH,  // 

} from '../1-actions/index'

const initialState = { 
    searchVideogames : [], // Usado
    gameDetailById : [],   // Usado
    originalGames: [],     // Usado
    newVideogame: null,    // Usado
    getGenres: [],         // Usado
    videogames: [],
    filteredVideogames: [],
    filterAll: "All",
    orderSelect: "Select",
}

function rootReducer(state = initialState, action) {
    switch(action.type) {
        case VIDEOGAME_DETAIL_FOR_ID_CARD:
            return { ...state, gameDetailById: action.payload }

        case SEARCH_VIDEOGAME:
            return { ...state, searchVideogames: action.payload, originalGames: action.payload }

        case ADD_NEW_VIDEOGAME:
            return { ...state, newVideogame: action.payload }

        case GET_GENRES:
            return { ...state, getGenres: action.payload }
            
        case FILTER_GENRE:
            return { ...state,
              filteredVideogames: action.payload.videogameGenre,
                  filterAll: action.payload.genre,
                };
        
              
        case OPTIONS_DATA_DB_API_RATING_ALPH: 
            if(action.payload === 'Null') {
            return {
                  ...state,
                  searchVideogames: state.originalGames
                } 
              };   
              let filterMine = []
              if(action.payload === 'DB') {
                filterMine = state.originalGames.filter(game => game.mine === true);
                
              } else {
                filterMine = state.originalGames.filter(game => game.mine === false);
              }
              
              return {
                ...state,
                searchVideogames: filterMine,
              }

        case RESET:
            return { ...state, searchVideogames: [], orderSelect: "Select", filterAll: "All" }
        
        default: 
            return state;
    }
}


export default rootReducer;


