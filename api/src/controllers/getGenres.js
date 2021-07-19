'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Genre } = require('../db');
const {API_KEY} = process.env;
// Obtener todos los tipos de géneros de videojuegos posibles --> LISTO.
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos --> LISTO.
// y luego ya utilizarlos desde allí --> LISTO.

async function getGenres(req, res) {
    try {
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`)
        const genreGames = response.data.results.forEach(element => {
            Genre.findOrCreate(
                {where: {name: element.name}
              }
            )
            
           });
           const genresInDB = await Genre.findAll()
         return res.json(genresInDB);

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'No se han podido traer los géneros de los videojuegos'})
    }
};


module.exports = {
    getGenres
}

