import React, { useState, useEffect } from 'react'
import Reviews from './Reviews';
import './Review.css'

function MovieDetails({ category }) {
    console.log(category)

    const getPath = window.location.pathname
    const getPathId = parseInt(getPath.split("/").pop())



    console.log(getPath)
    const [getMovie, setGetMovie] = useState([])
    
    useEffect(() => {
        fetch(`https://netflixsinatraapi.herokuapp.com${getPath}`)
            .then(resp => resp.json())
            .then(data => setGetMovie(data))
    }, [])


    const baseImageUrl = "https://image.tmdb.org/t/p/original/"
    return (
        <div style={{ backgroundColor: "black" }}>
            <div className="shadow" style={{ marginTop: "3rem", backgroundColor: "black", color:"white",position: "relative" }}>
                <h1 className="centerText">{getMovie?.name || getMovie?.title || getMovie?.original_name}</h1>
                <img className="center" src={`${baseImageUrl}${getMovie.poster_path}`} alt="poster" ></img>

                <br />
                <p className="centerText"> <h3>About {getMovie?.name || getMovie?.title || getMovie?.original_name}</h3>{getMovie.overview}</p>
                <br />
                <img className="center" src={`${baseImageUrl}${getMovie.backdrop_path}`} alt="poster" ></img>
            </div>
            <div>
                <Reviews movieId={getPathId} category={category} />
            </div>
        </div>
    )
}

export default MovieDetails

