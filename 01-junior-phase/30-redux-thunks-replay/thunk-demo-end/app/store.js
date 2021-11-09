import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

// ACTION TYPES
const GOT_PIES_FROM_SERVER = 'GOT_PIES_FROM_SERVER'

// ACTION CREATORS
export const gotPies = (pies) => ({
  type: GOT_PIES_FROM_SERVER,
  pies
})

// THUNK CREATOR
/* This is a function that returns another function. the outside function is just a wrapper
function that we'll give to our component, but the inside function will 1) make an ajax request and 2) dispatch the gotProducts action with the fetched data.
*/
export const fetchPies = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/pies')
    dispatch(gotPies(data))
  }
}

const initialState = {
  pies: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PIES_FROM_SERVER:
      return {...state, pies: action.pies}
    default:
      return state
  }
}

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware)
const store = createStore(reducer, middlewares)

export default store
