// setTimeout(callback, delay)

// --- Named Function ---
// function sayHello() {
//   window.alert('Hello');
// }
// setTimeout(sayHello, 3000);



// --- Anonymous Function ---
// setTimeout(function () {
//   window.alert("Hello");
// }, 3000);



// --- Arrow Function ---
//setTimeout(() => window.alert("Hello"), 3000);



// clearTimeout(timeoutId)
// const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
// clearTimeout(timeoutId);



let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}