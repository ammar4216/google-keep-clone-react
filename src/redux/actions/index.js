import { ADD_TODO, DELETE_TODO, SEARCH_TODO, UPDATE_TODO } from "./type";

export const addTodo = ({ id, message, title }) => {
  return {
    type: ADD_TODO,
    payload: {
      id,
      message,
      title,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: DELETE_TODO,
    id,
  };
};

export const updateTodo = ({ message, title, id }) => ({
  type: UPDATE_TODO,
  message,
  title,
  id,
});

export const searchTodo = (searchText) =>{
  return {
    type: SEARCH_TODO,
    payload: searchText,
  }
}
