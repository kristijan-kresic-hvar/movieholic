import styles from "./Navbar.module.scss";

import { Link } from "react-router-dom";

import NavItem from "../NavItem/NavItem";

import logoSVG from "../../assets/img/logo.svg";
import arrowRightSVG from "../../assets/icons/arrow_right.svg";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__inner}>
        <Link to="/">
          <div className={styles.navbar__logo}>
            <img src={logoSVG} alt="logo illustration" />
          </div>
        </Link>
        <div className={styles.navbar__items}>
          <NavItem text="Movies" />
          <NavItem text="TV Shows" />
          <NavItem text="Login" icon={arrowRightSVG} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
