import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenre } from "../../../1-actions/index";
import './FilterAndOrder.css'
export default function Filter() {
    const dispatch = useDispatch();
    const getStateGenres = useSelector((state) => state.getGenres)    

    useEffect(() => {
      dispatch(getGenres())
    }, [dispatch]);
  
    const handleGenreChange = (e) => {   
        dispatch(filterByGenre(e.target.value));
    }  
    const handleOrderChange = (e) => {

    }
  
    return (
    <div>
        <div className="DivSelect">
            {/* <select name="select" id="select" >
                
                <option defaultValue value="Null"> Options </option>
                <option value='DB'> Data Bases </option>
                <option value='API'> API </option>     
                <option value='Creation'> Creation </option>  
                <option value='Rating'> Rating </option>            
            </select>
*/           }
            <select id="select" onChange={(e) => handleOrderChange(e)}>
                
                <option defaultValue value="Null"> Order </option>
                <option value='Ascending'> Ascending </option>
                <option value='Descending'> Descending </option>            
            
            </select>




        <select id="select" onChange={(e) => handleGenreChange(e)}>
            <option value="All"> All </option>
            { getStateGenres.map((game) => (
                <option value={game.name}> {game.name} </option>
                ))
            }  
        </select>

        </div>
    </div>
      );

};