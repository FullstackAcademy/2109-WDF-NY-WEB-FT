import {createStore, applyMiddleware, combineReducers} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import allPiesReducer from './reducers/allPies'
import favoritePieReducer from './reducers/favoritePie'

// With combineReducers, the only job of store.js is to create the store!

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware)

// Constructing ONE BIG REDUCERS from all the reducers indicated by our object argument. And also creating ONE MEGA STATE that is a combination of all the state being tracked by your mini reducers
const reducer = combineReducers({
  allPies: allPiesReducer,
  favoritePie: favoritePieReducer
})

// Our final state would look something like this:

// state = {
//   allPies: [], // in order to update this piece of state, store will look at corresponding sub-reducer
//   favoritePie: {}
// }

const store = createStore(reducer, middlewares)

export default store
