import {
  SET_TODOS,
  UPDATE_TODO,
  DELETE_TODO,
  CREATE_TODO
} from '../constants/constants';

// TODOS REDUCER

export default (state = [], action) => {
  switch (action.type) {
    case SET_TODOS:
      return action.todos;
    case UPDATE_TODO:
      return state.map((todo) =>
        todo.id === action.todo.id ? action.todo : todo
      );
    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.todo.id);
    case CREATE_TODO:
      return [...state, action.todo];
    default:
      return state;
  }
};
