'use strict';

const express = require('express');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');
const { Videogame, Genre } = require('../db');
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body --> LISTO.
// Crea un videojuego en la base de datos --> LISTO.

async function postGames(req, res) {
    try {
        const {name, img, releaseDate, rating, platforms, description, genres} = req.body;
        console.log(req.body)
       
           let gameCreate = await Videogame.create({
				id: uuidv4(),
				name: name,
                img: img,
				releaseDate: releaseDate,
				rating: rating,
				platforms: platforms,
				description: description,
			});
            genres.forEach(async (GenreGame) => {
                let genresVideogame = await Genre.findOne({ where: { name: GenreGame } })
                console.log(genresVideogame)
                await gameCreate.addGenre(genresVideogame)
            })
            res.json(gameCreate)
          
        } catch (error) {
        console.log(error);
        res.status(500).json({error: 'La solicitud para crear un nuevo Videojuego falló'})
    }
};


module.exports = {
    postGames
}

