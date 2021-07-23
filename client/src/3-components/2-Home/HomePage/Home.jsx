import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Paginate from '../Paginate/paginate'
import Card from '../../5-Card/GameCard'
import Nav from '../../4-Nav/Nav.jsx';
import FilterGames from '../FilterGames/FilterGames';

function Home() {
  const dispatch = useDispatch();

  const filterAll = useSelector((state) => state.filterAll);
  const filteredVideogames = useSelector((state) => state.filteredVideogames);

  const videogame = useSelector((dataStore) => dataStore.searchVideogames)


  const [order, setOrder] = useState('ASC');
  const [filter, setFilter] = useState('');
  
  let allVideogames;
  if(filterAll === "All") {
    allVideogames = filteredVideogames
  }

  console.log("Listado de videogames", videogame)
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