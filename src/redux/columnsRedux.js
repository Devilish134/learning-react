const newColumn = (actionName) =>
  `app/lists/${actionName}`;
const ADD_COLUMN = newColumn('ADD_COLUMN');

//selectors
export const getAllColumns = (state) =>
  state.columns;

export const getColumnsByList = (
  { columns },
  listId
) =>
  columns.filter(
    (column) => column.listId === listId
  );

// actions
export const addColumn = (payload) => ({
  type: 'ADD_COLUMN',
  payload,
});

//Reducer
const columnsReducer = (
  statePart = [],
  action
) => {
  switch (action.type) {
    case ADD_COLUMN:
      return [
        ...statePart,
        { ...action.payload },
      ];
    default:
      return statePart;
  }
};

export default columnsReducer;
