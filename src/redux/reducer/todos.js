const initialState = {
  data: [],
  isSearchActive: false,
  foundTodos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case "DELETE_TODO":
      return {
        ...state,
        data: [...state.data.filter((todo) => todo.id !== action.id)],
      };
    case "UPDATE_TODO":
      return {
        ...state,
        data: [
          ...state.data.filter((todo) => todo.id !== action.id),
          { message: action.message, title: action.title, id: action.id },
        ],
      };
    case "SEARCH_TODO":
      return {
        ...state,
        isSearchActive: !!action.payload.length > 0 || false,
        foundTodos: state.data.filter((item) => {
          return item.title;
        }),
      };
    default:
      return state;
  }
};

export default todos;
