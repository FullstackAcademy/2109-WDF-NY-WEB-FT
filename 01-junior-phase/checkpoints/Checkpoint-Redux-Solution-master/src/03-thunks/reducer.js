import { combineReducers } from "redux";
import axios from "axios";

import { GOT_BALLOONS, BALLOONS_ERROR } from "./action-creators";

function balloonsReducer(balloons = [], action) {
  switch (action.type) {
    case GOT_BALLOONS:
      return action.balloons;
    default:
      return balloons;
  }
}

function balloonsErrorReducer(error = null, action) {
  switch (action.type) {
    case BALLOONS_ERROR:
      return action.error;
    default:
      return error;
  }
}

const combinedReducers = combineReducers({
  balloons: balloonsReducer,
  balloonsError: balloonsErrorReducer
});

export default combinedReducers;
