import nameLogger, { clickHandler, scrollHandler } from "./handlers";

const button = document.getElementsByTagName("button")[0];
const placeholder = document.querySelector("#placeholder")
const fetchButton = document.querySelector("#fetch-button")

button.addEventListener("click", clickHandler);
window.addEventListener("scroll", scrollHandler);
fetchButton.addEventListener("click", () => {
  fetchHandler()})

const fetchHandler = async function () {
  console.log("In func")
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1')
  const data = await response.json()
  placeholder.innerText = JSON.stringify(data);
}
