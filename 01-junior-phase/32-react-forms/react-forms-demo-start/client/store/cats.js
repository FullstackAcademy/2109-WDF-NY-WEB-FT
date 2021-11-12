import axios from 'axios';

const GOT_CATS = 'GOT_CATS';
const ADD_CAT = 'ADD_CAT';

const gotCats = (cats) => {
  return {
    type: GOT_CATS,
    cats,
  };
};

const addCat = (cat) => {
  return {
    type: ADD_CAT,
    cat
  };
};

export const fetchCats = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/cats');
      dispatch(gotCats(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addNewCat = (cat) => {
  return async (dispatch) => {
    try {
      const imgResponse = await axios.get('https://api.thecatapi.com/v1/images/search', { params: { limit:1, size:"full" } });
      const imgUrl = imgResponse.data[0].url
      const catWithImage = {...cat, imgUrl: imgUrl}
      console.log('cat with image', catWithImage)
      const { data } = await axios.post('/api/cats', catWithImage)
      console.log("data from axios", data)
      dispatch(addCat(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case GOT_CATS:
      return action.cats;
    // state: [...Users]
    case ADD_CAT:
      return [...state, action.cat];
    // state: [...Users +++++ action.user]
    default:
      return state;
  }
};
