import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';

//selectors

export const getFilteredCards = (
  { cards, search },
  columnId
) =>
  cards.filter(
    (card) =>
      card.columnId === columnId &&
      strContains(card.title, search)
  );

export const getAllColumns = (state) =>
  state.columns;

export const getColumnsByList = (
  { columns },
  listId
) =>
  columns.filter(
    (column) => column.listId === listId
  );

export const getListById = (
  { lists },
  listId
) => lists.find((list) => list.id === listId);

// action creators

export const addColumn = (payload) => ({
  type: 'ADD_COLUMN',
  payload,
});

export const addTitle = (payload) => ({
  type: 'ADD_TITLE',
  payload,
});

export const filterCards = (payload) => ({
  type: 'FILTER_CARDS',
  payload,
});

//reducer

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
        ...action.payload,
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
