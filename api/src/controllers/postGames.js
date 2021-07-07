'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');
const {API_KEY} = process.env;
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos

async function postGames(req, res) {
    try {

   
    } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud de /videogames falló'})
    }
};


module.exports = {
    postGames
}

