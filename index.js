const button = document.querySelector(".btn");
button.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event);
});
console.log(button);