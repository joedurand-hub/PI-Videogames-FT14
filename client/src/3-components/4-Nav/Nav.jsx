import React from 'react';
import {NavLink} from 'react-router-dom';
import InputSearch from '../3-InputSearch/InputSearch';
import './nav.css';

// Renderiza Home
// Renderiza InputSearch
// Renderiza Create
// Renderiza Filter

export function Nav() {
  return (
<div>
    <nav >  
    <NavLink to="/home">
      <div className="logo">Home</div>
    </NavLink>
    
    <InputSearch/>

    <NavLink to={'/create'}>
      <button>Create Videogame</button>
    </NavLink>
    
    </nav>
</div>
  );
};
export default Nav;