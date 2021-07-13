import React from 'react';
import InputSearch from '../InputSearch/InputSearch';
import ButtonSearch from '../Buttons/Button'
import './nav.css';


function Nav() {
  return (
<div>
    <nav >  
        <InputSearch/>
        <ButtonSearch />
    </nav>
</div>
  );
};
export default Nav;