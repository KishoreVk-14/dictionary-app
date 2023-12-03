import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const WordDetails = () => {
  const { word } = useParams();
  const wordDetails = useSelector((state) => state.dictionary.wordDetails);

  // Display word details here

  return (
    <div>
      <h2>{word}</h2>
      {/* Display word details here */}
    </div>
  );
};

export default WordDetails;
