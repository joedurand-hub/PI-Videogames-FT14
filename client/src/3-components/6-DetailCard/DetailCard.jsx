import React from 'react'
import { useSelector } from 'react-redux'
import Nav from '../4-Nav/Nav'
import './DetailCard.css'

export function VideogameDetailById() {
    const videogame = useSelector((dataStore) => dataStore.gameDetailById)

    console.log("dataVideogame", videogame)

        return (
        <div>
            <Nav/>    
            <div className="GameCard" >
            <h2> {videogame.name} </h2>
                <img src= {videogame.img} alt="" />
                <h3>Fecha de lanzamiento: {videogame.releaseDate} </h3>
                <h3>Rating: {videogame.rating} </h3>
                
                <strong>Plataformas:</strong>
                <h4> {videogame.platforms} </h4>

                <strong>Description:</strong>
                <p>{videogame.description}</p>
               
                <strong>Géneros:</strong>
                {videogame.genre ? videogame.genre?.map((element, i) => (
                    <h4 key={i}> {element} </h4> 
                )) : videogame.genres?.map((e, i) => (
                    <h4 key={i}> {e} </h4>
                ))
                }
            </div>
        </div>
    )
}

export default VideogameDetailById;
