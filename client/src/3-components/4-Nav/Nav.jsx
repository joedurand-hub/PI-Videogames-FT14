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
    <nav className="Nav">  
    <NavLink to={'/home'}>
      <button className="home"> HOME </button>
    </NavLink>
    
    <InputSearch/>

    <NavLink to={'/create'}>
      <button className="buttonCreate"> CREATE </button>
    </NavLink>
    
    </nav>
</div>
  );
};
export default Nav;