import React from 'react';
import { useState } from 'react';
import Card from '../../5-Card/GameCard'
import './Paginate.css'
// Tiene el paginado de las Cards

export function Paginate({ videogame, title, dataLimit, load }) {
    const [pages] = useState(Math.round(videogame.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit
        const endIndex = startIndex + dataLimit
        return videogame.slice(startIndex, endIndex)
    };        

    function goToNextPage() {
        setCurrentPage((pages) => pages + 1)
    }

    function goToPreviousPage() {
        setCurrentPage((pages) => pages - 1)
    }

    if(videogame.length <= 0) {
        return (
          <h1> Cargando... </h1>
        )
      } else {
        return (
        <div>
       <div className="containerPagination">
        <h1>{title}</h1>
        <div className="button">
            <button  onClick={goToPreviousPage}> Previous </button>    
            <button  onClick={goToNextPage}> Next </button>
        </div>    
        <div className="pagination">
          {getPaginatedData().map((game, id) => ( 
              <Card 
              key={id} 
              videogame={game} 
              dataLimit={15}
              />
          ))}
        </div>

    </div>
      </div>
        )
      }
  
  }

  export default Paginate;