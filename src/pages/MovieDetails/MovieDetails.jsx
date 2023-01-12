import MediaHero from "../../components/MediaHero/MediaHero";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useTMDB from "../../hooks/api/useTMDB";
import styles from "./MovieDetails.module.scss";

const MovieDetails = () => {
  const { id } = useParams();
  const { getMovieDetails } = useTMDB();

  const { data, isLoading, error } = useQuery(["movieDetails", id], () =>
    getMovieDetails(id)
  );

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className={styles.movie_details}>
      <div className={styles.movie_details__hero}>
        <MediaHero
          mediaTitle={data.title}
          mediaWallpaper={data.backdrop_path}
        />
      </div>
    </div>
  );
};

export default MovieDetails;
