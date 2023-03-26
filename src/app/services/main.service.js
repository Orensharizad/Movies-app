
export default function requests() {
    const API_KEY = '26df460e6ef2dfefd959e436f02342ec'

    return [
        {
            url: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`,
            title: 'Netflix Movies',
            isLarge: true,
            _id: makeId()
        },
        {
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
            title: 'Romance Movies',
            isLarge: false,
            _id: makeId()


        },
        {
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
            title: 'Horror Movies',
            isLarge: false,
            _id: makeId()


        },
        {
            url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
            title: 'Comedy Movies',
            isLarge: false,
            _id: makeId()

        },

        {
            url: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-Us`,
            title: 'Top-Rate Movies',
            isLarge: false,
            _id: makeId()

        },
    ]

}


function makeId(length = 6) {
    var txt = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }

    return txt
}


export function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}
