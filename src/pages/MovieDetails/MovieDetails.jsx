import MediaHero from "../../components/MediaHero/MediaHero";

import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  return (
    <div className={styles.movie_details}>
      <div className={styles.movie_details__hero}>
        <MediaHero
          mediaTitle="The Shawshank Redemption"
          mediaWallpaper="https://images2.alphacoders.com/450/thumb-1920-450291.jpg"
        />
      </div>
    </div>
  );
};

export default MovieDetails;
