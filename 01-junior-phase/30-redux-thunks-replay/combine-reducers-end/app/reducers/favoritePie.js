// ACTION TYPES
const GOT_FAVORITE_PIE = 'GOT_FAVORITE_PIE'

// ACTION CREATORS
export const gotFavoritePie = (pie) => ({
  type: GOT_FAVORITE_PIE,
  pie
})

// THUNK CREATOR
export const fetchPies = (pieId) => {
  return async (dispatch) => {
    const {data} = await axios.get(`/pies/${pieId}`)
    dispatch(gotFavoritePie(data))
  }
}

const reducer = (state = {}, action) => {
  switch (action.type) {
    case GOT_FAVORITE_PIE:
      return action.pie;
    default:
      return state;
  }
}

export default reducer;
