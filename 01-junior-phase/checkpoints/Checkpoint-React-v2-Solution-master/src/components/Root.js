import React, { useEffect, useState } from 'react';
import PetList from './PetList';
import axios from 'axios';

// Class Solution
class Root extends React.Component {
  constructor() {
    super();
    this.state = {
      pets: [],
      error: null,
      loading: true,
    };
    this.fetchPets = this.fetchPets.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  async fetchPets() {
    try {
      this.setState({ loading: true });
      const { data } = await axios.get('/api/pets');
      this.setState({ pets: data, loading: false });
    } catch (err) {
      this.setState({ error: err.message, loading: false });
    }
  }
  componentDidMount() {
    this.fetchPets();
  }

  handleDelete(id) {
    // Refetch after delete:
    // this.fetchPets()

    // Remove from state:
    this.setState((prevState) => ({
      pets: prevState.pets.filter((pet) => pet.id !== id),
    }));
  }

  render() {
    const { error, loading, pets } = this.state;
    const { handleDelete } = this;
    return (
      <>
        {error && <div>Error: {error}</div>}
        {loading && <div>Loading</div>}
        <h1>Adoption Center</h1>
        <PetList pets={pets} handleDelete={handleDelete} />
      </>
    );
  }
}

// Hooks Solution
// const Root = () => {
//   const [pets, setPets] = useState([])
//   const [error, setError] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [fetchCounter, setFetchCounter] = useState(0)
//   useEffect(() => {
//     (async function() {
//       try {
//         const { data } = await axios.get("/api/pets")
//         setPets(data)
//       } catch (err) {
//         setError(err.message)
//       } finally {
//         setLoading(false)
//       }
//     })()
//   }, [fetchCounter])
//
//   // const refetch = () => setFetchCounter(fetchCounter + 1)
//
//   const removePet = petId => {
//     setPets(pets.filter(pet => pet.id !== petId))
//   }
//
//   return (
//     <>
//       {error && <div>Error: {error}</div>}
//       {loading && <div>Loading</div>}
//       <h1>Adoption Center</h1>
//       <PetList pets={pets} handleDelete={removePet} />
//       {/* <PetList pets={pets} handleDelete={refetch} /> */}
//     </>
//   )
// }

export default Root;
