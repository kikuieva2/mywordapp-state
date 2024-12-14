import React, { useState } from "react";
import styles from "../styles/WordCardList.module.css";

const WordCardList = ({ words = [], defaultIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(
    defaultIndex < words.length ? defaultIndex : 0
  );
  const [studiedWords, setStudiedWords] = useState(0); // Состояние для изученных слов

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < words.length - 1 ? prevIndex + 1 : 0
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : words.length - 1
    );
  };

  const incrementStudiedWords = () => {
    setStudiedWords((prevCount) => prevCount + 1);
  };

  if (words.length === 0) {
    return <p>Список слов пуст. Добавьте слова для отображения.</p>;
  }

  const currentWord = words[currentIndex];

  return (
    <div className={styles.wordCardContainer}>
      <h2>Изучено слов: {studiedWords}</h2> {/* Отображение количества изученных слов */}
      <div className={styles.wordCard}>
        <WordCard
          word={currentWord}
          onShowTranslation={incrementStudiedWords} // Передаем функцию
        />
      </div>
      <div className={styles.navigation}>
        <button onClick={handlePrevious}>← Предыдущее</button>
        <button onClick={handleNext}>Следующее →</button>
      </div>
    </div>
  );
};

const WordCard = ({ word, onShowTranslation }) => {
  const [showTranslation, setShowTranslation] = useState(false);

  const handleShowTranslation = () => {
    setShowTranslation(true);
    onShowTranslation(); // Увеличение счётчика
  };

  return (
    <div className={styles.wordCard}>
      <h3>{word.english}</h3>
      <p>{word.transcription}</p>
      {!showTranslation ? (
        <button onClick={handleShowTranslation}>Посмотреть перевод</button>
      ) : (
        <p>{word.russian}</p>
      )}
    </div>
  );
};

export default WordCardList;
