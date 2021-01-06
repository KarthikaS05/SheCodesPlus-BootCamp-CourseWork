// Challenge 1
// Log li with id special
const spl = document.querySelector("li#special");
console.log(spl);

// Challenge 2
// Log all li with class of country
const li = document.querySelectorAll("li.country");
console.log(li);

// Challenge 3
// Add class special to the li with id special
spl.classList.add("special");

// Challenge 4
// In your code, replace the content of the element with id special
// by your favorite country (other than Portugal of course)
spl.innerHTML = "India 🦚";
