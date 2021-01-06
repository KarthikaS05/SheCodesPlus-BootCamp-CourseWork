// Challenge 1
// Add click eventListener to the button. Alert `It is 18 degrees`
const btn = document.querySelector("button");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  alert("It is 18 degrees");
});
// Challenge 2
// When the button is clicked, replace button label by ‘18 degrees’
btn.addEventListener("click", (event) => {
  event.preventDefault();
  btn.textContent = "18 degrees";
});
