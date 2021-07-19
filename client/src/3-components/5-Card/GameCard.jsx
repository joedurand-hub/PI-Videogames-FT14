import React from 'react';
import {Link} from 'react-router-dom';

// Uso GET /videogames y traigo los primeros 15:
//  -Imagen, Nombre y Géneros
// Este muestra 1 card, los datos adentro.
// CardDetail para ver los datos cada card. Nuevo componente dentro de.. Home? Cards? Uno aparte sin indexar?


export function GameCard({ name, img, genre}) {

    return (
        <div className="GameCard">
            <h2 > {name} </h2> 
            <img src={img} alt="Image not found" />
            <div className='genre'>Géneros: {genre} </div>
            <Link to={`/videogame/${id}`}> <button className=''>Ver más</button></Link>
        </div>
    )
};

export default GameCard;