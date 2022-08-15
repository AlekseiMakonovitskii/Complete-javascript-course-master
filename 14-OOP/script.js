'use strict';
// 207 OOP in JavaScript
// 1. All objects have prototype
// 2. Prototype contains all methods - prototypal inheritance

// 206 What is Object-Oriented Programming_
// 1. Abstaction - leave no need details
// 2. Encapsulation - have private methods
// 3. Enherinace - take methods and data from parent class to child
// 4. Polymorphism - possible to change parent enherinace methods in child classes

// 208 Constructor Functions and the new Operator
// const Person = function (firstName, birthYear) {
//   // Instance propperties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // Never do this (bad perfomence)
//   // this.calcAge = function () {
//   //   console.log(2037 - this.birthYear);
//   // };
// };

// const jonas = new Person(`Jonas`, 1991);
// console.log(jonas);

// // Steps
// // 1. new {} is created
// // 2. functuin is called, this = {}
// // 3. {} linked to prototype
// // 4. functuin automatically return {with data}

// const matilda = new Person(`Matilda`, 2017);
// const jack = new Person(`Jack`, 1975);
// console.log(matilda, jack);

// const jay = `Jay`;
// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// // 209 Prototypes
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__);
// console.log(jonas.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(jonas));
// console.log(Person.prototype.isPrototypeOf(matilda));
// console.log(Person.prototype.isPrototypeOf(Person));

// // .prototypeOfLinkedObjects

// Person.prototype.species = `Homo Sapiens`;
// console.log(jonas.species, matilda.species);
// console.log(jonas.hasOwnProperty(`firstName`));
// console.log(jonas.hasOwnProperty(`species`));

// // 210 Prototypal Inheritance and The Prototype Chain

// // 211 Prototypal Inheritance on Built-In Objects
// console.log(jonas.__proto__.__proto__);
// // Object.prototype top of prototype chain
// console.log(jonas.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);

// const arr = [1, 2, 3, 4, 5, 5, 5, 3]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__); // Object.prototype

// // don't do it
// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector(`h1`);
// console.dir(h1);
// console.dir(x => x + 1);

// Person.hey = function() {
//   console.log(`hey there 😀`);
//   console.log(this);
// }

// Person.hey();

// // 213 ES6 Classes
// // class expression
// // const PersonCLex = class {}

// // class declaration
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a propery that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(` `)) {
//       this._fullName = name;
//     } else {
//       console.log(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there 😅`);
//   }
// }

// const jessica = new PersonCL(`Jessica Davis`, 1996);
// console.log(jessica);
// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCL.prototype);

// // PersonCL.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // }

// jessica.greet();

// // 1. Classes are not hoisted
// // 2. Classes are first-class citizes
// // 3. Classes are executed in strict mode

// // 214 Setters and Getters
// const walter = new PersonCL(`Walter White`, 1965);
// console.log(walter.fullName);

// const account = {
//   owner: `Jonas`,
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     this.movements.push(mov);
//   },
// };

// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// // 215 Static Methods
// Array.from(document.querySelectorAll(`h1`));

// PersonCL.hey();
// // jessica.hey(); // not available

// // 216 Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);
// console.log(steven)
// steven.name = `Steven`;
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);;
// sarah.init(`Sarah`, 1979);
// console.log(sarah);
// sarah.calcAge();

// 218 Inheritance Between _Classes__ Constructor Functions
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);
// // Student.prototype = Person.prototype // doesn't work

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student(`Mike`, 2020, `Computer Science`);
// console.log(mike);
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// 220 Inheritance Between _Classes__ ES6 Classes
// class PersonCL {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Instance methods
//   // Methods will be added to .prototype property
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }

//   get age() {
//     return 2037 - this.birthYear;
//   }

//   // Set a propery that already exists
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(` `)) {
//       this._fullName = name;
//     } else {
//       console.log(`${name} is not a full name!`);
//     }
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log(`Hey there 😅`);
//   }
// }

// class StudentCL extends PersonCL {
//   constructor(fullName, birthYear, course) {
//     // Always need to happen first!
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} and I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${
//         2037 - this.birthYear
//       } years old, but as a student I feel fore like ${
//         2037 - this.birthYear + 10
//       }`
//     );
//   }
// }

// // const martha = new StudentCL(`Martha Jones`, 2012);
// const martha = new StudentCL(`Martha Jones`, 2012, `Computer Science`);
// console.log(martha);
// martha.introduce();
// martha.calcAge();

// 221 Inheritance Between _Classes__ Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
// 	PersonProto.init.call(this, firstName, birthYear);
// 	this.course = course;
// }

// StudentProto.introduce = function () {
// 	console.log(`My name is ${this.fullName} and I study ${this.course}`);
// }

// const jay = Object.create(StudentProto);
// jay.init(`Jay`, 2010, `Computer Science`);
// jay.introduce();
// jay.calcAge();

// 222 Another Class Example
class Account {
  // 1) Public fields (instances)
  locale = navigator.language;

  // 2) Private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    // protected property
    this.#pin = pin;

    // this.locale = navigator.language;

    console.log(`Thanks for opening an accounts, ${owner}`);
  }

  // 3) Public methods
  // Publick interface (API)
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  _approveLoan(val) {
    return true;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approved`);
      return this;
    }
  }

  // 4) Private methods (not available now)
  // #approveLoan(val) {
  //   return true;
  // }

  // only works in class itself
  static helper() {
    console.log(`Helper`);
  }
}

const acc1 = new Account(`Jonas`, `EUR`, 1111);

// acc1._movements.push(250);
// acc1._movements.push(-140);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
// acc1.approveLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);
// console.log(acc1.#pin);

// console.log(acc1.#movements);

// 223 Encapsulation_ Protected Properties and Methods
// 224 Encapsulation_ Private Class Fields and Methods
// 1) Public fields
// 2) Private fields
// 3) Public methods
// 4) Private methods
// (there is also the static version)

// console.log(acc1.#approveLoan(100));

// 225 Chaining Methods
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1);

// 226 ES6 Classes Summary
