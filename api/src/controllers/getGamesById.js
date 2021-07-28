'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Videogame } = require('../db');
const {API_KEY} = process.env;
// Obtener el detalle de un videojuego en particular ---> LISTO.
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego --> LISTO.
// Incluir los géneros asociados --> LISTO.

async function getGamesById(req, res) {
    try {
        const { id } = req.params;  
     
        if(id.includes('-')) {
            const gameId = await Videogame.findOne({
                where: {
                    id: id,
                }
            });
            return res.json(gameId);
       
        } else {
            const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
            const gamesData = {
                id: response.data.id,
                name: response.data.name,
                img: response.data.background_image_additional,
                releaseDate: response.data.released,
                rating: response.data.rating,
                platforms: response.data.platforms.map(obj => obj.platform.name),
                description: response.data.description,
                genre: response.data.genres.map(obj => obj.name)
            }
            return res.json(gamesData)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogame por Id falló'})
    }
};


module.exports = {
    getGamesById
}

