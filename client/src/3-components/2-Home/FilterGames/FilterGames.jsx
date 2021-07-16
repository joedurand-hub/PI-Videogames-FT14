import React from 'react';


export function FilterGames() {
    return (
  <div>
      <p>--- Empieza FilterGame</p>
      <form >  
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <button>Aplicar Filtros</button>
      </form>
      <p>--- Termina FilterGame</p>
  </div>
    );
  };
  export default FilterGames;