class Car {
    // vin;
    // mpg;
    // fuelTankSize;
    // currentFuel;

    constructor(iMpg, iTankSize){
        
        this.vin = Math.random();
        this.mpg = iMpg;
        this.fuelTankSize = iTankSize;
        this.currentFuel = 0;
    }

    addFuel(numGallons){
        if (this.fuelTankSize < numGallons){
            console.log("Too much fuel added")
            return false
            
        } else {
            this.currentFuel += numGallons;
        }
    }

    distanceTillEmpty(){
        return this.mpg * this.currentFuel;
    }

    travel(distance){
        //BUILD THIS FUNCTION OUT
        let distTravelled = distance * this.mpg
        console.log(`You can  travel ${distTravelled}`)
        return distTravelled
    }

}
  let matt = new Car(10, 20)
  matt.addFuel(25)
console.log(matt)
console.log(matt.travel(5))
// const assert = require('assert');

// if(typeof describe === 'function'){
//     describe("test 1," function(){
//         it("should allow us to create a car", function(){
//             let car1 = new Car(23,11)
//             assert.equal(car1.currentFuel, 0);
//         })
//         it("should allow us to add fuel", function(){
//             let car1 = new Car(23,11)
//             car1.addFuel(10)
//             assert.equal(car1.currentFuel, 10)
//         })
//         it("should not allow over fueling", function(){
//             let car1 = new Car(23,11)
//             car1.addFuel(100)
//             assert.equal(car1.currentFuel, 11)
//         })
//         it("should not allow siphoning past zero", function(){
//             let car1 = new Car(23,11)
//             car1.addFuel(4)
//             car1.addFuel(-5)
//             assert.equal(car1.currentFuel, 0)
//         })
        
//     })
// }
