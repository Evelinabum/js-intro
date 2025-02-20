// =============================================
// Užduotis 1: Suskaičiuoti visų masyvo skaičių sumą
// =============================================
//const numbers1 = [1, 2, 3, 4, 5];
console.log('        Pirma uzduotis su for ciklu');
// Sprendimas su for ciklu:
// Jūsų kodas čia...

const numbers1 = [1, 2, 3, 4, 5];
function skaiciuSuma (numbers1) {
   let suma= 0;
   for (let i = 0; i < numbers1.length; i++) {
      suma += numbers1[i];
    }
    return suma;
}

    console.log(skaiciuSuma( numbers1)); 

 
// Sprendimas su array metodu (reduce):
// Jūsų kodas čia...
function suma1 (arr) {
    return arr.reduce((sum, currentValue ) => sum + currentValue, 0);
}
const masyvas1 = [1, 2, 3, 4, 5];
console.log('      Pirma uzduotis su array metodu');
console.log(suma1(masyvas1));
console.log('----------');

// =============================================


// Užduotis 2: Suskaičiuoti, kiek masyvo elementų yra lyginiai
// =============================================
const numbers2 = [1, 2, 3, 4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...

function lyginiai (arr) {
    let count = 0;
    for ( let i =0; i < arr.length ; i++ ) {
        if (arr[i] % 2 === 0) {
            count++;

        }
    }
    return count;
}
const masyvas2 = [1, 2, 3, 4, 5, 6];
console.log('        Antra uzduotis su for ciklu');
console.log(lyginiai(masyvas2));
 
// Sprendimas su filter metodu:
// Jūsų kodas čia...
function lyginiai1 (arr) {
    return arr.filter(num => num % 2 ===0).length;
}
const masyvas3 = [1, 2, 3, 4, 5, 6]
console.log('     Antra uzduotis su filter metodu');
console.log(lyginiai1(masyvas3));
console.log('----------');



// =============================================







// Užduotis 3: Rasti didžiausią skaičių masyve
// =============================================
const numbers3 = [10, 5, 20, 8, 15];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
function didziausiassk (arr) {
    let didziausias = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if (arr[i] > didziausias) {
            didziausias = arr [i];
        }
    }
    return didziausias;
}

const masyvas4 = [10, 5, 20, 8, 15];
console.log('        Trecia uzduotis su for ciklu');
console.log(didziausiassk(masyvas4));
 
 
// Sprendimas su Math.max ir spread operator:
// Jūsų kodas čia...

function didziausiassk (arr) {
    return Math.max (... arr);
}
const masyvas5 =[10, 5, 20, 8, 15];
console.log('  Trecia uzduotis su Math.max metodu');
console.log(didziausiassk(masyvas5));
console.log('-----------');

 
 
 
// =============================================







// Užduotis 4: Suskaičiuoti, kiek kartų masyve pasikartoja nurodytas skaičius
// =============================================
const numbers4 = [1, 2, 3, 2, 4, 2, 5];
const target = 2;
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 function skaiciuoti (arr, target) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            count++;
        }
    }
    return count;
 } 
const numbers = [1, 2, 3, 2, 4, 2, 5];
const target1 = 2;
console.log('     Ketvirta uzduotis su for ciklu');
console.log(skaiciuoti(numbers, target));

 
 
// Sprendimas su filter metodu:
// Jūsų kodas čia...
function skaiciuoti (arr, target2) {
    return arr.filter (num => num === target2).length;
}
 const number = [1, 2, 3, 2,  4, 2, 5];
 const target2 = 2;
 console.log('     Ketvirta uzduotis su filter');
 console.log(skaiciuoti(number, target2));
 console.log('----------');

 
 
// =============================================







// Užduotis 5: Išfiltruoti ir sukurti naują masyvą, kuriame būtų tik teigiami skaičiai
// =============================================
//const numbers5 = [-3, 0, 5, -1, 8, -2];
 console.log('     Penkta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...

const numbers5 = [-3, 0, 5, -1, 8, -2];
const numbers55 = (arr) => {
    const newArr = [];

    for ( let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 ) newArr.push (arr[i]);
    }
    return newArr;
}
console.log(`${numbers55(numbers5)}`);
 
 
// Sprendimas su filter metodu:
// Jūsų kodas čia...
 

 
 
// =============================================








// Užduotis 6: Rasti visų masyvo elementų sandaugą
// =============================================
//const numbers6 = [1, 2, 3, 4];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const n1 = 1;
const n2 = 2;
const n3 = 3;
const n4 = 4;
const sandauga = (a, b, c, d) => {
    return a * b *c * d;
}

