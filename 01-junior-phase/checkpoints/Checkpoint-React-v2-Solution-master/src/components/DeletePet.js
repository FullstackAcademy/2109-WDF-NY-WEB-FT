import React from 'react';
import axios from 'axios';

/**
 * Steps
 * 1. Render a button with "Delete" in it
 * 2. Give it the class "delete-button"
 * 3. When user clicks the button, send DELETE to /api/pets/:petId
 *    where petId is provided by props
 * 4. Call the `handleDelete` function, provided on props
 * 5. INTEGRATION STEP! The pet should now be deleted. EITHER
 *    a. refetch the pets from the server, OR
 *    b. syncronously remove the pet from the Root component
 * 6. If the server responds with 500, then don't call handleDelete
 */

// Hooks / Class Solution
const DeletePet = (props) => {
  const { handleDelete, petId } = props;
  const handleClick = async () => {
    try {
      await axios.delete(`/api/pets/${petId}`);
      handleDelete(petId);
      // handleDelete()
    } catch (err) {
      // console.error(err.message)
    }
  };
  return (
    <button className="delete-pet" onClick={handleClick}>
      Delete
    </button>
  );
};

// Starting Point
// const DeletePet = () => null

export default DeletePet;
