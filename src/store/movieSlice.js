import { createSlice } from '@reduxjs/toolkit'

const movieSlice = createSlice({
    name: 'movie',
    initialState:
        { movie: null }
    ,
    reducers: {
        setMovie(state, action) {
            state.movie = action.payload
        }

    }
})

export const { setMovie, } = movieSlice.actions
export const selecetMovie = (state) => state.movie.movie
export default movieSlice.reducer