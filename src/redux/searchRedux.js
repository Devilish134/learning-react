import strContains from '../utils/strContains';

const search = (actionName) =>
  `app/lists/${actionName}`;
const FILTER_CARDS = search('FILTER_CARDS');

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

//actions
export const filterCards = (payload) => ({
  type: FILTER_CARDS,
  payload,
});

//reducer
const searchReducer = (
  statePart = '',
  action
) => {
  switch (action.type) {
    case FILTER_CARDS:
      console.log(action.payload.search);
      return action.payload.search;
    default:
      return statePart;
  }
};

export default searchReducer;
