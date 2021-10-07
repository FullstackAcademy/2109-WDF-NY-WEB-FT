import React from 'react';

const ContactRow = (props) => {
  const { contact, selectContact } = props;
  const { id, name, phone, email } = contact;

  return (
    <tr onClick={() => selectContact(id)}>
      <td>{name}</td>
      <td>{phone}</td>
      <td>{email}</td>
    </tr>
  );
};

export default ContactRow;
