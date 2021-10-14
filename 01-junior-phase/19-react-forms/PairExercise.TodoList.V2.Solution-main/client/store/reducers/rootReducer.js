import { combineReducers } from 'redux';

import todosReducer from './todosReducer';
import todoReducer from './todoReducer';

export default combineReducers({
  todos: todosReducer,
  todo: todoReducer
});
