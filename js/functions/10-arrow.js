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
const kvadratu = (a ) => a * a;
console.log(`${n1} * ${n2} = ${kvadratu(n1)}`);
console.log(`${n1} * ${n2} = ${kvadratu(n2)}`);

// Vardas -> V.

function name(v) {
    return v[0] + '.';
    // return [v[0] , '.']. join ('');
    // return v.slice(0, 1) + '.';
}
console.log(name ('Chuck'));

const nameInit = name => name[0] + '.';
console.log(nameInit('Chuck'));

// 'Vardenis Pavardenis' -> 'V.P.'

// 1. 'Vardenis Pavardenis' 

// 2. ['Vardenis', ' Pavardenis' ]

// 3a. Vardenis -> V.
// 3b. Pavardenis -> P.

// 4 V. + P.



// Vardenis -> V.
// Pavardenis -> P.

function inicialai(fullName) {
    const nameParts = fullName.split(' ');
    const firstname = nameParts [0][0] + '.';
    const lastname = nameParts [1][0] +'.';
    return firstname + lastname;
}
console.log(inicialai('Vardenis Pavardenis'));
console.log(inicialai('Chuck Norris'));

const inicialaiArrow = fullName => {
    const nameParts = fullName.split(' ');
    const firstname = nameParts [0][0] + '.';
    const lastname = nameParts [1][0] +'.';
    return firstname + lastname;
}


function inicialai2(fullName) {
    const parts = fullName.split(' ');
    return nameInit(parts[0]) +  nameInit(parts[1]);
}


// 5 -> false 
// 4 -> true
// 3 -> false
// 2 -> true
// 1 -> false
// 0 -> true



// n : 5                  n:4
// ! ( n % 2 )            !( n % 2)
// ! ( 5 % 2)             ! ( 4 % 2)
// ! (1)                  !(0)
// ! 1                    ! 0
// !true                  ! false
// false                  true



function isEven (n) {
   return  !(n % 2) ;
   //return n % 2 ===0;
}
console.log( '//', 5, ' -> ', isEven(5));

// Labas rytas , Lietuva ! -> 3
// Ką tu? Ką vakare? -> 4

function sakinys(text) {
    return text.split(' ').length;
}
console.log(sakinys ('Labas rytas, Lietuva!'));
console.log(sakinys ('Ką tu? Ką vakare?' ));

const sakinys2 = text => text.split(' ').length;



