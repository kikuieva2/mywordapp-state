import React from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import WordTable from "./Components/WordTable";
import WordCardList from "./Components/WordCardList";
import styles from "./styles/NavBar.module.css"; // Добавлен импорт стилей

const NotFound = () => <h2 style={{ textAlign: "center" }}>404 - Страница не найдена</h2>;


function App() {
  return (
    <Router>
      {/* НавБар */}
      <nav className={styles.navBar}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Главная
        </NavLink>
        <NavLink
          to="/game"
          className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
        >
          Карточки слов
        </NavLink>
      </nav>

      {/* Маршрутизация */}
      <Routes>
        <Route path="/" element={<WordTable />} />
        <Route path="/game" element={<WordCardList words={words} />} />
        <Route path="*" element={<NotFound />} /> {/* Страница 404 */}
      </Routes>
    </Router>
  );
}

export default App;
