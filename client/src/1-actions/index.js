import axios from 'axios';

// Type de las actions
export const VIDEOGAME_DETAIL_FOR_CARD = "VIDEOGAME_DETAIL_FOR_CARD"; // Busco por ID
export const SEARCH_VIDEOGAME = "SEARCH_VIDEOGAME"; // Busca por name
export const ADD_NEW_VIDEOGAME = "ADD_NEW_VIDEOGAME"; // Método POST
export const GET_GENRES = "GET_GENRES"; // Busco por género


// Busco videojuegos por name
export function SearchForGamesByName(name) {
    return async function(dispatch) {
         try {
           const response = await axios.get(`http://localhost:3001/videogames?name=${name}`)
            return dispatch({type: "SEARCH_VIDEOGAME", payload: response.data})
         } catch(error) {
            console.log(error)
         }
    }
}

export function postGame(name, img, releaseDate, rating, platforms, description) {
    return async function (dispatch) {
        const response = await axios.post('http://localhost:3001/videogame', {
            name,
            img,
            releaseDate,
            rating,
            platforms,
            description
        });
        console.log(response)
        return response;
    } 
}


// Busco videojuegos por ID
// export function getGameForID(id) {
//     return function(dispatch) {
//         dispatch({type: "VIDEOGAME_DETAIL_FOR_CARD"});
//         return 
//     }
// }