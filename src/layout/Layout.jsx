import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";

import Navbar from "../components/Navbar/Navbar";

const Layout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
