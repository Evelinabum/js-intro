// 1. Parašykite funkciją, kuri priima skaičių kaip argumentą ir grąžina jo kvadratą.
// (Pvz., kvadratu(4) turi grąžinti 16.)

console.log('          Pirma uzduotis');


function kvadratas(skaicius) {
    return skaicius* skaicius ;
}
console.log(kvadratas(4));


 
// 2. Parašykite funkciją, kuri patikrina, ar perduotas skaičius yra lyginis.
// (Pvz., arLyginis(8) → true, arLyginis(7) → false.)

console.log('          Antra uzduotis')

function tikrintiLyginiArNelygini(skaicius) {
   return skaicius % 2 ===0;
}
console.log(tikrintiLyginiArNelygini(8));
console.log(tikrintiLyginiArNelygini(7));





 
// 3. Sukurkite funkciją, kuri priima du skaičius ir grąžina didesnįjį.
// (Pvz., didesnisSkaicius(5, 8) → 8.)
function didesnisSk (skaicius1, skaicius2) {
    return skaicius1 > skaicius2 ? skaicius1 : skaicius1 < skaicius2 ? skaicius2  : "Skaiciai lygus" ;


}

console.log('         Trecia uzduotis');
console.log(didesnisSk(5,8));




 
// 4. Sukurkite funkciją, kuri priima stringą ir grąžina jį atvirkštine tvarka.
// (Pvz., reverseString("JavaScript") → "tpircSavaJ".)

console.log('          Ketvirta uzduotis')


const text = "JavaSript";
const text1 = text.split('');
const text2 = text1.reverse();

console.log(text2.join(""));


 
// 5. Parašykite funkciją, kuri skaičiuoja, kiek kartų nurodyta raidė pasikartoja string'e.
// (Pvz., skaiciuotiRaides("banana", "a") → 3.)

console.log('          Penkta uzduotis');

let zodis = '';
function pasikartoja(raides, simbolis) {
    let count = 0;
    for(let i= 0; i< raides.length; i++) {
         if(raides[i]=== simbolis)    {
         count++;
        }
    }
    return count
}
console.log(pasikartoja ('bananas', 'a'));
 
// 6. Sukurkite funkciją, kuri priima skaičių ir grąžina "teigiamas", "neigiamas" arba "nulis" naudojant ternary.

console.log('          Sesta Uzduotis');



function skaicius (num) {
    if (num < 0) {
        return 'Skaicius neigiamas';
    } else if  (num === 0 ){
            return 'Skaicius lygus 0';
        }else if  (num>0) {
            return 'Skaicius teigiamas';
        }

        }
        console.log(skaicius(0));
        console.log(skaicius(-5));
        console.log(skaicius(2));

        
    



 
// 7. Parašykite funkciją, kuri tikrina, ar žodis prasideda raide "A"(nesvarbu, didžioji ar mažoji).
// (Pvz., pradedaA("Automobilis") → true, pradedaA("namas") → false.)
 
console.log('          Septinta uzduotis');
const pradedaA = (zodis) => zodis.toLowerCase().startsWith('a');


console.log(pradedaA('Automobilis'));
console.log(pradedaA('namas'));




// 8. Sukurkite funkciją, kuri priima skaičių ir patikrina, ar jis dalus iš 3 ir 5(grąžina true arba false).
 

const dalusSkaicius = (skaicius) => skaicius % 3 ===0 && skaicius % 5 === 0;
console.log('          Astunta uzduotis');
console.log(dalusSkaicius(3));
console.log(dalusSkaicius(30));



// 9. Naudodami for ciklą, išveskite visus skaičius nuo 10 iki 1 mažėjančia tvarka.

const mazejanciaTvarka = () => {
    for(let i = 10; i >= 1; i--) {
        console.log(i);
    }
};
console.log('          Devinta uzduotis');
mazejanciaTvarka();
    

 
// 10. Parašykite for ciklą, kuris išveda tik lyginius skaičius nuo 2 iki 20.


