// array

let fruits = ["apple", "orange", "banana", "coconut"];

//fruits[3] = "Coconut",
//fruits.push("coconut")
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// let index = fruits.indexOf("mango")

// console.log(numOfFruits);
// console.log(index);

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}

fruits.sort().reverse();

for (let fruit of fruits) {
   console.log(fruit);
}