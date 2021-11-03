import React from 'react';
import ReactDOM from 'react-dom';
import ToppingList from './ToppingList.js';

const root = document.getElementById("app");

console.log('REACTDOM RENDER')
ReactDOM.render(<ToppingList/>, root);
