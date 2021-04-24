const WaterBoy = require("./WaterBoy");

// constructor(totalML, rowNum, glassNum) {
let waterBoi = new WaterBoy(2000, 5, 2);

waterBoi.fillCups(3460);
console.log("get() this.cups:", waterBoi.getCups());
