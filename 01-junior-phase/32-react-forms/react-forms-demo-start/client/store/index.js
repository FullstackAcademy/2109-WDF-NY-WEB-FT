import { compose } from 'redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import cats from './cats';

const reducer = combineReducers({
  cats,
});

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, createLogger()),
);

export default store;
