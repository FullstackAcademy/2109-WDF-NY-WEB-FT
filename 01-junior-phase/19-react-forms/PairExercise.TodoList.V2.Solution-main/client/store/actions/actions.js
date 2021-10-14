import types from '../constants/constants'

// ACTION CREATORS

export const _createTodo = (todo) => {
  return {
    type: types.CREATE_TODO,
    todo
  };
};

export const _updateTodo = (todo) => {
  return {
    type: types.UPDATE_TODO,
    todo
  };
};

export const _deleteTodo = (todo) => {
  return {
    type: types.DELETE_TODO,
    todo
  };
};

export const setTodos = (todos) => {
  return {
    type: types.SET_TODOS,
    todos
  };
};

export const setTodo = (todo) => {
  return {
    type: types.SET_TODO,
    todo
  };
};

