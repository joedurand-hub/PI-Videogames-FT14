import React from 'react';
import {Link} from 'react-router-dom';

export function GameCard(id, name, img, genre) {

    return (
        <div className="GameCard">
            <h2> </h2> 
            <img src={img} alt="Image not found" />
            <div className='genre'>Géneros:  </div>
            <Link to={`/videogame/`}> <button className=''>Ver más</button></Link>
        </div>
    )
};

export default GameCard;