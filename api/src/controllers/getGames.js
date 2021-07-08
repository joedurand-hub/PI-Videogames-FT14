'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');
const {API_KEY} = process.env;
// Obtener un listado de los primeras 15 videojuegos --> LISTO.
// Debe devolver solo los datos necesarios para la ruta principal --> LISTO
// ¿Aumentar a 100 la cantidad de datos?

async function getGames(req, res) {
    try {
        const gamesData = [];
        const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        const resultsGames = response.data.results.slice(0, 15)
      
        for (let data of resultsGames) {
                 gamesData.push({
                name: data.name,
                img: data.background_image,
                genre: data.genres.map(obj => obj.name)

                })
        }

        // const responseNext = await axios.get(response.data.next)
        // const resultsGamesNext = responseNext.data.results.slice(0, 15)
        // for (let data of resultsGamesNext) {
        //     gamesData.push({
        //    name: data.name,
        //    img: data.background_image,
        //    genre: data.genres.map(obj => obj.name)

        //    })
        // }

        // const responseNext2 = await axios.get(responseNext.data.next)
        // const resultsGamesNext2 = responseNext2.data.results.slice(0, 15)
        // for (let data of resultsGamesNext2) {
        //     gamesData.push({
        //    name: data.name,
        //    img: data.background_image,
        //    genre: data.genres.map(obj => obj.name)

        //    })
        // }

        await Videogame.findAll({include: Genre})
         //bulkCreate para guardar en la DB la respuesta de la API
        return res.json(gamesData)

    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogames falló'})
    }
};


module.exports = {
    getGames
}

