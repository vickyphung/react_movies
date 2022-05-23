import React from "react";
import './style.css'
import axios from 'axios'
import { useEffect, useState } from "react"; 
import { useNavigate } from "react-router-dom";

const Movie = (props) =>{

    const [movieData, setMovieData] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        const fetchData = async () => {
            if (props.movieId) {
            const response = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&i=${props.movieId}`)
            setMovieData(response.data)
            } else {
                navigate('/')
            }
        }
        fetchData();
    }, [])



    return (
        <div className="movieDetails">
            <h1>{movieData.Title ? movieData.Title : "We do not know"}</h1>
            <p>Published in {movieData.Year ? movieData.Year : "Unknown Year"} by {movieData.Director ? movieData.Director : "Unknown Director"} and written by {movieData.Writer ? movieData.Writer : "We do not know"}</p>
            <img src={movieData.Poster} alt="movie poster" />

        </div>
    )
}

export default Movie