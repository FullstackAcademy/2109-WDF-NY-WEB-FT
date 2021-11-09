import axios from 'axios'

// ACTION TYPES
const GOT_PIES_FROM_SERVER = 'GOT_PIES_FROM_SERVER'

// ACTION CREATORS
export const gotPies = (pies) => ({
  type: GOT_PIES_FROM_SERVER,
  pies
})

// THUNK CREATOR
export const fetchPies = () => {
  return async (dispatch) => {
    const {data} = await axios.get('/pies')
    dispatch(gotPies(data))
  }
}

// 1. originally
// const initialState = {
//   pies: [],
//   favoritePie: {},
//   toBake: []
// }

// 2. then
// const initialState = {
//   pies: [],
// }

// 3. then
// const initialState =  []

// 4. then just define in first arg of reducer :')

// We love combineReducers because it simplifies the state DRAMATICALLY. no more annoying spread operator.
const reducer = (state = [], action) => {
  switch (action.type) {
    case GOT_PIES_FROM_SERVER:
      return action.pies;
    // can't avoid spread operator forever...for example:
    // case ADD_PIE:
    //   return [...state, action.newPie]
    default:
      return state
  }
}

export default reducer;
