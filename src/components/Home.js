import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchWordDetails } from '../actions/dictionaryActions';
import { addToHistory } from '../actions/historyActions';

const Home = () => {
  const dispatch = useDispatch();
  const [word, setWord] = useState('');

  const handleSearch = () => {
    if (word.trim() !== '') {
      dispatch(fetchWordDetails(word));
      dispatch(addToHistory(word));
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <div>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      {/* Display word details and search history here */}
    </div>
  );
};

export default Home;
