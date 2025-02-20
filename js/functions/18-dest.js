/*
Destruktūrizavimas
Struktūrizavimas
*/

const numbers = [10, 2, 8, 4, 6];

const n1 = numbers[0];
const n2 = numbers[1];
const nRest = numbers.slice(2);

console.log(n1);
console.log(n2);
console.log(nRest);

const [m1, m2] = numbers;
console.log(m1, m2);

const [k1, k2, k3] = numbers;
console.log(k1, k2, k3);

const [l1, l2, ...l] = numbers;
console.log(l1, l2, l);

const [...r] = numbers;
console.log(r);

const [t] = [...numbers];
console.log(t);
// pries lygybe ... -rest operatorius, galima naudoti tik gale

const numberList = [9, 99];
const [y1, y2, ...yRest] = numberList;
console.log(y1, y2, yRest);

//OBJEKTAS
const person = {
    name: 'Jonas',
    age :99 ,
    isMarried : true ,
    marks: [10, 2, 8, 4, 6],
    phone : 861255897,
    adress : {
        city : 'Miestas',
        street : 'Gatve',
        number : 9, 
    },
};

const name = person.name;
const age = person.age;
const isMarried =person.isMarried;
const personRest = {
    marks : person.marks,
    phone : person.phone,
    adress : person.adress,
};

console.log(name);
console.log(age);