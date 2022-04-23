import { createStore } from 'redux';
import initialState from './initialState';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COLUMN':
      return {
        ...state,
        columns: [
          ...state.columns,
          { ...action.payload },
        ],
      };
    case 'ADD_TITLE':
      return {
        ...state,
        cards: [
          ...state.cards,
          { ...action.payload },
        ],
      };
    case 'FILTER_CARDS':
      return {
        ...state,
        searchString: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
