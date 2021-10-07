import React from 'react';
import Favorite from './Favorite';

const SingleContact = (props) => {
  const { selectedContact, selectContact } = props;
  const { name, email, phone, imageUrl } = selectedContact;

  return (
    <div id="single-contact">
      <img src={imageUrl} />
      <div id="contact-info">
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone: {phone}</p>
        <Favorite contact={selectedContact} selectContact={selectContact} />
      </div>
    </div>
  );
};

export default SingleContact;
