import styles from './Home.module.scss'

import Hero from '../../components/Hero/Hero'

const Home = () => {
    return (
        <div className={styles.home}>
            <main>
                <Hero
                    title="MovieHolic"
                    subtitle="We make it easy to track your watched movies and tv shows! 😉"
                />
            </main>
        </div>
    )
}

export default Home