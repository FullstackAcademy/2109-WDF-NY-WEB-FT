import {createStore, applyMiddleware} from 'redux'
import axios from 'axios'
import loggingMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'

const GOT_PETS_FROM_SERVER = 'GOT_PETS_FROM_SERVER'

// VVV your code here VVV

const gotPets = (pets) => ({
  type: GOT_PETS_FROM_SERVER,
  pets
})

export const getPets = () => {
  return async (dispatch, getState, {axios}) => {
    const {data} = await axios.get('/pets')
    dispatch(gotPets(data))
  }
}

// ^^^ your code here ^^^

const initialState = {
  pets: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GOT_PETS_FROM_SERVER:
      return {...state, pets: action.pets}
    default:
      return state
  }
}

const middlewares = applyMiddleware(loggingMiddleware, thunkMiddleware.withExtraArgument({axios}))
const store = createStore(reducer, middlewares)

export default store
