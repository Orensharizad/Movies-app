import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'

function MovieVideo({ movie, setMovie }) {

    const [id, setId] = useState('')



    useEffect(() => {
        GetVideoId()

    }, [])

    async function GetVideoId() {

        const movieName = movie.name || movie?.title || movie?.original_name
        const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=AIzaSyBLLufNk2x40Livfu2kv_5tcGn7KhsUSEc&q=${movieName}`
        const video = await axios.get(URL)
        setId(video.data.items[0].id.videoId)


    }


    return (
        <section className='movie-video' >
            <div onClick={() => setMovie(null)} className="black-screen"></div>
            <div className="video-container">
                <div className="video-container">
                    <ReactPlayer playing={true} width={'100%'} height={'100%'} controls={true}
                        url={`https://www.youtube.com/embed/${id}`} />
                </div>

            </div>

        </section>
    )
}

export default MovieVideo