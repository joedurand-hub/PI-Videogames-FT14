const { Router } = require('express');
const router = require('express').Router();


const { getGames } = require('../controllers/getGames')
const { getGamesByName } = require('../controllers/getGamesByName')
const { getGenres } = require('../controllers/getGenres')
const { getGamesById } = require('../controllers/getGamesById')
const { postGames } = require('../controllers/postGames')


router.get('/videogames', getGames)         // FUNCIONA
router.get('/genres', getGenres)            // FUNCIONA
router.get('/videogame/:id', getGamesById)  // FUNCIONA
router.post('/videogames', postGames)       // FUNCIONA


module.exports = router;
