import React, { useState } from 'react';
import SinglePet from './SinglePet';
// import pets from "../petdata"
// const [rigatoni] = pets

// Class Solution
class PetList extends React.Component {
  constructor() {
    super();
    this.state = {
      filter: 'all',
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }
  handleSelectChange(evt) {
    this.setState({ filter: evt.target.value });
  }
  render() {
    const { filter } = this.state;
    const { handleDelete } = this.props;

    const pets = this.props.pets.filter((pet) => {
      if (filter === 'all') return pet;
      if (filter === 'cats') return pet.species === 'cat';
      if (filter === 'dogs') return pet.species === 'dog';
    });
    return (
      <>
        <div>
          <label htmlFor="speciesFilter">Filter by species: </label>
          <select
            onChange={this.handleSelectChange}
            value={filter}
            name="speciesFilter"
          >
            <option>all</option>
            <option>cats</option>
            <option>dogs</option>
          </select>
        </div>
        <div className="pet-list">
          {pets.map((pet) => {
            return (
              <SinglePet key={pet.name} pet={pet} handleDelete={handleDelete} />
            );
          })}
        </div>
      </>
    );
  }
}

// Hooks Solution
// const PetList = props => {
//   const [filter, setFilter] = useState("all")
//   const { handleDelete } = props
//   const handleSelectChange = evt => {
//     setFilter(evt.target.value)
//   }
//   const pets = props.pets.filter(pet => {
//     if (filter === "all") return pet
//     if (filter === "cats") return pet.species === "cat"
//     if (filter === "dogs") return pet.species === "dog"
//   })
//   return (
//     <>
//       <div>
//         <label htmlFor="speciesFilter">Filter by species: </label>
//         <select onChange={handleSelectChange} name="speciesFilter">
//           <option>all</option>
//           <option>cats</option>
//           <option>dogs</option>
//         </select>
//       </div>
//       <div className="pet-list">
//         {pets.map(pet => {
//           return (
//             <SinglePet key={pet.id} pet={pet} handleDelete={handleDelete} />
//           )
//         })}
//       </div>
//     </>
//   )
// }

// Possible starting state...
// Currently, PetList renders one SinglePet. We'd like it to render a list of
// pets, passed in as props.pets.
// const PetList = () => {
//   return (
//     <div className="pet-list">
//       <SinglePet pet={rigatoni} />
//     </div>
//   )
// }

export default PetList;
