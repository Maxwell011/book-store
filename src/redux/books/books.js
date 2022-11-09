const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    id: 1,
    title: 'Your Next Move',
    author: 'Patrick',
  },
  {
    id: 2,
    title: 'Purple Hibiscus',
    author: 'Chiamanda Adiche Ngozi',
  },
];

export const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

function bookReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_BOOK: {
      const recent = [
        {
          id: `${Date.now()}`,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
      return [...state, recent];
    }
    case REMOVE_BOOK:
      return state.filter((each) => each.id !== action.id);
    default:
      return state;
  }
}

export default bookReducer;
