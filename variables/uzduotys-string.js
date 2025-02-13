// Praktinių Užduočių sting metodai

// Sukurkite stringą ir išveskite jo ilgį.


const firstName = 'Lina';
const nameSize =firstName.length;
console.log(firstName.length);



// Konvertuokite stringą į didžiąsias raides.

let text = "labas rytas" ;
let didziosios = text.toUpperCase();
console.log(didziosios); 




// Konvertuokite stringą į mažąsias raides.

let text1 = "LABAS VAKARAS";
let mazosios = text1.toLowerCase();
console.log(mazosios); 




// Pašalinkite tarpus iš string'o pradžios ir pabaigos.


let string = "    Hello, world!     ";
let cleanedString = string.trim();
console.log(cleanedString); 


// Patikrinkite, ar stringas prasideda žodžiu "Hello".


const string7 =('Hello, my friends!');
const starstWith = string7;
console.log(string7.startsWith('Hello'));


// Patikrinkite, ar stringas baigiasi žodžiu "World".

let word = "Hello world!";
let endsWith = word;
console.log(word.endsWith('world!'));


// Raskite pirmąją žodžio "Java" poziciją string'e.

let text9 = 'Java yra programavimo kalba ';
let zodis = 'Java';

console.log(text9.indexOf(zodis));


// Raskite paskutinę žodžio "Java" poziciją string'e.

let text10 = 'Java yra programavimo kalba ';
let zodis1 = 'Java';

console.log(text10.lastIndexOf(zodis1));


// Pakeiskite pirmąjį "Java" į "JS".
let tekstas = "Java yra viena iš programavimo kalbų. Java yra daug kur naudojama";
let pirmasPakeistas = tekstas.replace("Java", "JS");
    console.log("Pakeistas pirmas  'Java' : " , pirmasPakeistas);



// Pakeiskite visus "Java" į "JS".

let tekstas1 = "Java yra viena iš programavimo kalbų. Java yra daug kur naudojama";
let antrasTekstas = tekstas1.replaceAll("Java", "JS");

    console.log(tekstas1.replaceAll('Java', 'Js'));





// Padalinkite stringą į masyvą pagal skyriklį.

const zodis2 = "Java,labai,gerai";
console.log(Array.from(zodis2));

console.log(zodis2.split(','));


// Sujunkite du string'us į vieną.
const zodziai ='Labas rytas, Viso gero. ';
const zodziai7='Siandie yra pirmadienis.';
console.log(zodziai.concat(' ',zodziai7));





// Išskirkite string'o dalį nuo 3 iki 8 simbolio.

let tekstas4 = "Labas rytas";
let isskirtasTekstas = tekstas4.slice(3,8);
console.log(isskirtasTekstas);

console.log(tekstas4.substring(3,8));





// Naudodami slice, paimkite paskutinius 5 string'o simbolius.

let word5 = 'metodai';
let pask = word5.slice(-5);
console.log(pask);


// Naudodami substring, paimkite pirmus 5 string'o simbolius.

const paimkitePirmus = "Naudodami substring";
console.log(paimkitePirmus.substring(0,5)); 




// Sukurkite stringą, kuris pakartojamas 4 kartus.

let sukurtiString = "Java";
let repeat = sukurtiString.repeat(4); 

console.log(repeat);


// Patikrinkite, ar string'e yra žodis "fun".
let yraFun = "She is very fun".indexOf("fun") !== -1;
console.log("Ar yra 'fun'?:", yraFun);


// Išveskite stringą su kabutėmis "teksto" viduje.

let str = 'Labas "rytas';
console.log();

// Sukurkite šablono literatūrą su kintamuoju ir išveskite rezultatą.


const vardas = 'Maryte';
const amzius = '20';
const sveikinimas = 'Sveikinu ${vardas} gimtadienio proga, ${vardas}!';
 console.log(sveikinimas);


// Pašalinkite tarpus tik iš string'o pradžios.

let text11 = ("  Labas vakaras, Lietuva!");
let trimmed = text11.trimStart();
console.log(trimmed.trimStart());








//Papildomos užduotys (sprendimams naudokite string metodus ir for ciklą (ne visuose uždaviniuose)):

// 1. Iš string "mokymo centras" suformatuokite taip, kad pirmos raidės būtų didžiosios, o likusios mažosios.






// 2. Sutrumpinkite tekstą "JavaScript programavimas" iki 10 simbolių ir pridėkite '...'.

const programavimas ='JavaScript programavimas';
console.log('     2uzduotis');

console.log(programavimas.substring(0,10)+ "...");


// 3. Atspausdinkite tekstą "JavaScript" atvirkščiai.

const teks = "JavaScript";
const tekst = teks.split("");
const teksta = tekst.reverse();

console.log('     3uzduotis');
console.log(teksta.join(""));
// 4. Tekste "obuolys, bananas, kivis" pakeiskite visus kablelius į kabliataškius.



// 5. Suskaičiuokite, kiek yra žodžių string'e "Šiandien gera diena.".

let sakinys = 'Siandien gera diena';
let skaiciuoti = sakinys.split(" ").length;

console.log('     5uzduotis');
console.log(skaiciuoti);



// 6. Patikrinkite, ar tekstas "test@gmail.com" turi @ ir baigiasi .com.


// 7. Pašalinkite pirmą simbolį string'e " JavaScript", jei jis yra tarpas.

let zod = " JavaScript";
console.log('     7 uzduotis');
console.log(zod.trimStart());


// 8. Palyginkite string'us "JavaScript" ir "javascript" ignoruodami jų raidžių dydį.

const zodis99 = "JavaScript";
const zodis88 = "javaScript"
console.log(zodis99.toLocaleLowerCase=== zodis88.toLocaleLowerCase);

// 9. Pašalinkite visus skaičius iš teksto "a1b2c3".



const teksto = "a1b2c3";

if (teksto.startsWith("a1b2c3")) {
}
console.log('      9 uzduotis');
  console.log("abc");



  
// 10. Suskaičiuokite, kiek tekste "a1b2c3" yra skaičių.
let tekste = "a1b2c3"; 
console.log('     10 uzduotis ');
console.log(tekste.split("").length);



// 11. Iš teksto "HTML CSS JS" paimkite pirmąją kiekvieno žodžio raidę ir sudėkite jas į vieną string'ą.

const text7 ='HTML CSS JS';
const words3 =text7


// 12. Raskite pirmą žodį string'e "Hello World!".

const zodi7 = 'Hello World';
const words = zodi7.split(' ');

console.log( '     12uzduotis ')
console.log(words[0]);




// 13. Pašalinkite paskutinius 3 simbolius string'e "JavaScript" ir atspausdinkite rezultatą.
console.log('     13 uzduotis');
console.log("JavaScript".slice(0,8));


// 14. Prie string'o "Likusios dienos: " pridėkite skaičių 5 iš daysLeft kintamojo.

let daysLeft = 5;
console.log('     14 uzduotis');
console.log("Likusios dienos : "+ daysLeft );



// 15. Tekste "mokytojas" pakeiskite pabaigą į "ėja", kad gautumėte "mokytoja".

const text8= 'Mokytojas';

console.log('     15uzduotis')
console.log(text8.slice(0,-1));