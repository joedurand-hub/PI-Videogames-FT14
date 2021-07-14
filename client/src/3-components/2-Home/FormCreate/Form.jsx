import React from 'react';
import Nav from '../../4-Nav/Nav'

export function FormCreate() {
    return (
  <div>
      <nav>
          <Nav/>
      </nav>
      <p>Crea tu propio videojuego!</p>
      <form >  
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <input type="text" />
        <label htmlFor=""></label>
        <button>Create</button>
      </form>
  </div>
    );
  };
  export default FormCreate;