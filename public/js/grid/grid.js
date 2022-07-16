const Bacteria = require("../cells/Cells.js");

class Grid {
  columns;
  /* rows; */
  boxes;

  constructor(columns /* rows */) {
    this.columns = columns;
    /* this.rows = rows; */
    this.boxes = this.createBoxes();
  }

  createBoxes() {
    const boxes = new Array(this.columns)
      .fill(new Array(this.columns))
      .fill(new Bacteria());
    return boxes;
  }
}

module.exports = Grid;
