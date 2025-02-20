console.clear();
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
 
// for (Inicijavimas; Sąlyga; VeiksmasPoIteracijos) {
//     statement
// }
console.clear();
 
for (let i = 0; i < 5; i += 2) {
    console.log(i + 1);
}
for (let i = 10; i > 0; i--) {
    console.log(i);
}
 
console.log('Laimingų naujųjų metų!');
 
console.clear();
 
let sum = 0;
 
for (let i = 0; i < 5; i++) {
    let number = 5;
    sum += i;
}
 
console.log(sum);
console.clear();
 
let sum1 = 0;
let maxSk = 100;
 
for (let i = 0; i <= maxSk; i++) {
    sum1 += i;
}
 
console.log(sum1);
// 0  1   2   3
let skaiciai = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
 
let lyginiai = [];
let nelyginiai = [];
 
for (let i = 0; i < skaiciai.length; i++) {
    if (skaiciai[i] % 2 != 1) {
        lyginiai.push(skaiciai[i]);
    } else {
        nelyginiai.push(skaiciai[i]);
    }
}
 
console.log(lyginiai);
console.log(nelyginiai);
 

/* 4. Recepto ingredientų sąrašas */
console.log("\n4. Recepto ingredientų sąrašas");
const ingredientai = ["cukrus", "miltai", "kiaušiniai", "pienas", "sviestas"];

ingredientai [0] // 'cukrus'
ingredientai [1] // 'miltai'
ingredientai [2] // 'kiausiniai'
ingredientai [3] // 'pienas'




// 1.cukrus
// 2.miltai
// ...

for ( let i= 0; i < ingredientai.length; i++) {
   console.log(`${i + 1}. ${ingredientai[i]}`);
}
// console.log(`${i + 1}. ${ingredientai[i].toUpperCase()}`);
//toUpperCase padaro didziasias raides.


/* 6. Temperaturos patikra ar virsija ar ne 30 laipsniu */
console.log("\n6. Temperaturos patikra");
const temperaturos = [22, 32, 28, 31, 29, 27, 30];
const savaitesDienos = [
    'Pirmadienis',
    'Antradienis',
    'Treciadienis',
    'Ketvirtadienis',
    'Penktadienis',
    'Sestadienis',
    'Sekmadienis',

];

// Diena 1.Temperatura nevirsija 30 laipsniu
// Diena 2. Temperatura virsija 30 laipsniu

for( let i = 0; i < temperaturos.length ; i++) {
    console.log(`${savaitesDienos[i]}.Temperatura ${ temperaturos[i] > 30 ? 'virsija ': 'nevirsija'} 30 laipsniu`);
}

for( let i = 0; i < temperaturos.length ; i++) {
    if (temperaturos[i] > 30 ) {
        console.log(`Diena ${i + 1}. Temperatura virsija 30 laipsniu`);
    } else {

    }
    }



    /* 7. Studentų pažymių vidurkis */
console.log("\n7. Studentų pažymių vidurkis");
const pazymiai = [8, 9, 7, 10, 6];

let sumaPazymiu = 0;
 for (let i=0; i < pazymiai.length; i++) {
    sumaPazymiu  = sumaPazymiu + pazymiai [i];
 }
 let vidurkis = sumaPazymiu / pazymiai.length;

 console.log(vidurkis);