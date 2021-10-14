import axios from 'axios';

import {
  _createTodo,
  _updateTodo,
  _deleteTodo,
  setTodos,
  setTodo
} from '../actions/actions';

// THUNK CREATORS

export const createTodo = (todo, history) => {
  return async (dispatch) => {
    const { data: created } = await axios.post('/api/todos', todo);
    dispatch(_createTodo(created));
    history.push('/');
  };
};

export const updateTodo = (todo, history) => {
  return async (dispatch) => {
    const { data: updated } = await axios.put(`/api/todos/${todo.id}`, todo);
    dispatch(_updateTodo(updated));
    history.push('/');
  };
};

export const deleteTodo = (id, history) => {
  return async (dispatch) => {
    const {data: todo} = await axios.delete(`/api/todos/${id}`);
    dispatch(_deleteTodo(todo));
    history.push('/');
  };
};

export const fetchTodos = () => {
  return async (dispatch) => {
    const { data: todos } = await axios.get('/api/todos');
    dispatch(setTodos(todos));
  };
};

export const fetchTodo = (id) => {
  return async (dispatch) => {
    const { data: todo } = await axios.get(`/api/todos/${id}`);
    dispatch(setTodo(todo));
  };
};
