import React from 'react';
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './GameCard.css'

export function GameCard({videogame}) {

    return (
            <div className="GameCard">
                <h2> {videogame.name} </h2> 
                <img src={videogame.img} alt="Image not found" />
                <p>Géneros:</p>
                <h4 className="genres">
                {videogame.genre ? videogame.genre.map((element) => (
                    <h4> {element}</h4> 
                )) : videogame.genres.map((e) => (
                    {e}
                ))
                }
                </h4>
                <Link to={`/videogame/${videogame.id}`} key={videogame.id}> 
                <button>Ver más</button>
                </Link>
            </div>
    )
};

export default GameCard;
