import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WordTable from './Components/WordTable';
import WordCardList from './Components/WordCardList';
import NavBar from './Components/NavBar';
import WordProvider from './context/WordContext';
import ErrorComponent from './Components/ErrorComponent';

const NotFound = () => <h2 style={{ textAlign: 'center' }}>404 - Страница не найдена</h2>;

function App() {
  const [error, setError] = useState(null);

  const handleError = (message) => {
    setError(message);
  };

  return (
    <WordProvider>
      <Router>
        <NavBar />
        {error && <ErrorComponent message={error} />}
        <Routes>
          <Route path="/" element={<WordTable />} />
          <Route path="/game" element={<WordCardList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </WordProvider>
  );
}

export default App;
