const n1 =7;
const n2 =5;

// function declaration
function sudėtis (a, b) {
return a + b;
}
console.log(`${n1} + ${n2} = ${sudėtis(n1, n2)}`);


const m1 = 12;
const m2 = 9;
sudėtis(m1, m2)

const k1 = 3333;
const k2 = 4444;
sudėtis(k1, k2)

// anonimines funkcijos logika, priskirta kintamajam
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${n1} - ${n2} = ${skirtumas(n1, n2)}`);

//arrow function ( rodykline funkcija) (liambda function)
const  sandauga =  (a, b) => {
    return a * b;
}
console.log(`${n1} * ${n2} = ${sandauga(n1, n2)}`);

// Jeigu logikos bloke yra tik 1 procedura 
// galima nerasyti {} ir return
const dalyba = (a, b) => a / b; 
console.log(`${n1} / ${n2} = ${dalyba(n1, n2)}`);

// jeigu parametru bloke yra tik 1 parametras
const kvadratu = a => a * a;
console.log(`${n1} * ${n2} = ${kvadratu(n1)}`);
console.log(`${n1} * ${n2} = ${kvadratu(n2)}`);
