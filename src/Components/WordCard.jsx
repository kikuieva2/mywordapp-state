import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/WordCard.module.css";

const WordCard = ({ word, onShowTranslation }) => {
  const [showTranslation, setShowTranslation] = useState(false);
  const buttonRef = useRef(null); // Создаем ссылку на кнопку

  useEffect(() => {
    setShowTranslation(false); // Сбрасываем состояние при смене карточки
    if (buttonRef.current) {
      buttonRef.current.focus(); // Устанавливаем фокус на кнопку
    }
  }, [word]); // Запускаем эффект при изменении слова

  const handleShowTranslation = () => {
    setShowTranslation(true);
    onShowTranslation(); // Увеличение счётчика
  };

  return (
    <div className={styles.wordCard}>
      <h3>{word.english}</h3>
      <p>{word.transcription}</p>
      {!showTranslation ? (
        <button ref={buttonRef} onClick={handleShowTranslation}>
          Посмотреть перевод
        </button>
      ) : (
        <p>{word.russian}</p>
      )}
    </div>
  );
};

export default WordCard;