console.log('         Desimta uzduotis');

for (let index = 2; index <= 20; index++) {
    if (index % 2 ===0) {
        console.log(index);
    }
    }

 
// 11. Naudodami for ciklą, suskaičiuokite visų skaičių nuo 1 iki 100 sumą ir grąžinkite rezultatą.

console.log('          Vienuolikta uzduotis');
let suma = 0;
for (let i= 1; i <= 100; i++) {
    suma += i;
}
console.log(suma);

   

 
// 12. Sukurkite funkciją, kuri priima masyvą skaičių ir grąžina jų vidurkį.
// (Pvz., vidurkis([5, 10, 15]) → 10.)

console.log('          Dvylikta uzduotis');

const vidurkis = [5, 10, 15 ];
let suma1 = 0;

for(let i = 0; i < vidurkis.length ; i++) {
    suma1 += vidurkis[i];
}
const average = suma1 / vidurkis.length;
console.log (average);


 
// 13. Naudodami for ciklą, raskite didžiausią skaičių iš pateikto masyvo.
// (Pvz., rastiDidziausia([3, 9, 2, 11, 7]) → 11.)
 
console.log('         Trylikta uzduotis')

const numbers  = [3, 9, 2, 11, 7] ;
let maxNumber = numbers [0];

for (let i= 1; i < numbers.length; i++) {
    if ( numbers [i] > maxNumber) {
        maxNumber = numbers [i];
    }
}
console.log('Didziausias skaicius', maxNumber);



// 14. Sukurkite funkciją, kuri priima stringą ir grąžina jį be tarpų.
// (Pvz., beTarpų("Labas pasauli") → "Labaspasauli".)
console.log('          Keturiolikta uzduotis');

const keisti = (pstring) => pstring.replace("Labas pasauli", " Labaspasauli");
console.log(keisti ('Labaspasauli'));

 
// 15. Parašykite funkciją, kuri patikrina, ar string'e yra daugiau nei 10 simbolių.
// (Pvz., arIlgas("JavaScript") → true, arIlgas("Labas") → false.)


function ilgesnisNei10(tekstas) {
    return tekstas.length >= 10;
}
  
console.log('           Penkioloikta uzduotis');
console.log(ilgesnisNei10("JavaScript"));
console.log(ilgesnisNei10("Labas"));

// 16. Sukurkite for ciklą, kuris išveda daugybos lentelę 5(nuo 1 iki 10).
console.log('          Sesiolikta uzduotis');
for(let i= 1; i <= 10; i++) {
    let eilute = '' ;
    for ( let j= 1; j <= 10; j++) {
        eilute += (i * j) + "";   
     }
     console.log(eilute);
}

 
// 17. Parašykite funkciją, kuri priima stringą ir pakeičia visas "a" raides į "@".
// (Pvz., keistiRaide("banana") → "b@n@n@".)
console.log('            Septyniolikta uzduotis');


const keistiRaides = (string) => string.replaceAll('a' ,  '@');

console.log(keistiRaides("Banana"));

 
// 18. Sukurkite funkciją, kuri sugeneruoja stringą "**********"(10 žvaigždučių), naudojant for ciklą.
console.log('          Astuoniolikta uzduotis');

function sugenString() {
   let zvaigzd = '';
   for(let i = 0; i < 10 ; i++) {
       zvaigzd += '*'; 
   }
    return zvaigzd;
}
console.log(sugenString());

 
// 19. Parašykite funkciją, kuri priima skaičių ir grąžina visus jo daliklius(išskyrus 1 ir patį save).
// (Pvz., dalikliai(12) →[2, 3, 4, 6].)





 
// 20. Sukurkite funkciją, kuri tikrina, ar pateiktas skaičius yra pirminis.
// (Pvz., arPirminis(7) → true, arPirminis(8) → false.)

console.log('          Dvidesimta uzduotis');
function arPirminis (sk) {
    if (sk < 2) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(sk); i++) {
        if (sk % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(arPirminis(7));
console.log(arPirminis(8));