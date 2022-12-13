import styles from './Home.module.scss'

import Hero from '../../components/Hero/Hero'
import MovieList from '../../components/MovieList/MovieList'

const Home = () => {
    return (
        <div className={styles.home}>
            <main>
                <Hero
                    title="Movieholic"
                    subtitle="We make it easy to track your watched movies and tv shows! 😉"
                />
                <div className={styles.home__movie_list}>
                    <MovieList
                        title="Movies"
                        total={120}
                    />
                </div>
            </main>
        </div>
    )
}

export default Home