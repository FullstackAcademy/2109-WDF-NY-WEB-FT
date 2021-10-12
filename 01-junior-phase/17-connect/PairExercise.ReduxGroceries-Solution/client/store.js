import { createStore, applyMiddleware } from 'redux';
import loggerMiddleware from 'redux-logger';

//action type
const ADD_GROCERY = 'ADD_GROCERY';
const TOGGLE_GROCERY = 'TOGGLE_GROCERY';
const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
const SET_QUANTITY = 'SET_QUANTITY';

//action creator
let nextId = 0;
export const addGrocery = text => ({
  type: ADD_GROCERY,
  id: nextId++,
  text,
});

export const toggleGrocery = id => ({
  type: TOGGLE_GROCERY,
  id,
});

const SHOW_ALL = 'SHOW_ALL';
const SHOW_BOUGHT = 'SHOW_BOUGHT';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
export const setVisibilityFilter = visFilter => ({
  type: SET_VISIBILITY_FILTER,
  visFilter,
});

export const setQuantity = (id, quantity) => ({
  type: SET_QUANTITY,
  id,
  quantity,
});

const reducer = (state = { groceries: [], visFilter: SHOW_ALL }, action) => {
  switch (action.type) {
    case ADD_GROCERY:
      const newGrocery = {
        id: action.id,
        text: action.text,
        bought: false,
        quantity: 1,
      };
      return { ...state, groceries: [...state.groceries, newGrocery] };
    case TOGGLE_GROCERY:
      let groceries = state.groceries.map(grocery => {
        return grocery.id === action.id
          ? { ...grocery, bought: !grocery.bought }
          : grocery;
      });
      return { ...state, groceries };
    case SET_VISIBILITY_FILTER:
      return { ...state, visFilter: action.visFilter };
    case SET_QUANTITY:
      groceries = state.groceries.map(grocery => {
        if (grocery.id === action.id) {
          return { ...grocery, quantity: action.quantity };
        } else {
          return grocery;
        }
      });
      return { ...state, groceries };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(loggerMiddleware));

store.dispatch(addGrocery('Milk'));
store.dispatch(addGrocery('Cookies'));

export default store;
