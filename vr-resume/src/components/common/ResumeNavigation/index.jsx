import { NavLink } from "react-router-dom";

import styles from "./styles.module.scss";

const ResumeNavigation = () => {
  return (
    <nav className={styles.resumeNavigation}>
      <ul>
        <li>
          <NavLink className={styles.link} to="/resume/selfPresentation">
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/resume/carrer">
            Career
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/resume/education">
            Education
          </NavLink>
        </li>
        <li>
          <NavLink className={styles.link} to="/resume/projects">
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default ResumeNavigation;
