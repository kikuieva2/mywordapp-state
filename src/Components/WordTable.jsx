import React, { useState } from 'react';
import styles from '../styles/WordTable.module.css';

const WordTable = ({ words, setWords }) => {
  const [editing, setEditing] = useState(null);
  const [newWord, setNewWord] = useState({ word: '', translation: '' });
  const [tempWord, setTempWord] = useState({ word: '', translation: '' });
  const [errors, setErrors] = useState({ word: false, translation: false });

  const handleEdit = (id) => {
    setEditing(id);
    const wordToEdit = words.find(word => word.id === id);
    setTempWord({ word: wordToEdit.english, translation: wordToEdit.russian });
  };

  const handleDelete = (id) => {
    setWords(words.filter(word => word.id !== id));
  };

  const handleSave = (id) => {
    // Проверка на пустые поля
    if (tempWord.word === '' || tempWord.translation === '') {
      setErrors({
        word: tempWord.word === '',
        translation: tempWord.translation === ''
      });
      alert('Пожалуйста, заполните все поля.');
      return;
    }

   
    const updatedWords = words.map(word =>
      word.id === id ? { ...word, english: tempWord.word, russian: tempWord.translation } : word
    );
    setWords(updatedWords);
    setEditing(null);
    setErrors({ word: false, translation: false }); 
  };

  const handleCancel = () => {
    setEditing(null);
    setTempWord({ word: '', translation: '' });
  };

  const handleAddWord = () => {
    if (newWord.word && newWord.translation) {
      const newId = Date.now().toString();
      const newWordObject = { id: newId, english: newWord.word, russian: newWord.translation };
      setWords([...words, newWordObject]);
      setNewWord({ word: '', translation: '' });
    } else {
      alert('Пожалуйста, заполните все поля.');
    }
  };

  return (
    <>
      <div className={styles.addWordForm}>
        <input
          type="text"
          value={newWord.word}
          placeholder="Angļu vārds"
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
          className={newWord.word === '' ? styles.errorInput : ''}
        />
        <input
          type="text"
          value={newWord.translation}
          placeholder="Tulkojums"
          onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })}
          className={newWord.translation === '' ? styles.errorInput : ''}
        />
        <button onClick={handleAddWord}>добавить слово</button>
      </div>

      <table className={styles.wordTable}>
        <thead>
          <tr>
            <th>Английский</th>
            <th>Перевод</th>
            <th>Акции</th>
          </tr>
        </thead>
        <tbody>
          {words.map((word) => (
            <tr key={word.id}>
              <td>
                {editing === word.id ? (
                  <input
                    type="text"
                    value={tempWord.word}
                    onChange={(e) => setTempWord({ ...tempWord, word: e.target.value })}
                    className={errors.word ? styles.errorInput : ''}
                  />
                ) : (
                  word.english
                )}
              </td>
              <td>
                {editing === word.id ? (
                  <input
                    type="text"
                    value={tempWord.translation}
                    onChange={(e) => setTempWord({ ...tempWord, translation: e.target.value })}
                    className={errors.translation ? styles.errorInput : ''}
                  />
                ) : (
                  word.russian
                )}
              </td>
              <td>
                {editing === word.id ? (
                  <>
                    <button
                      onClick={() => handleSave(word.id)}
                      disabled={tempWord.word === '' || tempWord.translation === ''}
                    >
                      Сохранить
                    </button>
                    <button onClick={handleCancel}>Отменить</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(word.id)}>Исправить</button>
                    <button onClick={() => handleDelete(word.id)}>Удалить</button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default WordTable;
