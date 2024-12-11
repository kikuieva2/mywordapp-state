import React, { useState } from "react";
import styles from "../styles/WordCardList.module.css"; 

const WordCardList = ({ words = [], defaultIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(
    defaultIndex < words.length ? defaultIndex : 0
  );

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else {
      setCurrentIndex(words.length - 1); 
    }
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
        <button className={styles.showTranslation}>
          {currentWord.russian}
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
