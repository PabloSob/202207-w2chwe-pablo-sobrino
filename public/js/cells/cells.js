class Bacteria {
  isAlive;
  positionY;
  positionX;

  constructor(isAlive = false) {
    this.isAlive = isAlive;
  }
}

module.exports = Bacteria;
