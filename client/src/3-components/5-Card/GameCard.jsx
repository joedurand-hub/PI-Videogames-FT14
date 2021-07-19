import React from 'react';
import {Link} from 'react-router-dom';
import './GameCard.css'
import Nav from '../4-Nav/Nav'

export function GameCard({videogame}) {

    return (
            <div className="GameCard">
                <h2> {videogame.name} </h2> 
                <img src={videogame.img} alt="Image not found" />
                <p>Géneros:</p>
                <h4 className="genres">
                {videogame.genre.map((element, i) => {
                    return  <h4> {element}</h4> 
                })} 
                </h4>
                <Link to={`/videogame/${videogame.id}`}> <button className=''>Ver más</button></Link>
            </div>
    )
};

export default GameCard;
