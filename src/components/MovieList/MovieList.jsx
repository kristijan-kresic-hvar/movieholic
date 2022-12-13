import PropTypes from 'prop-types'

import MovieCard from '../MovieCard/MovieCard'

import styles from './MovieList.module.scss'

const tempData = [
    {
        id: 1,
        title: 'The Shawshank Redemption',
        year: 1994,
        rating: 9.3,
        genres: ['Crime', 'Drama'],
        poster: 'https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg'

    },
    {
        id: 2,
        title: 'The Godfather',
        year: 1972,
        rating: 9.2,
        genres: ['Crime', 'Drama'],
        poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg'

    },
    {
        id: 3,
        title: 'The Godfather: Part II',
        year: 1974,
        rating: 9.0,
        genres: ['Crime', 'Drama'],
        poster: 'https://image.tmdb.org/t/p/w500/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg'
    },
    {
        id: 4,
        title: 'The Dark Knight',
        year: 2008,
        rating: 8.9,
        genres: ['Action', 'Crime', 'Drama', 'Thriller'],
        poster: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg'
    }
]

const MovieList = ({ title, total }) => {
    return (
        <div className={styles.movie_list}>
            <p className={styles.movie_list__info}>{title} <span>({total})</span></p>
            <div className={styles.movie_list__items}>
                {tempData.map(movie => (
                    <div
                        className={styles.movie_list__item}
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
    title: PropTypes.string,
    total: PropTypes.number
}

export default MovieList
