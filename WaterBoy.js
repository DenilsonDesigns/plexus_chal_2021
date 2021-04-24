// WaterBoy class here.
class WaterBoy {
  // only thing need to pass in with the constructor is the initial MLs.
  constructor(totalML) {
    this.millilitres = totalML;
  }
  // this class will have following methods:
  calcRows() {
    // - some kind of method that will calculate the amount of rows of glass based on the pyramid shape.
    // maybe we can use some kind of alegbra formula to calculate this based on millileters.
  }

  fillCups() {
    // - a method that will create an array of objects that represent each glass.
    //              an individual object will have:
    //                                              number/id
    //                                              totalML
    //                                              capacity
    //                                              %full
    // this method will call `calcRows` to have an empty array structure.
    // then will "fill" the cups, ie make the objects as outlined above.
  }

  getMillilitres() {
    return this.millilitres;
  }
}
// thats all I can think of RN.
