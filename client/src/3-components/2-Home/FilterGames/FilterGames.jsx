import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContainerSelect from './FilterGames.css'
//  Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
//  Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating

export function FilterGames() {
    return (
  <div className="ContainerSelect">
      <div className="Select">
      <p> Filtros </p>
      <select /* onChange={(e) => changeFilter(e)} */>
       <option value="Videogame">Videojuego</option>
       <option value="Genre">Género</option>
      </select>
      </div>
     <div className="Select">
     <p> Orden </p>
      <select /*</div>onChange={(e) => changeOrder(e)} */>
       <option value="ASC">Ascendente</option>
       <option value="DESC">Descendente</option>
      </select>
     </div>
  </div>
    );
  };
  export default FilterGames;