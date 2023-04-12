// prototypal Inheritance and the prototypal chain
// ES6 introduced classes whichis the modern way to constructs objects

// Object literals
const person = {
    alive: true
}

const musician = {
    plays: true
}

// musician.__proto__ = person;
// console.log(musician.plays);
// console.log(musician.alive);
// console.log(musician)

Object.setPrototypeOf(musician, person);
// console.log(Object.getPrototypeOf(musician));
// console.log(musician.__proto__);
// console.log(Object.getPrototypeOf(musician) === musician.__proto__);

console.log(musician.plays);
// missiing property => go to person
console.log(musician.alive);

// extending the prototype chain => general to specific to more specific
const guitarist = {
    strings: 6,
    __proto__: musician
}

// console.log(guitarist.alive);
// console.log(guitarist.plays);
// console.log(guitarist.strings);
// console.log(guitarist);

// no circular references allowed (person.__proto__ cant be guitarist)
// the __proto__ value must be an object or null
// An object can only directly inherit from one object

// Object with getter and setter methods
const car = {
    doors: 2,
    seats: 'vinyl',
    get seatMaterial() {
        return this.seats;
    },
    set seatMaterial(material) {
        this.seats = material;
    }
}

const luxuryCar = {};
Object.setPrototypeOf(luxuryCar, car);
luxuryCar.seatMaterial = 'leather'; // note keyword this
// console.log(luxuryCar);
// console.log(luxuryCar.doors);
// console.log(car);

// walking up the chain props and methods are not copied
// console.log(luxuryCar.valueOf());

// // getting the keys of an object
// console.log(Object.keys(luxuryCar));
// // loop through each objects key
// Object.keys(luxuryCar).forEach(key => {
//     console.log(key);
// })
// // but a for ..in loop includes inherited props
// for(let key in luxuryCar) {
//     console.log(key);
// }



// Object Constructor
function Animal(species) {
    this.species = species;
    this.eats = true;
}

Animal.prototype.walks = function () {
    return 'A ${this.species} is walking.';
};

const Bear = new Animal('bear');

// console.log(Bear.species);
// console.log(Bear.walks());

// // the prototype property is where inheritable props and methods are 
// console.log(Bear.__proto__);
// console.log(Bear.__proto__ === Animal.prototype);
// console.log(Animal.prototype);
// console.log(Bear);



// ES6 classes example of inheritance
class Vehicle {
    constructor() {
        this.wheels = 4,
            this.motorized = true
    }

    ready() {
        return "Ready to go!";
    }
}

class Motorcycle extends Vehicle {
    constructor() {
        super();
        this.wheels = 2
    }

    wheelie() {
        return "On one wheel now!";
    }
}

const myBike = new Motorcycle();
console.log(myBike);
console.log(myBike.wheels);
console.log(myBike.ready());
console.log(myBike.wheelie());

const myTruck = new Vehicle();
console.log(myTruck);