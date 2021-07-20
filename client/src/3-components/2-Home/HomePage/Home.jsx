import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Card from '../../5-Card/GameCard'
import { useDispatch, useSelector } from 'react-redux';
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
  const videogame = useSelector((dataStore) => dataStore.searchVideogames)

  return (
      <div>
        <Nav/>
        <FilterGames/>
        <div className="container">
          {videogame.map(videogame => {
              console.log(videogame)
              return (
              <Card videogame={videogame} key={videogame.id} name={videogame.name} img={videogame.img} genre={videogame.genre}/>
                  )
            })}
          </div>
      </div>
    )
  };
  
  export default Home;

//   import React from 'react';
// import './Home.css';
// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from "react";
// import { getGenre, getAllGames, searchQueryGames} from '../../Redux/Actions/actions';
// import { Link } from 'react-router-dom';

// import Order from '../Order/Order'
// import GameCard from "./GameCard/GameCard";
// import SearchBar from "../SearchBar/SearchBar";
// import { useState } from 'react';
// import Pagination from '../Home/Pagination';
// import Filter from '../Filter/Filter';

// function Home() {

//   const dispatch = useDispatch();
//   const getGames = useSelector((state) => state.getGames);
//   const searchGames = useSelector((state) => state.searchGames);
   
  
//   const [name, setName] = useState("");
//   const [search, setSearch] = useState(false);
//   //const [displayResults, setDisplayResults] = useState(getPokes)
//   let allGames;
  
//   async function searchVideogame(name) {
//     await dispatch(searchQueryGames(name))        
//   }

//   useEffect(() =>{
//     if(search) {
//       searchVideogame(name)      
//     } else {
//       dispatch(getGenre()) 
//       dispatch(getAllGames());
//     } 
//   },[search]) 
  
  
  
//   return(

//   <div className='Home' >
//     <SearchBar setSearch={setSearch} setName={setName} ></SearchBar>   
    
//     <ul>
//     <h2>Look for your favourite Videogame</h2>
//     <Order ></Order>
//     <Filter ></Filter>
//       { 
//         search ? 
//           <Link to={`/gameDetail/${searchGames.id}`} >          
//             <GameCard game = {searchGames} key = {searchGames.id} /* name = {searchGames.name} */ />        
//           </Link> 
//         :      
//         (getGames.length > 0 ? <Pagination></Pagination> : <h1>Loading ...</h1>)
//       }
//     </ul> 
//   </div>
//   )
// }

// export default Home;