// spread operator

// let numbers = [1, 2, 3, 4, 5];
// let maximum = Math.max(...numbers);
// let minimum = Math.min(...numbers);

// console.log(minimum);
// console.log(maximum);

// let username = "Bro Code";
// let letters = [...username].join('-');

// console.log(letters);

let fruits = ["apple", 'orange', 'banana'];
let newFruits = [...fruits];
let vegtables = ["carrots", "celery", "potatoes"]

console.log(fruits);
console.log(newFruits);

let foods = [...fruits, ...vegtables, "eggs", "milk"];

console.log(foods);