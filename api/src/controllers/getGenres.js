'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Genre } = require('../db');
const {API_KEY} = process.env;
// Obtener todos los tipos de géneros de videojuegos posibles
// En una primera instancia deberán traerlos desde rawg y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

async function getGenres(req, res) {
    try {
        const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
        console.log(response)
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogames falló'})
    }
};


module.exports = {
    getGenres
}

