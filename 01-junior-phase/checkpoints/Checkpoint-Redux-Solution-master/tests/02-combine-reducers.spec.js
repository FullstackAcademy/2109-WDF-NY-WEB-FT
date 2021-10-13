/*
 * READ THIS FIRST
 *
 * The default initial of the store is the following:
 *
 * {
 *   age: 0,
 *   cash: 0,
 *   posessions, []
 * }
 *
 * Look at the files in: `src/02-combine-reducers/`
 *
 * Included in that directory is a reducer named `originalReducer`. This code is
 * commented out, and represents legacy code to refactor. All these tests pass
 * with the `originalReducer` function.
 *
 * Also included in that director are the empty reducer functions named
 * `ageReducer`, `cashReducer`, and `possessionsReducer`. These are used as
 * reducer functions in a call to `combineReducers`
 *
 * The object of this test is to move the appropriate chunks of the
 * `originalReducer` into the individual reducers named above.
 *
 * You will have to subtly re-write the reducer code, as the original version
 * was returning an entire state object, and these new reducers are tightly
 * scoped to either the `age`, `cash`, or `possessions` slice of state.
 *
 */
import { expect } from "chai";
import { createStore, applyMiddleware } from "redux";
import combinedReducers from "../src/02-combine-reducers/reducer";
import {
  createHadABirthdayAction,
  createReceivedAPaycheckAction,
  createBoughtAnItemAction
} from "../src/02-combine-reducers/action-creators";
import enforceImmutableState from 'redux-immutable-state-invariant';

let store;

beforeEach(() => {
  store = createStore(
    combinedReducers,
    applyMiddleware(enforceImmutableState())
  );
});

describe("Combine Reducers", () => {
  it("increments age when a person has a birthday", () => {
    store.dispatch(createHadABirthdayAction());
    store.dispatch(createHadABirthdayAction());
    store.dispatch(createHadABirthdayAction());

    expect(store.getState().age).to.equal(3);
  });

  it("adds to cash when a person receives a paycheck", () => {
    store.dispatch(createReceivedAPaycheckAction(2300));
    store.dispatch(createReceivedAPaycheckAction(2300));

    expect(store.getState().cash).to.equal(4600);
  });

  it("subtracts from cash when a person buys an item", () => {
    store.dispatch(createReceivedAPaycheckAction(1000));
    store.dispatch(createBoughtAnItemAction("A Cheap Boat", 500));

    expect(store.getState().cash).to.equal(500);
  });

  it("lists new purchases after a person buys an item", () => {
    store.dispatch(createReceivedAPaycheckAction(1000000));
    store.dispatch(createBoughtAnItemAction("A Modest Boat", 45000));
    store.dispatch(createBoughtAnItemAction("A Modest Yacht", 450000));

    expect(store.getState().possessions).to.deep.equal([
      "A Modest Boat",
      "A Modest Yacht"
    ]);
  });
});
