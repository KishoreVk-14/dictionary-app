import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dictionaryReducer from '../reducers/dictionaryReducer';
import historyReducer from '../reducers/historyReducer';

const rootReducer = combineReducers({
  dictionary: dictionaryReducer,
  history: historyReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
