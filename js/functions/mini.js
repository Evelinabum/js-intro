function demo (...params) { // rest operatorius
  // parametru validavimas 
  // logika 
  // apskaiciuoto rezultato validavimas 
  // rezultato grazinimas 
}


function tusciaFunkcija () {
    return false;
}
console.log(tusciaFunkcija());


function daugyba (n1, n2) {
    // validavimas
    if (typeof n1 !== 'number') {
        return 'Error: pirmasis parametras turi buti skaiciaus tipo';
    }
    if (typeof n2 !== 'number') {
        return 'Error: antrasis parametras turi buti skaiciaus tipo';
    }
    if (n1 === Infinity || n1 === -Infinity || '' + n1 === 'NaN') {
        return 'Error: pirmasis parametras turi buti normalus skaicius';
    }
    if (n2 === Infinity || n2 === -Infinity|| isNaN(n2) ) {
            return 'Error: antrasis parametras turi buti normalus skaicius';
    }

    // n = 100
    // 7*5 = 35
    // 11*11 = 100

    //logika
    const result = n1 * n2;

    // rezultato validavimas
    if(result >= Number.MAX_VALUE) {
        return 'Error : rezultatas galimai virsija maksimalia galima prisiminti skaiciaus reisksme';
    }
   


    //rezultato grazinimas
    return result;
}
console.log(daugyba());
console.log(daugyba('labas', 'rytas'));
console.log(daugyba(7, Infinity));
console.log(daugyba(Infinity, 5));
console.log(daugyba(Infinity, Infinity));
console.log(daugyba(7, Infinity));
console.log(daugyba(7, -Infinity));
console.log(daugyba(-Infinity, 5));
console.log(daugyba(-Infinity, -Infinity));
console.log(daugyba(7, NaN));
console.log(daugyba(NaN, 5));
console.log(daugyba(NaN, NaN));


console.log(daugyba(7, 5));
console.log(daugyba(-7, 5));
console.log(daugyba(7, -5));
console.log(daugyba(7, 5));

// 3
function skaitmenuKiekisSkaiciuje(kint) {
    if (
    typeof kint !== "number" ||
    kint === Infinity ||
    kint === -Infinity ||
    isNaN(kint)
    ) {
      return 'Pateikta netinkamo tipo reikšmė';
    }

    let skaitmenuKiekis = 0;
    const kintSplit =("" + kint).split("");

    for(let i = 0; i < kintSplit.length; i++) {
       skaitmenuKiekis += 1;
    }
    return skaitmenuKiekis;
}

console.log('***3 Funkcija***');
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje(true));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));
console.log(skaitmenuKiekisSkaiciuje(Infinity));
console.log(skaitmenuKiekisSkaiciuje(-Infinity));




// 4
function didziausiasSkaiciusSarase(x) {
    if (!Array.isArray(x)) {
        return 'Pateikta netinkamo tipo reiksme';
    }

    if (x.length === 0 ) {
    return 'Pateiktas sarasas negali buti tuscias';
   }
   let didziausiasSkaicius = -Infinity;
   for(let i = 0; i < x.length; i++) {
    if(x[i] > didziausiasSkaicius) {
        didziausiasSkaicius = x[i];
    }
   }
   if (didziausiasSkaicius === -Infinity) {
    return 'Sarase nera skaiciu';
   }
   return didziausiasSkaicius;
}


