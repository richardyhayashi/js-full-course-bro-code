// object

const person1 = {
   firstName: "Spongebob",
   lastName: "Squaerpants",
   age: 30,
   isEmployed: true,
   sayHello: () => {console.log("Hi! I am Spongebob!")},
   eat: () => {console.log("I am eating a Krabby Patty")},
};

const person2 = {
  firstName: 'Patrick',
  lastName: 'Star',
  age: 42,
  isEmployed: false,
  sayHello: () => {console.log("Hey, I'm Patrick...")},
  eat: () => {console.log("I am eating roast beef, chicken, an pizza");}
};

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();