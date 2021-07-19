import React, { Fragment } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import InputSearch from './InputSearch.css';
import { SearchForGamesByName } from '../../1-actions/index';
import Card from '../5-Card/GameCard'


export function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    // const myVideogames = useSelector(dataStore => dataStore.searchGames)
    // console.log(myVideogames)
    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        e.preventDefault();
        setName(e.target.value)
        console.log(e.target.value)
    };
    
    const handleClick = (e) => { // Resolver click (el evento)
        e.preventDefault();
        dispatch(SearchForGamesByName(name))
    };
    const myVideogames = useSelector(dataStore => dataStore.searchGames)
    {myVideogames?.map((videogame) => {
        console.log(videogame.name) // funciona
    })}
    return (
        <div>
        <form>
            <input type="search" placeholder="Insert a name" className={InputSearch}
            onChange={(e) => handleInputChange(e)}></input>
            <button type="submit" value="Buscar"
            onClick={(e) => handleClick(e)}> Buscar </button>
        </form>
        </div>
    )
};


export default Search;