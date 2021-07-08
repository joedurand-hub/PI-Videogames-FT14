'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Videogame } = require('../db');
const {API_KEY} = process.env;
// Obtener el detalle de un videojuego en particular
// Debe traer solo los datos pedidos en la ruta de detalle de videojuego
// Incluir los géneros asociados

async function getGamesById(req, res) {
    try {
        const { id } = req.params;  
        const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        if(id) {
            const gamesData = {
                name: response.data.name,
                img: response.data.background_image,
                releaseDate: response.data.released,
                rating: response.data.rating,
                platforms: response.data.platforms.map(obj => obj.platform.name),
                description: response.data.description,
                genre: response.data.genres.map(obj => obj.name)
            }
            console.log(gamesData)
            return res.json(gamesData)
            
        } else {
            const gameId = Videogame.findOne({
                where: {
                    id: id,
                },
                order: [ [ 'createdAt', 'DESC' ]],
            });
            return res.json(gameId);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogames falló'})
    }
};


module.exports = {
    getGamesById
}

