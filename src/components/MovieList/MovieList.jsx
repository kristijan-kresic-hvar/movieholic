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
    },
    {
        id: 4,
        title: 'The Dark Knight',
        year: 2008,
        rating: 8.9,
        genres: ['Action', 'Crime', 'Drama', 'Thriller'],
        poster: 'https://image.tmdb.org/t/p/w500/1hRoyzDtpgMU7Dz4JF22RANzQO7.jpg'
    },
    {
        id: 5,
        title: '12 Angry',
        year: 1957,
        rating: 8.9,
        genres: ['Crime', 'Drama'],
        poster: 'https://image.tmdb.org/t/p/w500/4ZocdxnOO6q2UbdKye2wgofLFhB.jpg'
    },
    {
        id: 6,
        title: 'Schindler\'s List',
        year: 1993,
        rating: 8.9,
        genres: ['Biography', 'Drama', 'History'],
        poster: 'https://image.tmdb.org/t/p/w500/yPisjyLweCl1tbgwgtzBCNCBle.jpg'
    },
    {
        id: 7,
        title: 'The Lord of the Rings: The Return of the King',
        year: 2003,
        rating: 8.9,
        genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        poster: 'https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg'
    },
    {
        id: 8,
        title: 'Pulp Fiction',
        year: 1994,
        rating: 8.9,
        genres: ['Crime', 'Drama'],
        poster: 'https://image.tmdb.org/t/p/w500/dM2w364MScsjFf8pfMbaWUcWrR.jpg'
    },
    {
        id: 9,
        title: 'The Good, the Bad and the Ugly',
        year: 1966,
        rating: 8.9,
        genres: ['Western'],
        poster: 'https://image.tmdb.org/t/p/w500/6ksm1sjKMFLbO7UY2i6G1ju9SML.jpg'
    },
    {
        id: 10,
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        year: 2001,
        rating: 8.8,
        genres: ['Action', 'Adventure', 'Drama', 'Fantasy'],
        poster: 'https://image.tmdb.org/t/p/w500/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg'
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
    title: PropTypes.string,
    total: PropTypes.number
}

export default MovieList
