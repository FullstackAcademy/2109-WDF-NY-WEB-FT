import nameLogger, { clickHandler, scrollHandler } from "./handlers";
import axios from "axios"

const button = document.getElementsByTagName("button")[0];
const placeholder = document.querySelector("#placeholder")
const fetchButton = document.querySelector("#fetch-button")

button.addEventListener("click", clickHandler);
window.addEventListener("scroll", scrollHandler);
fetchButton.addEventListener("click", () => {
  fetchHandler()
})

const fetchHandler = async function () {
  try {
    // 1. fetch
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
    const data = await response.json()
    placeholder.innerText = JSON.stringify(data);

    // 2. axios
    const response = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    placeholder.innerText = JSON.stringify(response.data);
  } catch(error) {
    console.error(error)
  }
}
