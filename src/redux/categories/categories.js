const ADD_CATEGORY = 'ADD_CATEGORY';
const REMOVE_CATEGORY = 'REMOVE_CATEGORY';

const initialState = [];

export const addCategories = (category) => ({
  type: ADD_CATEGORY,
  category,
});

export const removeCategories = (category) => ({
  type: REMOVE_CATEGORY,
  category,
});

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CATEGORY: return [
      ...state,
      action.payload,
    ];
    case REMOVE_CATEGORY: return [
      ...state.filter((each) => each.id !== action.payload.id),
    ];
    default: return [
      {
        text: 'Under construction',
      },
    ];
  }
};

export default categoriesReducer;
