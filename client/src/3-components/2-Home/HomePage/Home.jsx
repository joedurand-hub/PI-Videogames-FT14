import React from 'react';
import Nav from '../../4-Nav/Nav.jsx'
import FilterGames from '../FilterGames/FilterGames'

// Posee un Nav con dentro:
//  -Tiene el componente inputSearch para buscar videojuegos
//  -Tiene el componente Create (botón) que lleva a otra pestaña con un form para crear un juego
//  -Tiene el botón Filter (FilterGames) que se desplaza y permite ordenar y filtrar juegos
// Renderiza Cards que va a traer los juegos
// Tiene el paginado de las Cards

function Home() {
    return (
      <div>
        <Nav/>
        <FilterGames/>
      </div>
    )
  };
  
  export default Home;