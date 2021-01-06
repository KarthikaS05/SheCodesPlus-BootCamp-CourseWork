let now = new Date();

//JS Challenge 1
console.log(
  `Current Date : ${now.getDate()}/ ${
    now.getMonth() + 1
  }/ ${now.getFullYear()} `
);

/* 
JS Challenge 2
Log the number of milliseconds in the current time */
console.log(`Tim in millisecs : ${now.getMilliseconds()}`);

/* JS Challenge 3
Log the current day */
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let day = days[now.getDay()];
console.log(` current day : ${day}`);

/* JS Challenge 4
Log the current year */
console.log(` current year: ${now.getFullYear()}`);

/* JS Challenge 5
Log the current month */
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let month = months[now.getMonth()];
console.log(`current month: ${month}`);

/* JS Challenge 6
Display the current date following the following format: Today is Thursday, April 4, 2020
 */

console.log(`Today is ${day}, ${month} ${now.getDate()}, ${now.getFullYear()}`);

/* JS Challenge 7
Create a function formatDate which returns a date following this format: Thursday, April 4, 2020 
Call this function with the current time
 Log the result such as console.log(formatDate(new Date())); */

const formatDate = (curr) => {
  let day = days[curr.getDay()];
  let month = months[curr.getMonth()];
  return `${day}, ${month} ${curr.getDate()}, ${curr.getFullYear()}`;
};

console.log(formatDate(new Date()));
