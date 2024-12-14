import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Menu.module.css";

const Menu = () => {
  return (
    <nav className={styles.menu}>
      <div className={styles.logo}>
        <Link to="/">🌟 MyWordApp</Link>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="/">Главная</Link>
        </li>
        <li>
          <Link to="/game">Карточки</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
