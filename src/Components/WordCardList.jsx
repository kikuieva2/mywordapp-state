import React, { useState } from "react";
import styles from "../styles/WordCardList.module.css";
import WordCard from "./WordCard"; 

const WordCardList = ({ words = [], defaultIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(defaultIndex < words.length ? defaultIndex : 0);
  const [studiedWords, setStudiedWords] = useState([]); 
  const [studiedCount, setStudiedCount] = useState(0); // Счетчик изученных слов

  const handleShowTranslation = (id) => {
    if (!studiedWords.includes(id)) {
      setStudiedWords([...studiedWords, id]); // Добавляем ID в изученные
      setStudiedCount(studiedCount + 1); // Увеличиваем счетчик
    }
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex < words.length - 1 ? prevIndex + 1 : 0));
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : words.length - 1));
  };

  if (words.length === 0) {
    return <p>Список слов пуст. Добавьте слова для отображения.</p>;
  }

  const currentWord = words[currentIndex];

  return (
    <div className={styles.wordCardContainer}>
      <WordCard
        word={currentWord}
        onShowTranslation={() => handleShowTranslation(currentWord.id)}
      />
      <div className={styles.navigation}>
        <button onClick={handlePrevious}>← Предыдущее</button>
        <button onClick={handleNext}>Следующее →</button>
      </div>
      <p>Изучено слов за тренировку: {studiedCount}</p>
    </div>
  );
};

export default WordCardList;
