// services/dictionaryService.js

const API_BASE_URL = 'https://api.dictionaryapi.dev/api/v2/entries/en/en';

const dictionaryService = {
  getWordDetails: async (word) => {
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data[0].meanings[0].definitions[0].definition);
      return data[0].meanings[0].definitions[0].definition;
    } catch (error) {
      console.error('Error fetching word details:', error.message);
      throw error;
    }
  },
};

export default dictionaryService;
