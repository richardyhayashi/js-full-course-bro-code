// getters & setters

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//   }

//   set width(newWidth) {
//     if (newWidth > 0) {
//       this._width = newWidth;
//     } else {
//       console.error('width must be a positive number');
//     }
//   }

//   get width() {
//     return `${this._width.toFixed(1)}cm`;
//   }

//   set height(newHeight) {
//     if (newHeight > 0) {
//       this._height = newHeight;
//     } else {
//       console.error('height must be a positive number');
//     }
//   }

//   get height() {
//     return `${this._height.toFixed(1)}cm`;
//   }

//   get area() {
//     return `${(this._width * this._height).toFixed(1)}cm^2`;
//   }
// }

// const rectangle = new Rectangle(3, 4);

// rectangle.width = 5;
// rectangle.height = 6;

// console.log(rectangle.width);
// console.log(rectangle.height);
// console.log(rectangle.area);



class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  set firstName(newFirstName) {
    if (typeof newFirstName === 'string' && newFirstName.length > 0) {
      this._firstName = newFirstName;
    } else {
      console.error('First name must be a non-empty string!');
    }
  }

  get firstName() {
    return this._firstName;
  }

  set lastName(newLastName) {
    if (typeof newLastName === 'string' && newLastName.length > 0) {
      this._lastName = newLastName;
    } else {
      console.error('Last name must be a non-empty string!');
    }
  }

  get lastName() {
    return this._lastName;
  }

  get fullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  set age(newAge) {
    if (typeof newAge === 'number' && newAge >= 0) {
      this._age = newAge;
    } else {
      console.error('Age must be a non-negative number');
    }
  }

  get age() {
    return this._age;
  }
}

const person = new Person("Spongebob", "Squarepants", 30);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.fullName);
console.log(person.age);
