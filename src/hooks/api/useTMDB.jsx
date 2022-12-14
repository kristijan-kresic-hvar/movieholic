import axios from 'axios'

const useTMDB = () => {

    const getLatestMovies = async (abortSignal = null) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/latest?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }

    const getNowPlayingMovies = async (page = 1, abortSignal = null) => {
        try {
            const response = await axios.get(
                ` https://api.themoviedb.org/3/movie/now_playing?api_key=${import.meta.env.VITE_API_KEY}&language=en-US&page=${page}`
                , {
                    signal: abortSignal
                })
            return response.data
        }
        catch (err) {
            if (abortSignal.aborted) {
                return
            }

            console.log(err)
        }
    }

    const getMovieDetails = async (movieId, abortSignal = null) => {
        try {
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${import.meta.env.VITE_API_KEY}&language=en-US`, {
                signal: abortSignal
            })
            return response.data
        } catch (err) {
            if (abortSignal.aborted) {
                return
            }

            console.error(err)
        }
    }

    return {
        getLatestMovies,
        getNowPlayingMovies,
        getMovieDetails
    }
}
export default useTMDB