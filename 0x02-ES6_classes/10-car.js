const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');

class Car {
  constructor(brand, motor, color) {
    this[_brand] = brand;
    this[_motor] = motor;
    this[_color] = color;
  }

  cloneCar() {
    const constructor = this.constructor;
    const clone = new constructor(this[_brand], this[_motor], this[_color]);
    return clone;
  }

  getBrand() {
    return this[_brand];
  }

  getMotor() {
    return this[_motor];
  }

  getColor() {
    return this[_color];
  }
}

export default Car;

