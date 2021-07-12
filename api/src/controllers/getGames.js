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

    const { name } = req.query;
    const gamesData = [];

    const response = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}`)
    const resultsGames = response.data.results.slice(0, 15)

    const responseNames = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&search=${name}`)
    const resNames = responseNames.data.results.slice(0, 15)

        if(name) {
            try {
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
        } else  {
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
                res.status(500).json({error: 'La solicitud de /videogames falló'})
        }

    } else {

        try {
            for (let data of resultsGames) {
                gamesData.push({
                name: data.name,
                img: data.background_image,
                genre: data.genres.map(obj => obj.name)
                })
            }
            const responseNext = await axios.get(response.data.next)
            function nextData() {
                const resultsGamesNext = responseNext.data.results.slice(0, 15)
                    for (let data of resultsGamesNext) {
                        gamesData.push({
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

                await Videogame.findAll({include: Genre})
                    //bulkCreate para guardar en la DB la respuesta de la API quizás?
                return res.json(gamesData)
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

