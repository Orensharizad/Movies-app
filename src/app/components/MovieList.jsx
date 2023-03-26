import axios from 'axios';
import React, { useEffect, useState } from 'react'
import MovieVideo from '../components/MovieVideo'

function MovieList({ url, isLarge, title }) {
    const [movies, setMovies] = useState([])
    const [movie, setMovie] = useState(null)
    const base_url = 'https://image.tmdb.org/t/p/original/'


    useEffect(() => {
        loadMovies()

    }, [])


    const loadMovies = async () => {
        try {
            const movies = await axios.get(url)
            setMovies(movies.data.results)

        } catch (err) {
            console.log(err)
        }
    }





    return (
        <section className='movie-list'>
            <h2>{title}</h2>
            <div className="movies-container">
                {movies?.map(movie =>
                    <img key={movie.id} onClick={() => setMovie(movie)} className={isLarge ? 'movie-img large' : 'movie-img'} src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`} alt='movie-img' />

                )}
            </div>
            {movie && <MovieVideo setMovie={setMovie} movie={movie} />}
        </section>
    )
}

export default MovieList