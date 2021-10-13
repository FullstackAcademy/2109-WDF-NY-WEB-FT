import {
  ADD_NEW_CAT,
  ADD_NEW_DOG,
  ADOPT_PET,
  PREVIEW_PET,
  REMOVE_DOG,
  REMOVE_CAT
} from "./action-creators";

const initialState = {
  dogs: [
    { name: "Taylor", imgUrl: "src/img/taylor.png" },
    { name: "Reggie", imgUrl: "src/img/reggie.png" },
    { name: "Pandora", imgUrl: "src/img/pandora.png" }
  ],
  cats: [
    { name: "Earl", imgUrl: "src/img/earl.png" },
    { name: "Winnie", imgUrl: "src/img/winnie.png" },
    { name: "Fellini", imgUrl: "src/img/fellini.png" }
  ],
  petToAdopt: {},
  petToPreview: {}
};

// Remember that reducers take in two parameters:
//  1. The (previous) state. When we use 'createStore', the previous state is undefined,
//     so, the reducer is initially invoked with undefined as the first argument.
//     This means that if we set a default parameter value, we can use that as our initial return value
//
//  2. The action object, which we get whenever we use `store.dispatch`
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_NEW_CAT:
      return {...state, cats: [...state.cats, action.cat] };
    case ADD_NEW_DOG:
      return {...state, dogs: [...state.dogs, action.dog] };
    case ADOPT_PET:
      return {...state, petToAdopt: action.pet };
    case PREVIEW_PET:
      return {...state, petToPreview: action.pet };
    case REMOVE_CAT:
      return {
        ...state,
        cats: state.cats.filter(cat => cat.id !== action.catId)
      };
    case REMOVE_DOG:
      return {
        ...state,
        dogs: state.dogs.filter(dog => dog.id !== action.dogId)
      };
    default:
      return state;
  }
}