console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5, -78, 14, 0, 18]));
console.log(didziausiasSkaiciusSarase([69, 69, 69, 69, 66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([NaN]));
console.log(didziausiasSkaiciusSarase([]));
console.log(didziausiasSkaiciusSarase(['a']));
console.log(didziausiasSkaiciusSarase([-5, -58, 'a', 14, 0, 18]));






// 5
const isrinktiRaides = (string, number) => {
    if (typeof string !== 'string')
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    if(!string.length !== 0 || string.length >= 100)
        return 'Pirmojo kintamojo reikšmė yra netinkamo dydžio.';
    if(typeof number !== 'number' || isNaN(number))
        return 'Antrasis kintamasis yra netinkamo tipo.';
    if (number === Infinity || number === -Infinity)
        return 'Antrasis kintamasis yra netinkamo tipo.';
    if(number <= 0)
        return 'Antrasis kintamasis turi būti didesnis už nulį.';
    if(number > string.length)
        return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.';

    const abc = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz`;
    const data = string.filter((c) => abc.includes(c));

    let newString = '';

    for(let i = number - 1; i < string.length; i = i + number) {
            newString += data[i];
        }

    return newString;

}

//ABCD -> ABCD -> B, D
console.log('***5 FUNKCIJA***');
console.log( isrinktiRaides( 'abcdefg', 2 ));
console.log( isrinktiRaides( 'ABCD',2 ));

console.log( isrinktiRaides( 'abcdefghijkl', 3 ));
console.log( isrinktiRaides( 'abc', 0 ));
console.log( isrinktiRaides( 'abc', 4 ));
console.log( isrinktiRaides( 'abcdefghijkl', Infinity ));
console.log( isrinktiRaides( 'abcdefghijkl', -Infinity ));
console.log( isrinktiRaides( 'abc'.repeat(50), 3 ));
console.log( isrinktiRaides( 'abcdefghi', Infinity ) );
console.log( isrinktiRaides("", 4));

//6
console.log("\n   dalyba  \n");
function dalyba(num1, num2) {
if (
    typeof num1 !== "number" ||
    typeof num1 === "undefined" ||
    isNaN(num1) ||
    num1 === Infinity ||
    num1 === -Infinity 
) {
    return 'Neteisingai nurodyta pirmojo kintamojo reiksme'
}
if (
    typeof(num2 !== "number") ||
    typeof(num2 !== "undefined") ||
    isNaN(num2) ||
    num2 === Infinity ||
    num2 === -Infinity ||
    num2 === 0
) {
    return 'Neteisingai nurodyta pirmojo kintamojo reiskme';
}
    const padalinta = num1 / num2;
    return padalinta;
}
console.log('***6 FUNKCIJA***');
console.log(dalyba(10, 5));
console.log(dalyba(10, NaN));
console.log(dalyba(NaN,5));
console.log(dalyba(10, -Infinity));
console.log(dalyba(10, Infinity));
console.log(dalyba(-Infinity, 2));
console.log(dalyba(Infinity, 2));
console.log(dalyba(dalyba()));
console.log(dalyba(10, 0));
console.log(dalyba(0, 10));

/**
 * Ciklo for panaudojimas
1.Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a.  0 … 0
b.  0 … 4
c.  0 … 100
d.  574 … 815
e.  -50 … 50
f.  -70 … 30
2.panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”


3.Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
a.  0 - 11
b.  8 - 31
c. -18 - 18
rezultatą pateikti tokiu formatu:
*Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
*Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
*Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.

 */
console.log('**************');
function suskaiciuotiSuma (num1, num2) {
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Pateikti skaiciai nera skaiciaus tipo'
    }
    if(isFinite(num1) || isFinite(num2)) {
        return 'Pateikti skaiciai nera normalus skaiciai';
    }
    const n1 = num1 = num1 < num2 ? num1 : num2;
    const n2 = num2 = num2 > num1 ? num2 : num1;
    
    let intervalSum = 0;

    for(let i = n1 - (n1 % 1); i <= num2; i++) {
        intervalSum += i;

    }
    return intervalSum;
}
   console.log(`0-> 0 = ${suskaiciuotiSuma(0, 0)}`);
   console.log(`0-> 4 = ${suskaiciuotiSuma(0, 4)}`);
   console.log(`4-> 0 = ${suskaiciuotiSuma(0, 4)}`);
   console.log(`-4.5-> 1.4 = ${suskaiciuotiSuma(-4.5, 1.4)}`);
   console.log(`0-> 100 = ${suskaiciuotiSuma(0, 100)}`);
   console.log(`574-> 815 = ${suskaiciuotiSuma(574, 815)}`);
   console.log(`-50-> 50 = ${suskaiciuotiSuma(-50, 50)}`);
   console.log(`-70-> 30 = ${suskaiciuotiSuma(-70, 30)}`);
   console.log(`90-> 30 = ${suskaiciuotiSuma(-70, 30)}`);
   console.log(`-70.5-> 30.4 = ${suskaiciuotiSuma(-70, 30)}`);
   console.log(`Infinity -> 30 = ${suskaiciuotiSuma(-70, 30)}`);
   console.log(`'ABC'-> 30 = ${suskaiciuotiSuma(-70, 30)}`);
   console.log(`NaN -> 30 = ${suskaiciuotiSuma(-70, 30)}`);



function stringReverse (string) {
    if(typeof string !== 'string') {
        return 'Pateiktas tekstas nera string tipo' ;
    }
    
    let newString;
    for(let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    };

    return newString;
}
console.log(`'Hello' -> ${stringReverse('Hello')}`);
console.log(`true -> ${stringReverse(true)}`);
console.log(`12345 -> ${stringReverse(12345)}`);
console.log(`'' -> ${stringReverse('')}`);



// 3

function suskaiciuotiIntervala(num1, num2, d) {
    //tikrina ar nera NaN
    if (typeof num1 !== 'number' || typeof num2 !== 'number' || typeof d !== 'number') {
        return `Pateikti skaičiai nėra skaičiaus tipo`;
    }
//tikrina ar nera NaN, Infinity, -Infinity
    if (!isFinite(num1) || !isFinite(num2) || !isFinite(d)) {
        return `Pateikti skaičiai nėra normalūs skaičiai`;
    }
// Ar daliklis yra nulis
    if (d === 0) {
        return `Dalinti iš nulio negalima`;
    }
//Jeigu pirmas didesnis uz antra, tai apkeicia juos vietomis
    const n1 = num1 < num2 ? num1 : num2;
    const n2 = num2 > num1 ? num2 : num1;

// Inicijuojame counter, kuriame skaiciuosime skaiciu kieki
    let counter = 0;

    for (let i = n1 - (n1 % 1); i <= n2; i++) {
        if (i % d === 0) {
            counter++;
        }
    }

    return counter;
}

console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra ${suskaiciuotiIntervala(0, 11, 3)} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra ${suskaiciuotiIntervala(0, 11, 5)} vienetai.`);
console.log(`Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra ${suskaiciuotiIntervala(0, 11, 7)} vienetai.`);





