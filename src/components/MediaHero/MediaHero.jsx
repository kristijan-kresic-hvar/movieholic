import PropTypes from "prop-types";

import styles from "./MediaHero.module.scss";

const image_url_prefix = "https://image.tmdb.org/t/p/w1200";

const MediaHero = ({ mediaTitle, mediaWallpaper }) => {
  const backgroundStyle = {
    background: `linear-gradient(180deg, rgba(54, 44, 146, 0.4) 0%, rgba(18, 98, 151, 0.4) 100%), url(${mediaWallpaper})`,
    backgroundSize: "cover",
    backgroundPosition: "center top",
    backgroundRepeat: "no-repeat",
  };

  return (
    <div style={backgroundStyle} className={styles.media_hero}>
      <div className={styles.media_hero__title}>
        <h1>{mediaTitle}</h1>
      </div>
    </div>
  );
};

MediaHero.propTypes = {
  mediaTitle: PropTypes.string.isRequired,
  mediaWallpaper: PropTypes.string.isRequired,
};

export default MediaHero;
