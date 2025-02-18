/*
HOF - highere order functions
*/
const numbers = [1, 2, 3, 4];
const numbers2x = [ ];

for (let i =0; i < numbers.length; i++) {
    numbers2x.push(numbers[i] * 2 );
}

console.log(numbers2x);

//sutrumpinti sita koda :


function triple(n) {
    return n * 3;
}

const numbers3x = numbers.map(triple);
console.log(numbers3x);


const multi5 = n => n* 5 // dar labiau sutrumpinta 

const numbers5x = numbers.map(n => n* 5);
console.log(numbers5x);

const dic = ['Labas', 'rytas', 'Lietuva'];
const letters = dic.map(s => s[0]);
console.log(letters);


const gg = 'Gera gira geroj girioj gera gerti';
const ggInit = gg
      .split(' ')
      .map(s => s[0])
      .join('.') + '!';
console.log(ggInit);


function pirmasSimbolis ( s ) {
    return s[0]

}


const kk = ['Aa1', 'Bb2', 'Cc3'];
// 0-> "1 simboli"
// 1 -> "2"
// 2 -> "3"
// 3-> "4"
// map. yra array metodas, paskirtis dirbti ant masyvo []

const kdkd = kk.map( s=> s[3]);

console.log(kdkd);

const pp = [];
console.log(pp);

pp.push(true);
console.log(pp);

pp.push('zodis');
console.log(pp);

pp[0 ]=5;
console.log(pp);

pp[0] = 9;
console.log(pp);

// istrinti pozicija - delete ;
//console.log(pp);


console.log(pp.length);

//length kiek yra poziciju

const oo = [];
oo [3] = 10;
console.log(oo);
console.log(oo.length);

delete oo[3];
console.log(oo);
console.log(oo.length);

const luckyNumbers = [0, 1, 5, 7, 13, 28, 66, 69];
console.log(luckyNumbers);

const bigerLucky = luckyNumbers.map(n => n * 10 );
console.log(bigerLucky);

// 1 - grazinti didesnius uz 20
// 2 - grazinti didesnius arba lygius 28
//[0, 1, 5, 7, 13, 28, 66, 69] -> [28,66,69]
//3 - grazinti mazesnisu uz 50

const bigLucky1 = luckyNumbers.filter(n => n > 20 );
console.log(bigLucky1);

const bigLucky2 = luckyNumbers.filter(n => n >= 20 );
console.log(bigLucky2);

const bigLucky3 = luckyNumbers.filter(n => n < 50 );
console.log(bigLucky3);

const sixLast = luckyNumbers.filter(n => n % 10 === 6);
console.log(sixLast);

const sixFirst = luckyNumbers.filter(n => (''+ n) [0] === '6');
console.log(sixFirst);

const students= [ 'Jonas', 'Maryte', 'Petras', 'Ona'];
console.log(students);

const nameSize = students.map(s => s.length);
console.log(nameSize);

// >5
const longNamesFilter = students.filter (name => name.length > 5);
console.log(longNamesFilter);


const longNamesMap = students.map(name => name.length > 5 );
console.log(longNamesMap);

// ['Jonas.' , ....]

const studentsInitials = students.map (name => name[0] + '.');
console.log(studentsInitials);

// 1 - vardai kurie nesibaigia raide "s"
// 2 - vardai kurie baigia su raide "e" arba "a"
const womanNames = students.filter( name => name.at(-1) !== 's');
console.log(womanNames);

const womanNames2 = students.filter( name => name.at(-1) === 'e' || name.at(-1) === 'a');
console.log(womanNames2);

//string.endWith()
//array.includes()

//string.endsWith()
const womanNames3 = students.filter( name => name.endsWith('e')|| name.endsWith ('a'));
console.log(womanNames3);

const womanNames4 = students.filter( name => !name.endsWith ('s'));
console.log(womanNames4);

//array.includes()
const womanNames5 = students.filter( name => ['e', 'a'] .includes(name.at(-1)));
console.log(5, womanNames5);

const womanNames6 = students.filter( name => 'ea'.includes(name.at(-1)));
console.log(6, womanNames6);

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(abc);

// [0, 1, 2, 3, 4, 5]
//  ^    ^    ^
//  a    c    e
//  ['a', 'c' , 'e']


const evenAbc = abc.filter((_, i) => i % 2 === 0);
console.log(evenAbc);
//const evenAbc = abc.filter((s(vietoj s gali buti _), i) => i % 2 === 0);

// atrinkti zodzius , kuriuose yra papildoma raide;
// // tokia kokia jie ir prasideda
const words = ['labas', 'ananasas', 'tuktukas', 'vasara'];
const doubleWords = words.filter(w =>w.slice(1).includes (w[0]));
console.log(doubleWords);

const doubleWords2 = words.filter(w => w.indexOf(w[0], 1) > 0);
console.log(doubleWords2);


const colors = ['red', 'green', 'blue', 'yellow', 'red', 'orange'];
const colors2 = ['green', 'red',  'red'];
const colors3 = ['red',  'red','orange' ,'red'];
const colors4 = ['red',  'green','blue' ,'yellow'];




const colorsCopy2 = colors.map((item, index, list) => item);
console.log(colorsCopy2);

const colorsCopy3 = colors.map((item, index, list) => list[index]);
console.log(colorsCopy3);

//rasti visas spalvas , kurios kartojasi
//rasti visas spalvas , kurios yra unikalios


//rasti visas spalvas, kurios kartojasi
// [ 'red, 'red' ,'orange' , 'red' ]
// 0 :list.indexOf(red) ! == list.lastIndexOf(red) :0 !== 3-> true
// 1 :list.indexOf(red) ! == list.lastIndexOf(red) :0 !== 3-> true
// 2 :list.indexOf(red) ! == list.lastIndexOf(red) :2 !== 2-> false
// 3 :list.indexOf(red) ! == list.lastIndexOf(red) :0 !== 3-> true
// ISVADA : sprendimas logiskai neteisingas,
//taciau gaunamas rezultatas yra teisingas

function repeatingValues(color, index, list) {
    return list.indexOf(color) !== list.lastIndexOf(color);
}

console.log(colors.filter(repeatingValues));
console.log(colors2.filter(repeatingValues));
console.log(colors3.filter(repeatingValues));
console.log(colors4.filter(repeatingValues));

















