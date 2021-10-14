import { createStore, applyMiddleware } from 'redux';
import loggingMiddleware from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';

export default createStore(
  rootReducer,
  applyMiddleware(thunk, loggingMiddleware)
);
