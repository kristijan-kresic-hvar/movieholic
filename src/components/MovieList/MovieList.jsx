import PropTypes from 'prop-types'

import MovieCard from '../MovieCard/MovieCard'

import styles from './MovieList.module.scss'

const MovieList = ({ title, total, movies }) => {
    return (
        <div className={styles.movie_list}>
            <p className={styles.movie_list__info}>{title} <span>({total})</span></p>
            <div className={styles.movie_list__items}>
                {movies.map(movie => (
                    <div
                        className={styles.movie_list__item}
                        key={movie.id}
                    >
                        <MovieCard
                            data={movie}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

MovieList.propTypes = {
    title: PropTypes.string.isRequired,
    total: PropTypes.number.isRequired,
    movies: PropTypes.array.isRequired,
}

export default MovieList
