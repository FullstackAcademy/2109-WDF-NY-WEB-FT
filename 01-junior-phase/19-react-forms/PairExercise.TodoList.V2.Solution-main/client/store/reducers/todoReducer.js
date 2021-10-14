import {
  SET_TODO
} from '../constants/constants';

// TODO REDUCER

export default (state = {}, action) => {
  switch (action.type) {
    case SET_TODO:
      return action.todo;
    default:
      return state;
  }
};
