// DOM

// document.title = "My Website";
// document.body.style.backgroundColor = "hsl(0, 0%, 15%)";

// console.dir(document);

const username = 'rhayashi';
const welcomeMsg = document.getElementById('welcome-msg');

welcomeMsg.textContent += username === "" ? `Guest` : username

console.dir(document);