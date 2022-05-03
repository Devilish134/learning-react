const newList = (actionName) =>
  `app/lists/${actionName}`;
const ADD_LIST = newList('ADD_LIST');

// selectors
export const getListById = (
  { lists },
  listId
) => lists.find((list) => list.id === listId);
export const getAllLists = ({ lists }) => lists;

// action creators
export const addList = (payload) => ({
  type: ADD_LIST,
  payload,
});

//Reducer
const listsReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    case ADD_LIST:
      return [
        ...statePart,
        { ...action.payload },
      ];
    default:
      return statePart;
  }
};

export default listsReducer;
