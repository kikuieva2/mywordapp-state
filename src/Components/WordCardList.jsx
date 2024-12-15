import React, { useState, useEffect, useRef } from "react";
import styles from "../styles/WordCardList.module.css";

const WordCardList = ({ words = [], defaultIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex);
  const [learnedCount, setLearnedCount] = useState(0);
  const translateButtonRef = useRef(null);

  useEffect(() => {
    // Фокус на кнопке "Посмотреть перевод" при смене карточки
    if (translateButtonRef.current) {
      translateButtonRef.current.focus();
    }
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % words.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + words.length) % words.length
    );
  };

  const handleShowTranslation = () => {
    alert(`Перевод: ${words[currentIndex].russian}`);
    setLearnedCount((prevCount) => prevCount + 1);
  };

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
          ref={translateButtonRef}
          className={styles.showTranslation}
          onClick={handleShowTranslation}
        >
          Посмотреть перевод
        </button>
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrevious}>← Предыдущее</button>
        <button onClick={handleNext}>Следующее →</button>
      </div>
      <p>Изучено слов: {learnedCount}</p>
    </div>
  );
};

export default WordCardList;
