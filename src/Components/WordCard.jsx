import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/WordCard.module.css";

const WordCard = ({ word, onShowTranslation }) => {
  const [isTranslationVisible, setTranslationVisible] = useState(false);
  const buttonRef = useRef(null); // Для фокуса на кнопке

  // Устанавливаем фокус на кнопку при рендеринге
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.focus();
    }
  }, [word]);

  const handleShowTranslation = () => {
    if (!isTranslationVisible) {
      setTranslationVisible(true);
      onShowTranslation(); // Сообщаем родителю об изучении слова
    }
  };

  return (
    <div className={styles.wordCard}>
      <h3>{word.english}</h3>
      <p>{word.transcription}</p>
      <button
        ref={buttonRef}
        className={styles.showTranslation}
        onClick={handleShowTranslation}
      >
        {isTranslationVisible ? word.russian : "Показать перевод"}
      </button>
    </div>
  );
};

export default WordCard;
