import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres, filterByGenre, filterCreated, orderAscByNameAndRating, orderDescByNameAndRating } from "../../../1-actions/index";
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

    const handleOrderValue = (e) => {
        if (e.target.value === "ASC_NAME" || e.target.value === "ASC_RATING") {
          dispatch(orderAscByNameAndRating(e.target.value));
        } else if (e.target.value === "DESC_NAME" || e.target.value === "DESC_RATING") {
          dispatch(orderDescByNameAndRating(e.target.value));
        } else {
          dispatch(filterByGenre(e.target.value));
        }
      };

      const handleFilterCreated = (e) => {
        dispatch(filterCreated(e.target.value))
    }


    return (
    <div>
        <div className="DivSelect">
           <select id="select" onChange={(e) => handleFilterCreated(e)}>
                <option value='All'> All games </option>     
                <option value='DB'> Data Bases </option>
                <option value="API"> All Api</option>
            </select>
            
            <select id="select" onChange={(e) => handleOrderValue(e)}>
                <option value="All" default> Order </option>
                <option value="ASC_NAME"> Ascending (A - Z) </option>
                <option value="DESC_NAME"> Descending (Z - A) </option>
                <option value="ASC_RATING"> Rating + (Worse - Best)</option>
                <option value="DESC_RATING">Rating -(Best - Worse)</option>
            </select>
            <select id="select" onChange={(e) => handleGenreChange(e)}>
                <option value="All"> Genres </option>
                { getStateGenres.map((game) => (<option value={game.name}> {game.name} </option>) )}  
            </select>

        </div>
    </div>
      );

};