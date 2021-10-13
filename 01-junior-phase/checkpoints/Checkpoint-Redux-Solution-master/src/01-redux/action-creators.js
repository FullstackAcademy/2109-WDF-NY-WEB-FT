export const ADOPT_PET = "ADOPT_PET";
export const ADD_NEW_CAT = "ADD_NEW_CAT";
export const ADD_NEW_DOG = "ADD_NEW_DOG";
export const PREVIEW_PET = "PREVIEW_PET";
export const REMOVE_CAT = "REMOVE_CAT";
export const REMOVE_DOG = "REMOVE_DOG";

export const adoptPet = pet => ({
  type: ADOPT_PET,
  pet
});

export const previewPet = pet => ({
  type: PREVIEW_PET,
  pet
});

export const addNewCat = cat => ({
  type: ADD_NEW_CAT,
  cat
});

export const addNewDog = dog => ({
  type: ADD_NEW_DOG,
  dog
});

export const removeCat = cat => ({
  type: REMOVE_CAT,
  catId: cat.id
});

export const removeDog = dog => ({
  type: REMOVE_DOG,
  dogId: dog.id
});
