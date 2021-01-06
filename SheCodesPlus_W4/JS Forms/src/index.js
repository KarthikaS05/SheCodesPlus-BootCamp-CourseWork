//Challenge 1
const splBtn = document.querySelector("#special-button");
splBtn.addEventListener("click", (event) => {
  event.preventDefault();
  alert("Hooray!");
});

//Challenge 2
const form = document.querySelector("#password-form");
form.addEventListener("submit", (event) => {
  const pwInput = document.querySelector("#password-input");
  alert(`${pwInput.value}`);
});

//Challenge 3
const signUpForm = document.querySelector("#signup-form");
signUpForm.addEventListener("submit", (event) => {
  console.log("Form clicked");
  const email = document.querySelector("#email-input");
  const uName = document.querySelector("#username-input");
  alert(`User Name :${uName.value} & Email :${email.value}`);
});
