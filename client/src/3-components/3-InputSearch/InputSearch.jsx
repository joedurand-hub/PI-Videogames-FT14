import React from 'react';
import InputSearch from './InputSearch.css'


export default function Search() {

    return (
        <div>
        <form>
             <input type="search" placeholder="Insert a name" className={InputSearch}> </input>
            <button type="submit" value="Buscar">
                Buscar
            </button>
        </form>
        </div>
    )
};

