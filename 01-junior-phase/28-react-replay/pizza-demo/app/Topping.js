import React from 'react';

// Functional component
const Topping = (props) => {
  console.log('Rendering topping component');
  return (
    <li onClick = {() => props.updateSelectedTopping(props.toppingName)}>
      {props.toppingName}
    </li>
  )
}

export default Topping;
