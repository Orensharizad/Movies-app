import axios from 'axios';
import { useEffect, useState } from 'react'
import requests from "../services/main.service";
import { getRandomIntInclusive } from "../services/main.service";

function Banner() {

    const [movie, setMovie] = useState(null)
    useEffect(() => {
        loadMovie()

    }, [])


    async function loadMovie() {
        try {
            const moviesRequests = requests()
            const req = await axios.get(moviesRequests[0].url)
            console.log('req: ', req);
            setMovie(
                req.data.results[getRandomIntInclusive(0, req.data.results.length - 1)]
            )

        } catch (err) {
            console.log('err:', err)
        }
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substr(0, n - 1) + '...' : str
    }

    const style = {
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,

    }



    return (
        <section style={style} className='banner' >
            <div className="banner-content">
                <h1 className="banner-title">{
                    movie?.name || movie?.title || movie?.original_name}</h1>
                <div className="banner-btns">

                    <button className="banner-btn">Play</button>

                    <button className="banner-btn">My List</button>
                </div>

                <div className="banner-desc">
                    {truncate(movie?.overview, 150)}
                </div>
            </div>
            <div className="banner-fade-bottom"></div>
        </section>
    )
}

export default Banner