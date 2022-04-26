import { createStore } from 'redux';
import initialState from './initialState';
import strContains from '../utils/strContains';
import { createSelector } from 'reselect';

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

export const getAllColumns = createSelector(
  [
    (state) => state.columns,
    (state, category) => category,
  ],
  (columns, category) =>
    columns.filter(
      (columns) => columns.category === category
    )
);

//try to use reducer. Not working properly.

/*export const getAllColumns = createSelector(
  (state) => state.columns,
  (columns, title) =>
    columns.map((id) => {
      const column = columns[id, title];
      return {
        ...columns,
        column: columns[column.title],
      };
    })
);*/

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
