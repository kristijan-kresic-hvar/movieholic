import PropTypes from "prop-types";

import styles from "./Search.module.scss";

const Search = ({ placeholder }) => {
  return (
    <input type="text" className={styles.search} placeholder={placeholder} />
  );
};

Search.propTypes = {
  placeholder: PropTypes.string,
};

export default Search;
