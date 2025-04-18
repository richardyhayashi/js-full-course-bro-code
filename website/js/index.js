// Date objects

// let date = new Date();

// console.log(date);



// Date(year, month, day, hour, minute, second, ms)
//date = new Date(2024, 0, 1, 2, 3, 4, 5);
//date = new Date('2024-01-02T12:00:00Z');
// date = new Date(0);

// console.log(date);


// const date = new Date();

// console.log(date.getFullYear());
// // Month: 0 - Jan, 1 - Feb, ..., 11 - Dec
// console.log(date.getMonth());
// // Date: 1 - 31
// console.log(date.getDate());
// // Hours: 0 - 23
// console.log(date.getHours());
// // Minutes: 0 -59
// console.log(date.getMinutes());
// // Seconds: 0 - 59
// console.log(date.getSeconds());
// // 0 - Sunday, 1 - Monday, ..., 6 - Saturday
// console.log(date.getDay());



// date.setFullYear(2024);
// date.setMonth(0);
// date.setDate(1);
// date.setHours(2);
// date.setMinutes(3);
// date.setSeconds(4);

// console.log(date);



const date1 = new Date('2023-12-31');
//const date2 = new Date('2024-01-01');
const date2 = new Date('2023-12-30');

if (date2 > date1) {
  console.log("Happy New Year!");
}