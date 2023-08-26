class Warrior {
  constructor(name) {
    this.fName = name;
  }

  name(name) {
    if (name) {
      this.fName = name;
    }
    return this.fName;
  }
}

Warrior.prototype.toString = function () {
  return `Hi! my name's ${this.fName}`;
};
