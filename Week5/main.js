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