//

let username = "BroCode";

console.log(username.charAt(0));
console.log(username.indexOf("o"));
console.log(username.lastIndexOf('o'));
console.log(username.length);
console.log(username.trim());
console.log(username.toUpperCase());
console.log(username.toLocaleLowerCase());
console.log(username.repeat(3));
console.log(username.startsWith(' '));
console.log(username.endsWith(' '));
console.log(username.includes(' '));

let phoneNumber = "123-456-7890";

console.log(phoneNumber.replaceAll('-', '/'));
console.log(phoneNumber.padStart(15, '0'));
console.log(phoneNumber.padEnd(15, '0'));