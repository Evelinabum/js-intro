class Pet {
    constructor(name, fur) {
        this.name = name;
        this.furColor = fur;
        this.legsCount = 4;
        this.sound = '???';
        this.emoji = '🤐';
        this.hasTail = true;
    }

    hi() {
        return `Hi, my name is ${this.name}.`;
    }

    voice() {
        return `${this.name}:${(' ' + this.sound).repeat(2)}!! ${this.emoji.repeat(2)}`;
    }
}

class Dog extends Pet {
    constructor(name, fur) {
        super(name, fur);
        this.sound = 'au';
        this.emoji = '🐕';
    }

    hi() {
        return `Hi, my name is ${this.name} 222.`;
    }

    atnesk() {

    }
}

class Cat extends Pet {
    constructor(name, fur) {
        super(name, fur);
        this.sound = 'miau';
        this.emoji = '🐈';
    }
}

class Hamster extends Pet {
    constructor(name, fur) {
        super(name, fur);
        this.sound = 'krimst';
        this.emoji = '🐹';
        this.hasTail = false;
    }
}

const rex = new Dog('Rex', 'brown');
const brisius = new Dog('Brisius', 'white');
const rainis = new Cat('Rainis', 'grey');
const garfildas = new Cat('Garfildas', 'orange');

console.log(rex.hi());
console.log(brisius.hi());
console.log(rainis.hi());
console.log(garfildas.hi());
console.clear();


class MotorineTransportoPriemone {
    constructor(model, year) {
        this.model = model;
        this.year = year;
        this.wheelsCount = 4;
        this.mileage = '???';
        this.color = '?'
        this.speed = '?'
        this.maximumPower = '?'
        this.gearbox = 'automatic';
        this.isSafe = 'safe enough';
    }
    hi() {
        return `Hi, my model is ${this.model}, I can drive ${this.speed} km/h.`;
    }
}

class Sunkvezimis extends MotorineTransportoPriemone {
    constructor(model, year) {
        super(model, year);
        this.mileage = '223456km';
        this.color = 'Grey';
        this.wheelsCount = 10;
        this.speed = 100;
        this.maximumPower = '400 kW';
    }
}

class Limuzinas extends MotorineTransportoPriemone {
    constructor(model, year) {
        super(model, year);
        this.mileage = '1234567km';
        this.color = 'white'
        this.speed = 140;
        this.maximumPower = '140 kW';

    }
}

class Motociklas extends MotorineTransportoPriemone {
    constructor(model, year) {
        super(model, year);
        this.mileage = '2121km';
        this.wheelsCount = 2;
        this.color = 'Blue'
        this.speed = 200;
        this.maximumPower = ' 24 kW';
        this.gearbox = 'manual'
        this.isSafe = 'not very safe';
    }
}

class Keturratis extends MotorineTransportoPriemone {
    constructor(model, year) {
        super(model, year);
        this.mileage = '2562km';
        this.color = 'Red'
        this.speed = 125;
        this.maximumPower = '28 kW';
        this.isSafe = 'not very safe';
     
    }
}
const sunkvezimis = new Sunkvezimis ('Mercedes-Benz ', 10);
const limuzinas = new Limuzinas ('Audi', 15);
const motociklas = new Motociklas ('Aprilla rs', 8);
const keturratis = new Keturratis ('Cfmoto', 5);

console.log(sunkvezimis);
console.log(sunkvezimis.hi());
console.log('-----------------');

console.log(limuzinas);
console.log(limuzinas.hi());
console.log('-----------------');

console.log(motociklas);
console.log(motociklas.hi());
console.log('-----------------');

console.log(keturratis);
console.log(keturratis.hi());
console.log('-----------------');

class Computer {
    constructor () {
        this.name = '';
        this.cpu = 'Pentium 2';
        this.ram = '128mb';
        this.hdd = '1gb';
        
    }
}

class StalinisPC extends Computer{ 
    constructor (name){
        super(name);
        this.hasCDrom = true;
    }
}
class Laptop extends Computer { 
    constructor (name){
        super(name)
        this.hasTouchPad = true;
    }
}

const pc0 = new Computer ('');
const pc1 = new StalinisPC('HP');
const pc2 = new Laptop ('Asus');

console.log(pc0);
console.log(pc1);
console.log(pc2);

