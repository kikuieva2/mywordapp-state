import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <NavLink to="/">MyWordApp</NavLink> {}
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : "")}>
            Главная
          </NavLink>
        </li>
        <li>
          <NavLink to="/game" className={({ isActive }) => (isActive ? styles.active : "")}>
            Карточки
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
