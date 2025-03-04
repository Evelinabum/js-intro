/**
 * Užduotis 1: Sukurkite tuščią objektą pavadinimu car ir pridėkite jame savybes brand, model, ir year.
 
Užduotis 2: Sukurkite metodą, kuris atspausdins automobilio brand savybę.
 
Užduotis 3: Sukurkite metodą addProperty, kuris pridės naują savybę į objektą dinamiškai.
 
Užduotis 4: Patikrinkite, ar automobilio objektas turi savybę model, naudodami hasOwnProperty.
 
Užduotis 5: Sukurkite funkciją, kuri grąžins automobilio objekto visų savybių raktus.
 
 */

class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = 'white';
    }
    hi(){
        return `Hi, my brand is ${this.brand} and my color is ${this.color}.`
    }
}


const car = new Car ('BMW', '330d', 2018, 'white');

console.log(car);
console.log(car.hi());
console.log(car.hasOwnProperty('model'));

//----------------------
const x = {
    a : 'aaa',
    b : 'bbb',
    c : 'ccc',
};

const xx = {
    a : 'aaa',
    b : 'bbb',
    c : 'ccc',
    gg : 'gggggg',
};

