import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SearchForGamesByName } from '../../../1-actions/index'
import Paginate from '../Paginate/paginate'
import Card from '../../5-Card/GameCard'
import Nav from '../../4-Nav/Nav.jsx';
import FilterGames from '../FilterGames/FilterGames';

// Tiene el paginado de las Cards
//  Botones/Opciones para filtrar por género y por videojuego existente o agregado por nosotros
//  Botones/Opciones para ordenar tanto ascendentemente como descendentemente los videojuegos por orden alfabético y por rating

function Home() {


  const [order, setOrder] = useState('ASC');
  const [filter, setFilter] = useState('');
  

  const videogame = useSelector((dataStore) => dataStore.searchVideogames)
  console.log(videogame)
  return (
      <div>
        <Nav/>
        <FilterGames/>
        <div className="container">
        <Paginate
            videogame={videogame}
            RenderComponent={Card}
            title="Videogames"
            pageLimit={7}
            dataLimit={15}
          />
          </div>
          
      </div>
    )
  };
  
  export default Home;