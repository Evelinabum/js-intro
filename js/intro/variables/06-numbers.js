/*
NUMBERS

-sveikieji,desimtainiai
-teigiami,neigiami
-Infinity
*/

 
// 8/2 = 4
// 'labas rytas'/2 = NaN


console.log('labas rytas '/ 2); 
console.log('labas rytas '* 2);
console.log('labas rytas '- 2); 
console.log('labas rytas ' % 2); 
console.log('labas rytas ' + 2); 

console.log(7/5);


console.log(2 ** 0);



//Math- matematiniu funkciju "biblioteka"
//Matematines konstantos

console.log(Math);
console.log(Math.E);

//Math.abs()

console.log(Math.abs(5));

//Trigonometrija- naudoja radianus

console.log(Math.sin(0));
console.log(Math.cos(0));

console.log('Kubine saknis');
console.log(Math.cbrt(8));

console.log();
console.log('Apvalinimas');
console.log(Math.ceil(10));


console.log();
console.log('"Apvalinimas": trunc') ;
console.log(Math.round(10));
console.log(Math.trunc(-9.001));

console.log()
console.log('"Apvalinimas":exp');
console.log(Math.exp(2,2));
console.log(Math.exp(3), Math.E ** 2);

console.log()
console.log('"Apvalinimas":pow');
console.log(Math.pow(2,2),(2**2));


console.log()
console.log('"Apvalinimas":hypot');
console.log(Math.hypot(3,4),   Math.sqrt(3** 2 + 4 **2));


console.log();
console.log('"Apvalinimas":min');
console.log(Math.min(1,2,4,8, -1, 3.5));
console.log(Math.min(1, NaN, -Infinity));

console.log();
console.log('"Apvalinimas":max');
console.log(Math.max(1,2,4,8,-1, - Infinity, Infinity, 3.5,-2.7,));
console.log(Math.max(1, NaN, -Infinity));

console.log();
console.log('"Apvalinimas":sign');
console.log(Math.sign(5));
console.log(Math.sign(-5));

console.log();
console.log('"Apvalinimas":random');
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

/**
 * Generuojamas atsitiktinis skaicius intervale(imtinai).
 * @param {*} min Nuo
 * @param {*} max  Iki
 * @returns {number} Atsitiktinis sveikasis skaicius
 */



function randomNumber(min,max) {
    return Math.floor(Math.random() * (max-min+1)) +min;
}

for(let i=0; i<10; i++) {
console.log(i, randomNumber(10,20));
}


//pasidaryti savo funkcija kuri grazina skaiciu su ribotu skaiciu kiekiu skaitmenu po kablelio
//kas yra i++?





























