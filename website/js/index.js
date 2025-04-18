// JSON

// const names = ['Spongebob', 'Patrick', 'Squidward', 'Sandy'];
// const person = {
//   name: 'Spongebob',
//   age: 30,
//   isEmployed: true,
//   hobbies: ['Jellyfishing', 'Karate', 'Cooking'],
// };
// const people = [
//   {
//     name: 'Spongebob',
//     age: 30,
//     isEmployed: true,
//   },
//   {
//     name: 'Patrick',
//     age: 34,
//     isEmployed: false,
//   },
//   {
//     name: 'Squidward',
//     age: 50,
//     isEmployed: true,
//   },
//   {
//     name: 'Sandy',
//     age: 27,
//     isEmployed: false,
//   },
// ];

// const jsonString = JSON.stringify(names);
// console.log(names);
// console.log(jsonString);

// const jsonString2 = JSON.stringify(person);
// console.log(person);
// console.log(jsonString2);

// const jsonString3 = JSON.stringify(person);
// console.log(people);
// console.log(jsonString3);



// const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
// const jsonPerson = `{
//   "name": "Spongebob",
//   "age": 30,
//   "isEmployed": true,
//   "hobbies": ["Jellyfishing", "Karate", "Cooking"]
// }`;
// const jsonPeople = `[
//   {
//     "name": "Spongebob",
//     "age": 30,
//     "isEmployed": true
//   },
//   {
//     "name": "Patrick",
//     "age": 34,
//     "isEmployed": false
//   },
//   {
//     "name": "Squidward",
//     "age": 50,
//     "isEmployed": true
//   },
//   {
//     "name": "Sandy",
//     "age": 27,
//     "isEmployed": false
//   }
// ]`;

// // const parsedData = JSON.parse(jsonNames);
// // console.log(jsonNames);
// // console.log(parsedData);

// // const parseData2 = JSON.parse(jsonPerson);
// // console.log(jsonPerson);
// // console.log(parseData2);

// const parseData3 = JSON.parse(jsonPeople);
// console.log(jsonPeople);
// console.log(parseData3);



fetch("people.json")
   .then(response => response.json())
   .then(values  => values.forEach(value => console.log(value.name)))
   .catch(error => console.log(error));