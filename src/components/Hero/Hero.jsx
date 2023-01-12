import PropTypes from "prop-types";

import Search from "../Search/Search";

import styles from "./Hero.module.scss";

const Hero = ({ title, subtitle, isReversed }) => {
  const renderContent = () => {
    if (isReversed) {
      return (
        <>
          <h3 className={styles.hero__subtitle}>{subtitle}</h3>
          <h1 className={styles.hero__title}>{title}</h1>
        </>
      );
    }
    return (
      <>
        <h1 className={styles.hero__title}>{title}</h1>
        <h3 className={styles.hero__subtitle}>{subtitle}</h3>
      </>
    );
  };

  return (
    <div className={styles.hero}>
      {renderContent()}
      <div className={styles.hero__search}>
        <Search placeholder="Search Movies or TV Shows" />
      </div>
    </div>
  );
};

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  isReversed: PropTypes.bool,
};

export default Hero;
