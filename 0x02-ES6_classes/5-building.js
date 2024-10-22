// 5-building.js
class Building {
  constructor(sqft) {
    if (new.target === Building) {
      throw new TypeError('Cannot construct Building instances directly');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Abstract method (to be implemented by subclasses)
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;

