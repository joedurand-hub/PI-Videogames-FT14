import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import InputSearch from './InputSearch.css';
import { SearchForGamesByName } from '../../1-actions/index';

export function Search() {
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    const handleInputChange = (e) => { // Manipular cambios en el input al suceder un evento
        e.preventDefault();
        setName(e.target.value)
        console.log(e.target.value)
    };
    
    const handleClick = (e) => { // Resolver click (el evento)
        e.preventDefault();
        dispatch(SearchForGamesByName(name))
    };
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