import { NavLink } from "react-router-dom";
import styles from "./styles.module.scss";

const GeneralNavigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink className={styles.link} to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/login">
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default GeneralNavigation;
