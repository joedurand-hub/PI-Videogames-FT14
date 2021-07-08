const { Router } = require('express');
const router = require('express').Router();


const { getGames } = require('../controllers/getGames')                     // GET https://api.rawg.io/api/games
const { getGamesByName } = require('../controllers/getGamesByName')         // GET https://api.rawg.io/api/games?search={game}
const { getGenres } = require('../controllers/getGenres')                   // GET https://api.rawg.io/api/genres
const { getGamesById } = require('../controllers/getGamesById')             // GET https://api.rawg.io/api/games/{id}
const { postGames } = require('../controllers/postGames')


router.get('/videogames', getGames)         // FUNCIONA
router.get('/videogame', getGamesByName)    // FUNCIONA
router.get('/genres', getGenres)            //
router.get('/videogame/:id', getGamesById)  // FUNCIONA
router.post('/videogames', postGames)       // 


module.exports = router;
