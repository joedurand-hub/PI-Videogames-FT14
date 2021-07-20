import React from 'react';
import { useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { VideogameByID } from '../../1-actions/index';
import { useDispatch, useSelector } from 'react-redux';
import DetailCard from '../6-DetailCard/DetailCard'
import './GameCard.css'

export function GameCard({videogame}) {
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(VideogameByID(videogame.id));
    }, [dispatch]);

    return (
            <div className="GameCard">
                <h2> {videogame.name} </h2> 
                <img src={videogame.img} alt="Image not found" />
                <p>Géneros:</p>
                <h4 className="genres">
                {videogame.genre.map((element, i) => {
                    return  <h4 key={i}> {element}</h4> 
                })} 
                </h4>
                <Link to={`/videogame/${videogame.id}`}> 
                <button>Ver más</button>
                    <DetailCard name={videogame.name} image={videogame.img}/>
                </Link>
            </div>
    )
};

export default GameCard;
