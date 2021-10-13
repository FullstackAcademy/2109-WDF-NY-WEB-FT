import { combineReducers } from "redux";
import {
  RECEIVED_A_PAYCHECK,
  BOUGHT_AN_ITEM,
  HAD_A_BIRTHDAY
} from "./action-creators";

//function originalReducer (priorState={}, action) {
//  switch (action.type) {
//    case RECEIVED_A_PAYCHECK:
//      return {
//        ...priorState,
//        cash: priorState.cash + action.amountAfterTaxes,
//      }
//    case HAD_A_BIRTHDAY:
//      return {
//        ...priorState,
//        age: priorState.age + 1
//      }
//    case BOUGHT_AN_ITEM:
//      return {
//        ...priorState,
//        cash: priorState.cash - action.price,
//        possessions: [...priorState.possessions, action.item]
//      }
//    default:
//      return priorState
//  }
//}

function ageReducer(age = 0, action) {
  switch (action.type) {
    case HAD_A_BIRTHDAY:
      return age + 1;
    default:
      return age;
  }
}

function possessionsReducer(possessions = [], action) {
  switch (action.type) {
    case BOUGHT_AN_ITEM:
      return [...possessions, action.item];
    default:
      return possessions;
  }
}

function cashReducer(cash = 0, action) {
  switch (action.type) {
    case RECEIVED_A_PAYCHECK:
      return cash + action.amountAfterTaxes;
    case BOUGHT_AN_ITEM:
      return cash - action.price;
    default:
      return cash;
  }
}

const combinedReducers = combineReducers({
  age: ageReducer,
  possessions: possessionsReducer,
  cash: cashReducer
});

export default combinedReducers;
