import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { VideogameByID } from '../../1-actions/index';
import Nav from '../4-Nav/Nav'
import './DetailCard.css'

export function VideogameDetailById(props) {
    const videogame = useSelector((dataStore) => dataStore.gameDetailById)

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(VideogameByID(props.match.params.id));
    }, [dispatch]);
    
    
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
                {videogame.genre ? videogame.genre.map((element) => (
                    <h4> {element}</h4> 
                )) : videogame.genres.map((e) => (
                    {e}
                ))
                }
            </div>
        </div>
        )
}

export default VideogameDetailById;
