const pets = [
  {
    id: 1,
    name: 'Rigatoni',
    description: 'A flaming hot cheetoh in feline form',
    species: 'cat',
  },
  {
    id: 2,
    name: 'Cody',
    description: 'Adorable pug who loves to hug',
    species: 'dog',
  },
  {
    id: 3,
    name: 'Frankie',
    description: 'The snuggliest kitty',
    species: 'cat',
  },
  {
    id: 4,
    name: 'Anabelle',
    description: 'Might eat your couch',
    species: 'dog',
  },
];

let nextId = pets.length + 1;

const getPets = () => [...pets];
const addPet = (pet) => {
  pets.push({ ...pet, id: nextId++ });
};
const removePet = (petId) => {
  const id = pets.findIndex((pet) => pet.id === petId);
  if (id < 0) throw new Error('Pet Not Found');
  pets.splice(id, 1);
};

module.exports = {
  getPets,
  addPet,
  removePet,
};
