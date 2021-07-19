import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SEARCH_VIDEOGAME from '../../../1-actions/index'
import Card from '../../5-Card/GameCard';
import Nav from '../../4-Nav/Nav.jsx';
import FilterGames from '../FilterGames/FilterGames';

// Tiene el paginado de las Cards
// [ ] Input de búsqueda para encontrar videojuegos por nombre
// [ ] Área donde se verá el listado de videojuegos. Deberá mostrar su:
// Imagen
// Nombre
// Géneros
// [ ] Paginado para ir buscando y mostrando los siguientes videojuegos

function Home() {
  const dispatch = useDispatch();
  const [order, setOrder] = useState('ASC');
  const [filter, setFilter] = useState('');

  // const allGames = useSelector((state) => state.games);
  return (
      <div>
        <Nav/>
        <FilterGames/>
        <Card/>
      </div>
    )
  };
  
  export default Home;