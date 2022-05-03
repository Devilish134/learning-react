const newCard = (actionName) =>
  `app/lists/${actionName}`;
const ADD_TITLE = newCard('ADD_TITLE');

//selectors
export const getFavorite = (state) =>
  state.cards.filter(
    (card) => card.isFavorite === true
  );

//actions
export const addTitle = (payload) => ({
  type: ADD_TITLE,
  payload,
});

export const toggleFavorite = (payload) => ({
  type: 'TOGGLE_CARD_FAVORITE',
  payload,
});

export const removeTitle = (payload) => ({
  type: 'REMOVE_TITLE',
  payload,
});

//reducer
const cardsReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    case ADD_TITLE:
      return [
        ...statePart,
        { ...action.payload },
      ];
    case 'TOGGLE_CARD_FAVORITE':
      return statePart.map((card) =>
        card.id === action.payload
          ? {
              ...card,
              isFavorite: !card.isFavorite,
            }
          : card
      );
    case 'REMOVE_TITLE':
      return statePart.filter(
        (card) => card.id !== action.payload
      );
    default:
      return statePart;
  }
};

export default cardsReducer;
