const WaterBoy = require("./WaterBoy");

let myArgs = process.argv.slice(2);
let ml = checkValidML(myArgs[0]);

let rowNum = checkValidInt(myArgs[1]);
let glassNum = checkValidInt(myArgs[2]);

let waterBoi = new WaterBoy(ml);

waterBoi.fillGlasses(ml);
console.log("Glasses diagram:");
console.table(waterBoi.getGlasses());
waterBoi.checkIndividualGlass(rowNum, glassNum);

function checkValidInt(num) {
  if (!parseInt(num)) {
    console.log("Please enter valid integers for rows and glass number");
    process.exit();
  } else {
    return num;
  }
}

function checkValidML(ml) {
  if (!parseFloat(ml)) {
    console.log("Please enter valid number for millilitres");
    process.exit();
  } else {
    return ml;
  }
}
