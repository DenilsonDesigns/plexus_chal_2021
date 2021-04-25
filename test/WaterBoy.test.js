const chai = require("chai");
const expect = chai.expect;
const WaterBoy = require("../WaterBoy");

// class initiates correctly
describe("Class initiates correctly", () => {
  let waterBoi = new WaterBoy(2000);

  it("has a 'millilitres' property of 2000", () => {
    expect(waterBoi.millilitres).to.equal(2000);
  });

  it("has a 'glasses' property initiated as an empty array", () => {
    // is an array:
    expect(waterBoi.glasses).to.be.an("array");
    // is of length 0
    expect(waterBoi.glasses.length).to.equal(0);
  });
});

// methods operate correctly.
describe("'WaterBoy' class methods operate correctly", () => {
  let waterBoi = new WaterBoy(2000);

  it("'getMillilitres' returns correct value", () => {
    expect(waterBoi.getMillilitres()).to.equal(2000);
  });

  it("'getGlasses' returns correct value", () => {
    waterBoi.fillGlasses();
    expect(waterBoi.getGlasses()).to.be.an("array");
    expect(waterBoi.getGlasses().length).to.equal(4);
    expect(waterBoi.getGlasses()[0][0]).to.equal(250);
    expect(waterBoi.getGlasses()[3][0]).to.equal(125);
  });

  it("'fillGlasses()' will update 'glasses' property on WaterBoy", () => {
    waterBoi.glasses = [];
    expect(waterBoi.getGlasses().length).to.equal(0);
    waterBoi.fillGlasses();
    expect(waterBoi.getGlasses().length).to.equal(4);
  });

  it("'fillRow()' works correctly", () => {
    //given a row of length 4, and mL of 1200, and upperLimit of 1000
    // function should return '[[250, 250, 250, 250], 1000]'
    let row = Array(4).fill(0);
    // an array
    let fillRowResp = waterBoi.fillRow(row, 1200, 1000);
    expect(fillRowResp[0]).to.be.an("array");
    // of length 4
    expect(fillRowResp[0].length).to.equal(4);
    // with all vals of 250
    expect(fillRowResp[0].every((el) => el === 250)).to.equal(true);

    // totalMlUsed should equal 1000
    expect(fillRowResp[1]).to.equal(1000);
  });
});
