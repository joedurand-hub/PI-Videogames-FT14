import React from 'react';
import {Link} from 'react-router-dom';

// Uso GET /videogames y traigo los primeros 15:
//  -Imagen, Nombre y Géneros
// Este muestra 1 card, los datos adentro.
// CardDetail para ver los datos cada card. Nuevo componente dentro de.. Home? Cards? Uno aparte sin indexar?


export function GameCard({id, name, img, genre}) {

    return (
        <div className="CardGame">
            <h3 className='nameCard'> {name} </h3> 
            <img src={img} alt="Videogame" />
            <div className='genre'> {genre} </div>
            <Link to={`/videogame/${id}`}> <button className=''>Ver más</button></Link>
        </div>
    )
};

export default GameCard;