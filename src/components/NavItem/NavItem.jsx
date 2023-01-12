import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

import styles from "./NavItem.module.scss";

const NavItem = ({ text, to, icon, ...props }) => {
  return (
    <NavLink className={styles.nav_item} to={to} {...props}>
      {text}
      {icon && <img src={icon} alt="icon illustration" />}
    </NavLink>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

export default NavItem;
