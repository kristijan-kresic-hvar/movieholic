import { useRef } from "react";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import posterPlaceholderPNG from "../../assets/img/poster_placeholder.png";
import styles from "./MovieCard.module.scss";

const image_url_prefix = "https://image.tmdb.org/t/p/w500";

const MovieCard = ({ data, dataType }) => {
  const posterRef = useRef(null);

  return (
    <Link to={`/${dataType}/${data.id}`}>
      <div className={styles.movie_card}>
        {data.vote_average > 0 && (
          <div className={styles.movie_card__rating}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.7299 3.51001L15.4899 7.03001C15.7299 7.52002 16.3699 7.99001 16.9099 8.08001L20.0999 8.61001C22.1399 8.95001 22.6199 10.43 21.1499 11.89L18.6699 14.37C18.2499 14.79 18.0199 15.6 18.1499 16.18L18.8599 19.25C19.4199 21.68 18.1299 22.62 15.9799 21.35L12.9899 19.58C12.4499 19.26 11.5599 19.26 11.0099 19.58L8.01991 21.35C5.87991 22.62 4.57991 21.67 5.13991 19.25L5.84991 16.18C5.97991 15.6 5.74991 14.79 5.32991 14.37L2.84991 11.89C1.38991 10.43 1.85991 8.95001 3.89991 8.61001L7.08991 8.08001C7.61991 7.99001 8.25991 7.52002 8.49991 7.03001L10.2599 3.51001C11.2199 1.60001 12.7799 1.60001 13.7299 3.51001Z"
                stroke="#FFAD49"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p>{data.vote_average.toFixed(1)}</p>
          </div>
        )}
        <div className={styles.movie_card__poster}>
          <img
            ref={posterRef}
            src={image_url_prefix + data.poster_path || posterPlaceholderPNG}
            alt=""
            onError={() => (posterRef.current.src = posterPlaceholderPNG)}
          />
        </div>
        <div className={styles.movie_card__footer}>
          <p>{data.title || data.name}</p>
        </div>
      </div>
    </Link>
  );
};

MovieCard.propTypes = {
  data: PropTypes.shape({}).isRequired,
  dataType: PropTypes.oneOf(["movie", "tv"]),
};

export default MovieCard;
