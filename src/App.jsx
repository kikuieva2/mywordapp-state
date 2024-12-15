import React, { useState, useEffect } from "react";
import WordTable from "./Components/WordTable";
import WordCardList from "./Components/WordCardList";
import wordsData from "./data/words.json";

function App() {
  const [words, setWords] = useState([]);

  useEffect(() => {
    setWords(wordsData); 
  }, []);

  return (
    <>
      <h1>Словарный тренажёр</h1>
      <WordTable words={words} setWords={setWords} />
      <WordCardList words={words} />
    </>
  );
}

export default App;
