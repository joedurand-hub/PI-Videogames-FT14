import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../4-Nav/Nav'
import './DetailCard.css'

export function VideogameDetailById() {

    const videogame = useSelector((dataStore) => dataStore.gameDetailById)

    console.log(videogame)

        return (
        <div>
            <Nav/>    
            <div className="GameCard">
                <h2>{videogame.name}</h2>
                <img src={videogame.img} alt="" />
                <h3>{videogame.releaseDate}</h3>
                <h3>{videogame.rating}</h3>
                <h4>{videogame.platforms}</h4>
                <strong>Description:</strong>
                <p>{videogame.description}</p>
                <h4>Genres:
                {videogame.genre.map((item, i) => {
                    return <li key={i}> {item} </li> 
                })}
                </h4>
            </div>
        </div>
        )
}

export default VideogameDetailById;
