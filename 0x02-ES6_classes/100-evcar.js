import Car from './10-car.js';

const _brand = Symbol('brand');
const _motor = Symbol('motor');
const _color = Symbol('color');
const _range = Symbol('range');

class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this[_range] = range;
  }

  cloneCar() {
    const constructor = this.constructor;
    const clone = new Car(this[_brand], this[_motor], this[_color]);
    return clone;
  }

  get brand() {
    return this[_brand];
  }

  get motor() {
    return this[_motor];
  }

  get color() {
    return this[_color];
  }

  get range() {
    return this[_range];
  }
}

export default EVCar;

