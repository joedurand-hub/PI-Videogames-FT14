'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Videogame } = require('../db');
const {API_KEY} = process.env;
// Obtener un listado de los primeras 15 videojuegos
// Debe devolver solo los datos necesarios para la ruta principal
// Imagen
// Nombre
// Géneros

async function getGames(req, res) {
    try {
        const gamesData = [];
        const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        const resultsGames = response.data.results.slice(0, 100)
      
        for (let data of resultsGames) {
                 gamesData.push({
                // id: data.id,
                name: data.name,
                img: data.background_image,
                genre: data.genres.map(obj => obj.name)
                // releaseDate: data.released,
                // rating: data.rating,
                // platforms: data.platforms.map(obj => obj.platform.name),
             //   description: Las descripciones están dentro de cada juego al que accedo por ID.
        //Necesito tomar esa propiedad y exportarla para almacenarla junto a todos los otros datos?.
                })
        }
         
        return res.json(gamesData)

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogames falló'})
    }
};


module.exports = {
    getGames
}

