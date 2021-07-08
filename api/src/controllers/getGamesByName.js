'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Videogame } = require('../db');
const {API_KEY} = process.env;
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter --> LISTO.
// Si no existe ningún videojuego mostrar un mensaje adecuado --> LISTO.

async function getGamesByName(req, res) {
    try {
        const { name } = req.query;
        let gamesData = [];
        const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
        const resNames = response.data.results.slice(0, 15)

        if(name) {
            for (let resFilteredNames of resNames) {
                gamesData.push({
                name: resFilteredNames.name,
                img: resFilteredNames.background_image,
                releaseDate: resFilteredNames.released,
                rating: resFilteredNames.rating,
                platforms: resFilteredNames.platforms.map(obj => obj.platform.name),
                description: resFilteredNames.description,
                genre: resFilteredNames.genres.map(obj => obj.name),
                
            })
        }
        return res.json(gamesData)

        } else {
            let gamesNames = await Videogame.findOne({
                        where: {
                            name: name, 
                        },
                        order: [[ 'createdAt', 'DESC' ]],
                    })
                    return res.json(gamesNames)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de búsqueda falló.'})
    }
};


module.exports = {
    getGamesByName
}

