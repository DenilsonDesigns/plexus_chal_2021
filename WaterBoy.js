// WaterBoy class here.
class WaterBoy {
  // only thing need to pass in with the constructor is the initial MLs.
  constructor(totalML, rowNum, glassNum) {
    this.millilitres = totalML;
    this.rowNum = rowNum;
    this.glassNum = glassNum;
    this.cups = [];
  }
  // *** getters
  getMillilitres() {
    return this.millilitres;
  }

  getRowRum() {
    return this.rowNum;
  }

  getGlassNum() {
    return this.glassNum;
  }
  getCups() {
    return this.cups;
  }

  fillCups(totalML) {
    let cups = [];

    let currML = totalML;
    let currRowNum = 0;

    while (currML > 0) {
      let currRow = Array(currRowNum + 1).fill(0);
      let mlUsed = 0;
      let maxMLallowedForRow = (currRowNum + 1) * 250;
      [currRow, mlUsed] = this.fillRow(currRow, currML, maxMLallowedForRow);
      cups.push(currRow);
      currRowNum++;
      currML -= mlUsed;
      this.cups = cups;
    }
  }

  fillRow(row, mL, upperLimit) {
    let maxMl = row.length * 250;
    let totalMlUsed = Math.min(mL, maxMl, upperLimit);
    let mLperCup = totalMlUsed / row.length;

    return [row.fill(mLperCup), totalMlUsed];
  }
}

module.exports = WaterBoy;
