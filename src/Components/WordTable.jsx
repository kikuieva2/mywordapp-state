import React, { useState } from "react";
import styles from "../styles/WordTable.module.css";

const WordTable = ({ words, setWords }) => {
  const [editing, setEditing] = useState(null);
  const [newWord, setNewWord] = useState({ word: "", translation: "", transcription: "" });
  const [tempWord, setTempWord] = useState({ word: "", translation: "", transcription: "" });

  const handleAddWord = () => {
    if (newWord.word && newWord.translation && newWord.transcription) {
      const newWordObject = {
        id: Date.now().toString(),
        english: newWord.word,
        russian: newWord.translation,
        transcription: newWord.transcription,
      };
      setWords([...words, newWordObject]);
      setNewWord({ word: "", translation: "", transcription: "" });
    }
  };

  const handleDelete = (id) => {
    setWords(words.filter((word) => word.id !== id));
  };

  return (
    <div className={styles.wordTableContainer}>
      <div className={styles.addWordForm}>
        <input
          type="text"
          placeholder="Английское слово"
          value={newWord.word}
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
        />
        <input
          type="text"
          placeholder="Перевод"
          value={newWord.translation}
          onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })}
        />
        <input
          type="text"
          placeholder="Транскрипция"
          value={newWord.transcription}
          onChange={(e) => setNewWord({ ...newWord, transcription: e.target.value })}
        />
        <button onClick={handleAddWord}>Добавить</button>
      </div>

      <table className={styles.wordTable}>
        <thead>
          <tr>
            <th>Английское слово</th>
            <th>Перевод</th>
            <th>Транскрипция</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>{word.english}</td>
              <td>{word.russian}</td>
              <td>{word.transcription}</td>
              <td>
                <button onClick={() => handleDelete(word.id)}>Удалить</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WordTable;
