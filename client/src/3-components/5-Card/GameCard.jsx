import React from 'react';
import {Link} from 'react-router-dom';

// Uso GET /videogames y traigo los primeros 15:
//  -Imagen, Nombre y Géneros



export default function GameCard({id, name, img, genre}) {

    return (
        <div className="CardGame">
            <img src="" alt="" />
            
            <p className='NameGame'></p>
            
            <div className='genre'>

            </div>
            <button className=''>Ver más</button>
        </div>
    )
};