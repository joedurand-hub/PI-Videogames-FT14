import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, orderAscAndDesc, optionsData, filterByGenre } from "../../../1-actions/index";
import './FilterGames.css'
export default function Filter() {
    
    const dispatch = useDispatch()
    const getStateGenres = useSelector((state) => state.getGenres)    

    useEffect(() => {
      dispatch(getGenres())
    }, []);
    
    console.log("Solicitud para traer géneros por State de Redux, getGenres:", getGenres)

    const optionsDataChange = (e) => {   
      dispatch(optionsData(e.target.value));
    }   

    const orderAscAndDescChange = (e) => {   
        dispatch(orderAscAndDesc(e.target.value));
      }   

      const filterGenreChange = (e) => {   
        dispatch(filterByGenre(e.target.value));
      }   
    
    return (
        <div className="DivSelect">
            <select name="select" id="select" onChange={optionsDataChange}>
                
                <option defaultValue value="Null"> Options </option>
                <option value='DB'> Data Bases </option>
                <option value='API'> API </option>     
                <option value='Alphabetic'> Alphabetic </option>
                <option value='Creation'> Creation </option>  
                <option value='Rating'> Rating </option>            
            </select>

            <select name="select" id="select" onChange={orderAscAndDescChange}>
                
                <option defaultValue value="Null"> Order </option>
                <option value='Ascending'> Ascending </option>
                <option value='Descending'> Descending </option>            
            
            </select>

          
          <select name="select" id="select" onChange={(e) => filterGenreChange(e)}>
            <option default value="All"> All </option>
            {getStateGenres.map((game) => (
                <option value={game.name}> {game.name} </option>
                ))}  
          </select>
        </div>
      );

};