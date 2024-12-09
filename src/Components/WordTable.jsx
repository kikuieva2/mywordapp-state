import React, { useState } from 'react';
import styles from '../styles/WordTable.module.css';

const WordTable = ({ words, setWords }) => {
  const [editing, setEditing] = useState(null); 
  const [newWord, setNewWord] = useState({ word: '', translation: '' }); 
  const [tempWord, setTempWord] = useState({ word: '', translation: '' }); 

  // Rediģēšanas funkcija
  const handleEdit = (id) => {
    setEditing(id);
    const wordToEdit = words.find(word => word.id === id);
    setTempWord({ word: wordToEdit.english, translation: wordToEdit.russian });
  };

  // Dzēst vārdu
  const handleDelete = (id) => {
    setWords(words.filter(word => word.id !== id));
  };

  // Saglabāt izmaiņas
  const handleSave = (id) => {
    const updatedWords = words.map(word =>
      word.id === id ? { ...word, english: tempWord.word, russian: tempWord.translation } : word
    );
    setWords(updatedWords);
    setEditing(null);
  };

  // Atcelt rediģēšanu
  const handleCancel = () => {
    setEditing(null);
    setTempWord({ word: '', translation: '' });
  };

  // Funkcija, lai pievienotu jaunu vārdu
  const handleAddWord = () => {
    if (newWord.word && newWord.translation) {
      const newId = Date.now().toString(); // Jauns unikāls ID
      const newWordObject = { id: newId, english: newWord.word, russian: newWord.translation };
      setWords([...words, newWordObject]);
      setNewWord({ word: '', translation: '' }); // Atjaunot formu
    }
  };

  return (
    <>
      {/* Jaunu vārdu pievienošanas forma */}
      <div className={styles.addWordForm}>
        <input
          type="text"
          value={newWord.word}
          placeholder="Angļu vārds"
          onChange={(e) => setNewWord({ ...newWord, word: e.target.value })}
        />
        <input
          type="text"
          value={newWord.translation}
          placeholder="Tulkojums"
          onChange={(e) => setNewWord({ ...newWord, translation: e.target.value })}
        />
        <button onClick={handleAddWord}>Pievienot vārdu</button>
      </div>

      {/* Tabula */}
      <table className={styles.wordTable}>
        <thead>
          <tr>
            <th>Angļu vārds</th>
            <th>Tulkojums</th>
            <th>Akcijas</th>
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
                  />
                ) : (
                  word.russian
                )}
              </td>
              <td>
                {editing === word.id ? (
                  <>
                    <button onClick={() => handleSave(word.id)}>Saglabāt</button>
                    <button onClick={handleCancel}>Atcelt</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(word.id)}>Rediģēt</button>
                    <button onClick={() => handleDelete(word.id)}>Dzēst</button>
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
