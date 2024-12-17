import React, { useState, useEffect } from "react";
import styles from "../styles/WordCardList.module.css";

const WordCardList = ({ words = [], defaultIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(
    defaultIndex < words.length ? defaultIndex : 0
  );
  const [isTranslationVisible, setTranslationVisible] = useState(false); // Состояние для отображения перевода

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < words.length - 1 ? prevIndex + 1 : 0
    );
    setTranslationVisible(false); // Скрываем перевод при смене карточки
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : words.length - 1
    );
    setTranslationVisible(false); // Скрываем перевод при смене карточки
  };

  const toggleTranslation = () => {
    setTranslationVisible(!isTranslationVisible);
  };

  useEffect(() => {
    // Устанавливаем фокус на кнопку "Показать перевод" при смене карточки
    const button = document.getElementById("showTranslationButton");
    if (button) {
      button.focus();
    }
  }, [currentIndex]);

  if (words.length === 0) {
    return <p>Список слов пуст. Добавьте слова для отображения.</p>;
  }

  const currentWord = words[currentIndex];

  return (
    <div className={styles.wordCardContainer}>
      <div className={styles.wordCard}>
        <h3>{currentWord.english}</h3>
        <p>{currentWord.transcription}</p>
        <button
          id="showTranslationButton"
          className={styles.showTranslation}
          onClick={toggleTranslation}
        >
          {isTranslationVisible ? currentWord.russian : "Показать перевод"}
        </button>
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrevious}>← Предыдущее</button>
        <button onClick={handleNext}>Следующее →</button>
      </div>
    </div>
  );
};

export default WordCardList;
