'use client'
import React from 'react'
import MovieIndexHeader from '../components/MovieIndexHeader'
import Banner from '../components/Banner'
import MovieList from '../components/MovieList'
import requests from '../services/main.service'

function page() {



    return (
        <section className="movie-index">
            <MovieIndexHeader />
            <Banner />
            {requests().map((req, idx) =>
                <MovieList
                    url={req.url}
                    title={req.title}
                    isLarge={req.isLarge}
                    key={idx}
                />

            )}

        </section>
    )
}

export default page