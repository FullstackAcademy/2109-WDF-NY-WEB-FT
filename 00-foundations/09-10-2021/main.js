const paragraphs = document.getElementsByTagName("p");
const doSomethingLink = document.getElementsByTagName("a")[2];

doSomethingLink.addEventListener("click", (event) => {
  event.preventDefault();

  paragraphs[0].innerText = "I have changed this paragraph tag";
});
