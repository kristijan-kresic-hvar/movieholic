import { useEffect, useState } from 'react'

import useTMDB from '../../hooks/api/useTMDB'
import styles from './Home.module.scss'

import Hero from '../../components/Hero/Hero'
import MovieList from '../../components/MovieList/MovieList'

const Home = () => {

    const { getNowPlayingMovies } = useTMDB()

    const [movies, setMovies] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)

    useEffect(() => {

        const controller = new AbortController()

        const fetchMovies = async () => {
            const response = await getNowPlayingMovies(1, controller.signal)
            if (response) {
                setMovies(response.results)
                setTotalResults(response.total_results)
                setTotalPages(response.total_pages)
            }
        }
        fetchMovies()

        return () => {
            controller.abort()
        }
    }, [])

    return (
        <div className={styles.home}>
            <main>
                <Hero
                    title="Movieholic"
                    subtitle="We make it easy to track your watched movies and tv shows! 😉"
                />
                <div className={styles.home__movie_list}>
                    <MovieList
                        title="Now Playing"
                        total={totalResults}
                        movies={movies}
                    />
                </div>
            </main>
        </div>
    )
}

export default Home