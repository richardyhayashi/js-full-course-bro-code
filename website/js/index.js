// element selectors
// 1. document.getElementById()           // ELEMENT OR NULL
// 2. document.getElementsByClassName()   // HTML COLLECTION
// 3. document.getelementsByTagName()     // HTML COLLECTION
// 4. document.querySelector()            // ELEMENT OR NULL
// 5. document.querySelectorAll()         // NODELIST



// const myHeading = document.getElementById("my-heading");
// myHeading.style.backgroundColor = 'yellow';
// myHeading.style.textAlign = "center";

// console.log(myHeading);



// const fruits = document.getElementsByClassName("fruits");

// console.log(fruits);

// // fruits[0].style.backgroundColor = 'red';
// // fruits[1].style.backgroundColor = 'orange';
// // fruits[2].style.backgroundColor = 'yellow';

// // for (let fruit of fruits) {
// //    fruit.style.backgroundColor = "yellow";
// // }

// Array.from(fruits).forEach(fruit => {
//    fruit.style.backgroundColor = "yellow";
// });



// const h4Elements = document.getElementsByTagName('h4');
// const liElements = document.getElementsByTagName('li');

// console.log(h4Elements);

// //h4Elements[0].style.backgroundColor = "yellow";

// // for (let h4Element of h4Elements) {
// //    h4Element.style.backgroundColor = "yellow";
// // }

// // for (let liElement of liElements) {
// //    liElement.style.backgroundColor = "limegreen";
// // }

// Array.from(h4Elements).forEach(h4Element =>  {
//    h4Element.style.backgroundColor = "yellow";
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = 'lightGreen';
// });



// //const element = document.querySelector('.fruits');
// //const element = document.querySelector('h4');
// const element = document.querySelector('ul');
// //const element = document.querySelector('ol');

// element.style.backgroundColor = "yellow"



const fruits = document.querySelectorAll(".fruits");

fruits[0].style.backgroundColor = "yellow";

const foods = document.querySelectorAll('li');

//foods[5].style.backgroundColor = 'yellow';

console.log(foods);

foods.forEach(food => {
   food.style.backgroundColor = "yellow";
});