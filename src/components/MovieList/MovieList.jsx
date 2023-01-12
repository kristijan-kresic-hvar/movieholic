import { Fragment } from "react";
import PropTypes from "prop-types";

import MovieCard from "../MovieCard/MovieCard";

import styles from "./MovieList.module.scss";

const MovieList = ({ title, total, data, dataType }) => {
  return (
    <div className={styles.movie_list}>
      <p className={styles.movie_list__info}>
        {title} <span>({total})</span>
      </p>
      <div className={styles.movie_list__items}>
        {data.pages.map((page) => (
          <Fragment key={page.page}>
            {page.results.map((movie) => (
              <div className={styles.movie_list__item} key={movie.id}>
                <MovieCard data={movie} dataType={dataType} />
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};

MovieList.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
  data: PropTypes.object.isRequired,
  dataType: PropTypes.oneOf(["movie", "tv"]),
};

export default MovieList;
