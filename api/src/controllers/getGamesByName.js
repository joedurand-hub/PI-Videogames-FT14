'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Videogame } = require('../db');
const {API_KEY} = process.env;
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado

async function getGamesByName(req, res) {
    try {
        const { name } = req.query;
        const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
        console.log("-------------")
        console.log(response.data.results) // --> Trae el array con los name que coinciden
        console.log("-------------")

        // if(name) {
        //     const resNames = response.data.results.slice(0, 15)
        //     console.log(resNames)
        //     // const gamesData = {
        //     //     name: response.data.name,
        //     //     img: response.data.background_image,
        //     //     releaseDate: response.data.released,
        //     //     rating: response.data.rating,
        //     //     platforms: response.data.platforms.map(obj => obj.platform.name),
        //     //     description: response.data.description,
        //     //     genre: response.data.genres.map(obj => obj.name)
        //     // }
        //     return res.json(resNames)
        // } else {
        //     let gamesNames = await Videogame.findOne({
        //         where: {
        //             name: name, 
        //         },
        //         order: [[ 'createdAt', 'DESC' ]],
        //     })
        //     return res.json(gamesNames)
        // }
      
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogames falló'})
    }
};


module.exports = {
    getGamesByName
}

