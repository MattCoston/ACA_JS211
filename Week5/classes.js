'use strict'    

class bicycle {
    constructor(frame, wheels, seat, brakes, handlebars, reflectors) {
        this.frame = frame;
        this.wheels = wheels;
        this.seat = seat;
        this.brakes = brakes;
        this.handlebars = handlebars;
        this.reflectors = reflectors;
    }
}

let mattBike = new bicycle("mountain bike", "wheels", "mtn seat", "no brakes", "straight", 0)

console.log(mattBike)

class car {
    constructor(color, mpg, year, make, model, vin){
        this.color = color;
        this.mpg = mpg;
        this.year = year;
        this.make = make;
        this.model = model;
        this.vin = vin;
    }
}

let mattCar = new car('white', 10, 2015, "GMC", "Terrain", 234242)
console.log(mattCar)