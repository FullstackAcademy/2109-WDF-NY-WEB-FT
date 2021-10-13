import React, { useState } from 'react';
import DeletePet from './DeletePet';

// This component receives props that look something like this:
/*
{
  pet: {
    name: "Rigatoni",
    species: "cat",
    description: "A flaming hot cheetoh in feline form"
  }
}
*/

// Class Solution
class SinglePet extends React.Component {
  constructor() {
    super();
    this.state = {
      adopted: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => ({ adopted: !prevState.adopted }));
  }
  render() {
    const { adopted } = this.state;
    const { pet, handleDelete } = this.props;
    const { id, name, description, species } = pet;
    return (
      <div className={`single-pet ${adopted ? 'adopted' : ''}`}>
        <h2>{name}</h2>
        <div>{species}</div>
        <div>{description}</div>
        <hr />
        <div>{adopted ? 'Adopted!' : 'Available'}</div>
        <button onClick={this.handleClick}>Toggle Status</button>
        <DeletePet petId={id} handleDelete={handleDelete} />
      </div>
    );
  }
}

// Hooks Solution
// const SinglePet = props => {
//   const { id, name, description, species } = props.pet
//   const { handleDelete } = props
//   const [adopted, setAdopted] = useState(false)
//   return (
//     <div className={`single-pet ${adopted ? "adopted" : ""}`}>
//       <h2>{name}</h2>
//       <div>{species}</div>
//       <div>{description}</div>
//       <hr />
//       <div>{adopted ? "Adopted!" : "Available"}</div>
//       <button onClick={() => setAdopted(!adopted)}>Toggle Status</button>
//       {/* <DeletePet petId={id} handleDelete={deletePet} /> */}
//       <DeletePet petId={id} handleDelete={handleDelete} />
//     </div>
//   )
// }

export default SinglePet;
