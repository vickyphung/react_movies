import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios'
import './style.css'

const Home = () =>{

    const [movies, setMovies] = useState([])
    const [userSearch, setUserSearch] = useState('')
    
        const fetchData = async () => {
            let response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${userSearch}`)
            setMovies(response.data.Search)
        }
    console.log(movies)
    return (
        <div>
            <h1>Home</h1>
            <input onChange={ (e) => setUserSearch(e.target.value) } />
            <button onClick={ () => fetchData() } > Search </button>    
            
            {movies.map( (movie, index) =>
                <div key={index} className="movieCard">
                    <h3>{movie.Title}</h3>
                    <h5>year: {movie.Year}</h5>
                    <img src={movie.Poster} />
                </div>
            )}


        </div>
    )
}

export default Home