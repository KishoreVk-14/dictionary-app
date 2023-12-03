import dictionaryService from '../services/dictionaryService';

export const setWordDetails = (details) => ({
  type: 'SET_WORD_DETAILS',
  payload: details,
});

export const fetchWordDetails = (word) => {
  return async (dispatch) => {
    try {
      const details = await dictionaryService.getWordDetails(word);
      dispatch(setWordDetails(details));
    } catch (error) {
      console.error('Error fetching word details:', error);
    }
  };
};
