import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// Tiene el paginado de las Cards


export function Paginate({videogamesXpage, totalGames, pagination}) {
  const dispatch = useDispatch();
  const [pages, setPages] = useState(0)
  const pageOf15 = [];
  const numOfPages = Math.ceil(totalGames / videogamesXpage)

  for (let gamePages of numOfPages) {
    pageOf15.push(gamePages)
 }


  return (
      <div>
      {pageOf15.map((num) => (
          <div key={num}>
            <button onClick={(e) => pagination(e, num)}>
              {num}
            </button>
          </div>
        ))
      }
  
      </div>
    )
  };
  
  export default Paginate;