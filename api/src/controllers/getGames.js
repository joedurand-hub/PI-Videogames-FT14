'use strict';
require('dotenv').config();
const fs = require('fs');
const path = require('path');
const express = require('express');
const router = express.Router();
const { Op } = require('sequelize')
const axios = require('axios').default;
const { Videogame, Genre } = require('../db');
const {API_KEY} = process.env;
// Obtener un listado de los primeras 15 videojuegos --> LISTO.
// Debe devolver solo los datos necesarios para la ruta principal --> LISTO
// ¿Aumentar a 100 la cantidad de datos?
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter --> LISTO
// Si no existe ningún videojuego mostrar un mensaje adecuado --> LISTO


async function getGames(req, res) {

    const { name } = req.query;
    const gamesData = [];
    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const resultsGames = response.data.results.slice(0, 15)
    
    const responseNames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
    const resNames = responseNames.data.results

        if(name) { 
            try { // Trae de la DB y de API los primeros 15 que coincidan por query.name
                let gamesNamesData = await Videogame.findAll({
                    where: {
                      name: {
                        [Op.like]: `%${name}%`
                      }
                    },
                  });
                    for (let resFilteredNames of resNames) {
                        resFilteredNames = {
                        id: resFilteredNames.id,
                        name: resFilteredNames.name,
                        img: resFilteredNames.background_image,
                        genre: resFilteredNames.genres.map(obj => obj.name),   
                    }
                    gamesNamesData.push(resFilteredNames)
                }
                const resultData = gamesNamesData.slice(0, 15)
                return res.json(resultData)
            } catch (error) {
                console.log(error);
                res.status(500).json({error: 'La solicitud de /videogames falló'})
        }
    } else {

        try {

            let gamesAllData = await Videogame.findAll({include: Genre})
            for (let data of resultsGames) { // Traigo los 15.
                gamesAllData.push({
                id: data.id,
                name: data.name,
                img: data.background_image,
                genre: data.genres.map(obj => obj.name)
                })
            }
            const responseNext = await axios.get(response.data.next)
            function nextData() {
                const resultsGamesNext = responseNext.data.results.slice(0, 15)
                    for (let data of resultsGamesNext) {
                        gamesAllData.push({
                        id: data.id,
                        name: data.name,
                        img: data.background_image,
                        genre: data.genres.map(obj => obj.name)
    
                    })
                }
            }
            function nextData10() {
                const resultsGamesNext10 = responseNext.data.results.slice(0, 10)
                    for (let data of resultsGamesNext10) {
                        gamesAllData.push({
                        id: data.id,
                        name: data.name,
                        img: data.background_image,
                        genre: data.genres.map(obj => obj.name)
    
                    })
                }
            }
            nextData();
            nextData();
            nextData();
            nextData();
            nextData();
            nextData10();

            return res.json(gamesAllData)
        }
         catch (error) {
            console.log(error);
            res.status(500).json({error: 'La solicitud de /videogames falló'})
        }
    } 
}

module.exports = {
    getGames
}