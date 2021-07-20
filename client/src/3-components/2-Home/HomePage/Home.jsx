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
  const dispatch = useDispatch();
  const [pages, setPages] = useState(0)
  const [order, setOrder] = useState('ASC');
  const [filter, setFilter] = useState('');
  
  useEffect(() => {
    dispatch(SearchForGamesByName(pages, order, filter))
  }, [dispatch, pages, order, filter]);
  
  const videogame = useSelector((dataStore) => dataStore.searchVideogames)
  
  const handleClick = (e) => { // Resolver click (el evento)
    e.preventDefault();
    dispatch(SearchForGamesByName(pages, order, filter))
};

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


//   <Paginate
//   videogamesPerPage={videogamesPerPage}
//   totalVideogames={allVideogames.length}
//   paginate={paginate}
// />

  // Paginacion
//   function paginate(e, num) {
//     e.preventDefault();
//     setPage(num);
//   }

//   const [page, setPage] = useState(1);
//   const [videogamesPerPage] = useState(15);

//   let lastCardPerPage = page * videogamesPerPage;
//   let firtsCardPerPage = lastCardPerPage - videogamesPerPage;
//   let currentPageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

//   return (
//     <div >
//       <Filter paginate={paginate} />
//       <div className={style.home}>
//         <Videogames videogames={currentPageGames} />
//       </div>
//       <div>
//         <Pagination
//           videogamesPerPage={videogamesPerPage}
//           totalVideogames={allVideogames.length}
//           paginate={paginate}
//         />
//       </div>  
//     </div>
//   );
// };
  