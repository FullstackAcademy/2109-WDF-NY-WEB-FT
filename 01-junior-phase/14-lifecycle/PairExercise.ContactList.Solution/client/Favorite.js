import React from 'react';
import axios from 'axios';

const Favorite = (props) => {
  const { contact, selectContact } = props;

  const updateFavoriteStatus = async (contactId) => {
    try {
      await axios.put(`/api/contacts/${contactId}`, {
        favorite: !contact.favorite,
      });
      selectContact(contactId);
    } catch (err) {
      console.log('There was a problem making contact!');
      console.log(err);
    }
  };

  return (
    <div className="fav-container" onClick={() => updateFavoriteStatus(contact.id)}>
      {contact.favorite ? (
        <img className="fav-image" src="/checked.png"></img>
      ) : (
        <img className="fav-image" src="/unchecked.png"></img>
      )}
      <span>Favorite</span>
    </div>
  );
};

export default Favorite;
