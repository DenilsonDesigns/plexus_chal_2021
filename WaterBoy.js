class WaterBoy {
  constructor(totalML) {
    this.millilitres = totalML;
    this.glasses = [];
  }
  // *** getters
  getMillilitres() {
    return this.millilitres;
  }

  getGlasses() {
    return this.glasses;
  }

  fillGlasses() {
    let glasses = [];

    let currML = this.millilitres;
    let currRowNum = 0;

    while (currML > 0) {
      let currRow = Array(currRowNum + 1).fill(0);
      let mlUsed = 0;
      let maxMLallowedForRow = (currRowNum + 1) * 250;
      [currRow, mlUsed] = this.fillRow(currRow, currML, maxMLallowedForRow);
      glasses.push(currRow);
      currRowNum++;
      currML -= mlUsed;
      this.glasses = glasses;
    }
  }

  fillRow(row, mL, upperLimit) {
    let maxMl = row.length * 250;
    let totalMlUsed = Math.min(mL, maxMl, upperLimit);
    let mLperGlass = totalMlUsed / row.length;

    return [row.fill(mLperGlass), totalMlUsed];
  }

  checkIndividualGlass(rowNum, glassNum) {
    if (rowNum > this.glasses.length - 1) {
      return console.log(
        `Row ${rowNum} does not exist! Highest row no. is: ${
          this.glasses.length - 1
        }`
      );
    }
    if (glassNum > this.glasses[rowNum].length - 1) {
      return console.log(
        `Glass ${glassNum} does not exist! Highest glass no. is: ${
          this.glasses[rowNum].length - 1
        } in row no. ${rowNum}`
      );
    }

    return console.log(
      `At row number: ${rowNum}, and glass number: ${glassNum} there is: ${this.glasses[rowNum][glassNum]} millilitres.`
    );
  }
}

module.exports = WaterBoy;
