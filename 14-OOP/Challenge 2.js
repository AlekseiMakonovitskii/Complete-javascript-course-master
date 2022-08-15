`use strict`;
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(this.speed);
  }

  brake() {
    this.speed -= 5;
    console.log(this.speed);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(miles) {
    this.speed = miles * 1.6;
  }
}

const ford = new Car(`Ford`, 120);
console.log(ford);
ford.speedUS = 120;
console.log(ford.speed);
