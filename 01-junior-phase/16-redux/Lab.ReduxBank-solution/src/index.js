import { createStore } from "redux";

const balance = document.getElementById("balance");
const deposit5 = document.getElementById("deposit5");
const deposit25 = document.getElementById("deposit25");
const withdraw5 = document.getElementById("withdraw5");
const withdraw25 = document.getElementById("withdraw25");

deposit5.onclick = () => store.dispatch({ type: "deposit", amount: 5 })
deposit25.onclick = () => store.dispatch({ type: "deposit", amount: 25 })
withdraw5.onclick = () => store.dispatch({ type: "withdraw", amount: 5 })
withdraw25.onclick = () => store.dispatch({ type: "withdraw", amount: 25 })


const store = createStore((state = { balance: 0 }, action) => {
  switch (action.type) {
    case "deposit":
      return { balance: state.balance + action.amount }
    case "withdraw":
      return { balance: state.balance - action.amount }
    default:
      return state;
  }
})

const balanceField = document.getElementById("balance");
store.subscribe(() => {
  console.log("The store state changed. Here is the new state:", store.getState());
  balanceField.innerText = `$ ${store.getState().balance}`
})