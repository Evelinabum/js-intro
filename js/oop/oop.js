// OOP - object oriented programming


// kai kuriame klases, bus pradedama didziaja raide(Person) ir nereikia parametru bloku.
// constructor priima reiksmes 
// Person - sablonas

function xxx() {
    return 'xxx';
}

class Person {
    constructor(name, age, isMarried) {
      this.name = name;
      this.age = age;
      this.isMarried = isMarried;
      this.isAdult = age >= 18;
      this.randomNumber = Math.random();
      this.extra = xxx();
      this.legsCount = 2;
      this.armsCount = 2;
      this.marks = [];

    }
    // metodai... aka funkcijos

}

const jonas = new Person('Jonas', 99, true);
const maryte = new Person('Maryte', 88);
const jonukas = new Person ('Jonukas', 7)

console.log(maryte);
console.log(jonas);
console.log(jonukas);

console.log(jonas);
jonas.age = Infinity;

jonas.marks.push(10);
jonas.marks.push('asd');

//jonas.addMark(10);
//jonas.addMark('asd');

//jonas.birthday();


//Dog, Cat, Car 
function type () {
    return 'Biglis';
}


class Dog {
    constructor(name, age , orHunting) {
        this.name = name;
        this.age = age;
        this.orHunting = orHunting;
        this.type = type ();
        this.speed = 37;
        this.legsCount = 2;
        this.armsCount = 2;
        this.color = 'brown';
    }
}

const mikis = new Dog ('Mikis', 3, true,  'Biglis');
const rikis = new Dog ('Rikis', 5, false);


console.log(mikis);
console.log(rikis);

function color(){
    return 'black';
}
class Cat {
    constructor(name, age, orGirl) {
        this.name = name;
        this.age = age;
        this.orGirl = orGirl;
        this.color = 'black';
        this.legsCount = 2;

    }
}
const nemo = new Cat ('Nemo', 1, true, 'black', );
const pukis = new Cat ('Pukis', 5, false, 'white'); 

console.log(nemo);
console.log(pukis);


class Car {
    constructor(name, age, orFamily) {
        this.name = name;
        this.age = age;
        this.orFamily = orFamily;
        this.speed = 300;
        this.orSport = true;

    }
}
const bmw = new Car ('BMW', 5, false);
console.log(bmw);






