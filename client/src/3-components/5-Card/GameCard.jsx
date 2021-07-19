import React from 'react';
import {Link} from 'react-router-dom';

export function GameCard(id, name, img, genre) {

    return (
        <div className="GameCard">
            <h2> {name} </h2> 
            <img src={img} alt="Image not found" />
            <div className='genre'>Géneros: {genre} </div>
            <Link to={`/videogame/${id}`}> <button className=''>Ver más</button></Link>
        </div>
    )
};

export default GameCard;