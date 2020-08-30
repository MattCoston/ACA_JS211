'use strict'

const assert = require('assert');

// Vehicles and Crew

let mapping = {
    "Plane": "Pilot",
    "Board": "Captain",
    "Bus": "Bus Driver",
    "Train": "Conductor"
}

class Vehicle {
    type;
    startDate;
    id;
    capacity;
    crew;

    constructor(id, type, startDate, capacity){
        this.id = id;
        this.type = type;
        this.startDate = startDate;
        this.capacity = capacity;
        this.crew = []
    }

    status(){

        let requiredJob = mapping[this.type];
        console.log("The require job is ", requiredJob);
    }
}