console.log('   Sesta uzduotis su for');
console.log(`${n1}* ${n2} *${n3}* ${n4} = ${sandauga (n1, n2 , n3, n4)}`) ;

 
// Sprendimas su reduce metodu:
// Jūsų kodas čia...
const numbers6 = [1, 2, 3, 4];
const numbers6_reduce = (arr) => {
    return arr.reduce ((result,num) => result * num ,1);
 }
 console.log('     Sesta uzduotis su reduce');
 console.log(numbers6_reduce(numbers6));
 console.log('----------');
  
// =============================================
// Užduotis 7: Apversti masyvą (sukurti naują apverstą masyvą)
// =============================================
//const array7 = [1, 2, 3, 4, 5];
console.log('   Septinta uzduotis su for');
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const array7 = [1, 2, 3, 4, 5];
let skaiciai =  [1, 2, 3, 4, 5];
skaiciai.reverse();
console.log(skaiciai);

 
// Sprendimas su built-in reverse metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...
 
 
// =============================================
// Užduotis 8: Rasti pirmą indeksą, kuriame pasitaiko nurodytas elementas. Jei neranda, grąžinti -1
// =============================================
//const array8 = ['a', 'b', 'c', 'd'];
//const searchElement = 'c';
 console.log('     Astunta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const array8 = ['a', 'b', 'c', 'd'];
const searchElement = 'c';

function findIndex (arr, element) {
    for(let i =0 ; i< arr.length; i++) {
        if (arr[i] === element) {
            return i;
        }
    }
    return -1;
}
console.log(findIndex(array8, searchElement));

 
 
// Sprendimas su indexOf metodu:
// Jūsų kodas čia...
 
 
// =============================================
// Užduotis 9: Patikrinti, ar masyvas yra surikiuotas didėjimo tvarka
// =============================================
//const array9 = [1, 3, 5, 7, 9];
 console.log('     Devinta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const array9 = [1, 3, 5, 7, 9];
function patikrinti (arr) {
    for(let i =0; i  < arr.length -1; i++) {
        if (arr[i] > arr[ i +1 ]) {
            return false;

        }
    }
    return true;

}
 
console.log(patikrinti([1, 3, 5, 7, 9]));
 
 
// Sprendimas su every metodu:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 10: Sukurti naują masyvą, kurio kiekvienas elementas yra pradinio masyvo elemento kvadratas
// =============================================
//const numbers10 = [1, 2, 3, 4, 5];
 console.log('      Desimta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers10 = [1, 2, 3, 4, 5];
 function pakeltiKvadratu (arr) {
    let pakelti = [];
    for(let i =0; i < arr.length; i++) {
        kvadratu = arr[i] * arr[i];
        pakelti.push(kvadratu);
    }
    return pakelti;
 }
 console.log(pakeltiKvadratu(numbers10));


 
// Sprendimas su map metodu:
// Jūsų kodas čia...
console.log('       Desimta uzduotis su map');
const numbers100 = numbers10.map(n => n* n);
console.log(numbers100);
console.log('-----------');
 
 
// =============================================
// Užduotis 11: Susumuoti tik nelyginius masyvo elementus
// =============================================
//const numbers11 = [1, 2, 3, 4, 5, 6];
 console.log('      Vienuolikta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers11 = [1, 2, 3, 4, 5, 6];
function susumuoti (skaicius) {
    let sum =0;
    for(let i = 0; i < skaicius.length; i++) {
        if (skaicius[i]% 2 !== 0) {
            sum += skaiciai[i];
        }
    }return sum;
}
console.log(susumuoti(numbers11));

 
// Sprendimas su filter ir reduce:
// Jūsų kodas čia...
const numbers111 = [1, 2, 3, 4, 5, 6];
const numbers11_filterReduce = (arr) => {
    return arr.filter ((num)=> num % 2 === 0).reduce((sum, num) => sum + num, 0);
}
console.log(' Vienuolikta uzduotis su filter ir reduce');
console.log(`${numbers11_filterReduce(numbers111)}`);
 
 
 
// =============================================
// Užduotis 12: Apskaičiuoti masyvo elementų vidurkį
// =============================================
//const numbers12 = [10, 20, 30, 40, 50];
 console.log('     Dvylikta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers12 = [10, 20, 30, 40, 50];

    

 
 
// Sprendimas su reduce:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 13: Pašalinti pasikartojančius elementus iš masyvo
// =============================================
//const numbers13 = [1, 2, 3, 2, 4, 3, 5];
 console.log('       Trylikta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
const numbers13 = [1, 2, 3, 2, 4, 3, 5];
function pasalinti (arr) {
    let   pasikartojantys = [];
    for ( let i = 0; i < arr.length; i++) {
        if ( !pasikartojantys.includes(arr[i])) {
            pasikartojantys.push(arr[i]);
        }
    } return pasikartojantys;
}
console.log(pasalinti(numbers13));

 
 
// Sprendimas su Set:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 14: Rasti antrą didžiausią elementą masyve
// =============================================
//const numbers14 = [5, 3, 9, 1, 7];
 console.log('        Keturiolikta uzduotsis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...


 
 
// Sprendimas su sort metodu (kopijuojame, kad nepakeistume originalo):
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 15: Suskaičiuoti, kiek masyvo elementų yra didesni už duotą slenkstį
// =============================================
const numbers15 = [10, 15, 20, 25, 30];
const threshold = 20;
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
 
// Sprendimas su filter:
// Jūsų kodas čia...
 
 
// =============================================
// Užduotis 16: Sujungti du masyvus į vieną
// =============================================
//const arrayA = [1, 2, 3];
//const arrayB = [4, 5, 6];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...

const arrayA = [1, 2, 3];
const arrayB = [4, 5, 6];

function sujungtiMasyvus (arr1, arr2) {
    let naujasMasyvas = [];
    for(let i = 0; i < arr1.length; i++) { 
        naujasMasyvas.push(arr1[i]);
    }
    for (let i = 0; i < arr2.length; i++) {
        naujasMasyvas.push(arr2[i]);
    }
    return naujasMasyvas;
}
console.log('     Sesiolita uzduotis su for');
console.log(sujungtiMasyvus(arrayA,arrayB));
// Sprendimas su concat metodu:
// Jūsų kodas čia...

const arrayAb = [1, 2, 3];
const arrayBc = [4, 5, 6];
console.log('     Sesiolita uzduotis su concat');
console.log(arrayAb.concat(arrayBc));
console.log('----------');
 
 
 
// =============================================
// Užduotis 17: Išlyginti (flatten) masyvą, kurio elementai yra masyvai (vieno lygmens)
// Pvz.: [[1,2], [3,4]] -> [1,2,3,4]
// =============================================
const nestedArray = [[1, 2], [3, 4], [5, 6]];
 console.log('       Septyniolikta uzduotis su for ');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let islyginti = [];
for(let i =0; i < nestedArray.length; i++)
    for ( let j =0; j < nestedArray[i].length; j++)
        islyginti.push(nestedArray[i][j]);
console.log(islyginti);
// Sprendimas su flat metodu:
// Jūsų kodas čia...
console.log('       Septyniolikta uzduotis su flat ');
const nestedArray1 = [[1, 2], [3, 4], [5, 6]];
 console.log(nestedArray1.flat());
 console.log('-----------');
 
// =============================================
// Užduotis 18: Rasti bendrus elementus tarp dviejų masyvų
// =============================================
const arrA = [1, 2, 3, 4];
const arrB = [3, 4, 5, 6];
 console.log('       Astuoniolikta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...
let bendriElementai = [];
for(let i = 0; i < arrA.length; i++) {
    if(arrB.includes(arrA[i])){
        bendriElementai.push(arrA[i]);
    }
}
console.log(bendriElementai);
 
 
// Sprendimas su filter:
// Jūsų kodas čia...
console.log('       Astuoniolikta uzduotis su filter');
const bendriElementai1 = arrA.filter( n => arrB.includes(n));
console.log(bendriElementai1);
console.log('----------');
 
 
 
// =============================================
// Užduotis 19: Sukurti objektą, kuriame masyvo elementai suskirstyti į "lyginiai" ir "nelyginiai"
// =============================================
//const numbers19 = [1, 2, 3, 4, 5, 6];
 console.log('      Devyniolikta uzduotis su for');
// Sprendimas su for ciklu:
// Jūsų kodas čia...

let skaiciaii = [1, 2, 3, 4, 5, 6];

let lyginiaiSkaiciai = [];
let nelyginiaiSkaiciai = [];

for (let i= 0; i <skaiciaii.length; i++) {
    if (skaiciaii[i] % 2 != 1) {
        lyginiaiSkaiciai.push(skaiciaii[i]);
    } else {
        nelyginiaiSkaiciai.push(skaiciaii[i]);
    }
}

console.log(lyginiaiSkaiciai, 'lyginiai');
console.log(nelyginiaiSkaiciai, 'nelyginiai');
 
// Sprendimas su reduce:
// Jūsų kodas čia...
 
 
 
// =============================================
// Užduotis 20: Sukurti naują masyvą, kuriame kiekvienas elementas yra pradinio masyvo elementų kumuota suma (cumulative sum)
// Pvz.: [1, 2, 3, 4] -> [1, 3, 6, 10]
// =============================================
const numbers20 = [1, 2, 3, 4];
 
// Sprendimas su for ciklu:
// Jūsų kodas čia...
 
 
// Sprendimas su reduce:
// Jūsų kodas čia...
 
 