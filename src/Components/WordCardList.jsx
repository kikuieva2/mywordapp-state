import React, { useState, useEffect, useRef } from "react";
import words from "../data/words.json"; 
import styles from "../styles/WordCardList.module.css";

const WordCardList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTranslationVisible, setTranslationVisible] = useState(false);
  const translationButtonRef = useRef(null); // Для установки фокуса

  // Установка фокуса при смене карточки
  useEffect(() => {
    setTranslationVisible(false); // Скрываем перевод при новой карточке
    if (translationButtonRef.current) {
      translationButtonRef.current.focus();
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + words.length) % words.length);
  };

  const toggleTranslation = () => {
    setTranslationVisible(!isTranslationVisible);
  };

  const currentWord = words[currentIndex];

  return (
    <div className={styles.wordCardContainer}>
      <div className={styles.wordCard}>
        <h3>{currentWord.english}</h3>
        <p>{currentWord.transcription}</p>
        <button
          ref={translationButtonRef} // Устанавливаем фокус
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
