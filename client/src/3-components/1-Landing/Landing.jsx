import React from 'react';
import Home from '../2-Home/HomePage/Home'
// Imágen de background
// Una descripción
// Botón de ingreso a Home, antes de eso es sólo la landing

function LandingPage() {
    return (
  <div>
      <h1>Henry Videogames</h1>
      <p>Video game information application for users of all ages.</p>
      <button>Enter</button> 
      <Home/>
    </div>
  )
};

  export default LandingPage;