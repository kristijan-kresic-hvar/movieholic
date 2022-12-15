import { useEffect, useState } from 'react'

import useTMDB from '../../hooks/api/useTMDB'
import styles from './Home.module.scss'

import Hero from '../../components/Hero/Hero'
import MovieList from '../../components/MovieList/MovieList'
import FilterList from '../../components/FilterList/FilterList'
import FilterItem from '../../components/FilterItem/FilterItem'
import Button from '../../components/Button/Button'

import arrowRightSVG from '../../assets/icons/arrow_right.svg'

const Home = () => {

    const {
        getNowPlayingMovies,
        getTVShowsAiringToday
    } = useTMDB()

    const [movies, setMovies] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(1)
    const [activeFilter, setActiveFilter] = useState('movies')

    const fetchMovies = async (signal = null) => {
        const response = await getNowPlayingMovies(1, signal)
        if (response) {
            setMovies(response.results)
            setTotalResults(response.total_results)
            setTotalPages(response.total_pages)
            setActiveFilter('movies')
        }
    }

    const fetchTVShows = async (signal = null) => {
        const response = await getTVShowsAiringToday(1, signal)
        if (response) {
            setMovies(response.results)
            setTotalResults(response.total_results)
            setTotalPages(response.total_pages)
            setActiveFilter('tv_shows')
        }
    }

    useEffect(() => {
        const controller = new AbortController()
        fetchMovies(controller.signal)
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
                <div className={styles.home__filter_list}>
                    <FilterList>
                        <FilterItem
                            title="Movies"
                            handleClick={fetchMovies}
                            isActive={activeFilter === 'movies'}
                        />
                        <FilterItem
                            title="TV Shows"
                            handleClick={fetchTVShows}
                            isActive={activeFilter === 'tv_shows'}
                        />
                    </FilterList>
                </div>
                <div className={styles.home__movie_list}>
                    <MovieList
                        title={activeFilter === 'movies' ? 'Now Playing' : 'Airing Today'}
                        total={totalResults}
                        movies={movies}
                    />
                </div>
                <div className={styles.home__load_more}>
                    <Button
                    >
                        Load More
                    </Button>
                </div>
            </main>
        </div>
    )
}

export default Home