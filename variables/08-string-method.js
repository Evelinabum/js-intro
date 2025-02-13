/*
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/raw
*/




const firstname = "Chuck";
const nameSize = firstname.length;

console.log(firstname, firstname.length);
console.log(firstname, nameSize);

// Chuck name is 5 letters long
const chuckName = `${firstname} name is ${firstname.length} letters`;
console.log(chuckName);

//length- gražina teksto ilgį

let text ="Labas rytas";
console.log(text.length); 


//Start With and endwith' - iškerpa teksto dalį
const browserType1= "mozilla";

if (browserType1.startsWith("zilla")) {
  console.log("Found zilla!");
} else {
  console.log("No zilla here!");
}

// [] atvaizduoja simbolį kuris yra konkrečioje vietoje 
const vardas = "Jonas";
console.log(vardas[0]);
console.log(vardas[3]);
console.log(vardas[2]);


// IndexOf

const zodis = 'mes nezinome kurioje vietoje prasideda mūsų teksto dalis ir vėl prasideda';
console.log("");
console.log(zodis.indexOf("prasideda"));
console.log(zodis.indexOf("prasideda", zodis.indexOf("prasideda")+1));
console.log(zodis.indexOf("mes"));


//Replace metodas-pakeičia tekstą
const browserType2 = "mozilla";
const updated = browserType2.replace("moz", "van");

console.log(updated); // "vanilla"
console.log(browserType2); // "mozilla"




//11
//0123456789
const chuck = 'Kulverstukas';
const nameSize5 = chuckName.length;

console.log(chuckName, chuck.length);
console.log(chuck, nameSize);

//Chuck name is 5 letters long.
 for (let i=0; i < chuck.length; ++i) {
   
   console.log('-->',i, chuck[i]);

 }

 // Standartinis uzrasymas 


//Off by one(kai ne taip pamatuoji dalykus)

//atvirksciai:
console.log('*************');

for (let i=chuck.length-1; i >= 0 ; i--) {
  
  console.log('#',i, chuck[i]);
}

//kiek yra dominanciu raidziu
//vasara ->a?
//vasara ->v?
//vasara ->s?
//vasara ->x?
//vasara ->y?
//vasara ->t?

const word = 'vasara';
let countA = 0;
let countV = 0;
let countX = 0;

for (let i = 0; i < word.length; i++) {
  if (word[i] === 'a') {
    countA++;
  }
  if (word[i] === 'v') {
    countV++;
  }
  if (word[i] === 'x') {
    countX++;
    }
  }

console.log ('Zodyje yra "${word}" yra ${countA} "a" raides');
console.log ('Zodyje yra "${word}" yra ${countV} "v" raides');
console.log ('Zodyje yra "${word}" yra ${countX} "x" raides');




//console.log('Zodyje vasara yra 3 "a" raides.');
//terminator x ->a?
//terminator x ->v?
//terminator x ->s?
//terminator x ->r?
//terminator x ->x?
//terminator x ->y?
//terminator x ->t


function letterCount(){
  return 0;
}
console.log(letterCount('vasara', 'a'));
console.log(letterCount('vasara', 'v'));
console.log(letterCount('vasara', 'r'));

console.log(letterCount('terminator a', 'a'));
console.log(letterCount('terminator v', 'v'));


const word2= 'vasara';
const word3 = 'terminator x';
const summerA = letterCount

console.log(letterCount(word2, 'a'));
console.log(letterCount(word2, 'v'));

function letterCount(text, searchSymbol) {
  console.log(text, searchSymbol);
    return 0;
  
}

function letterCount(text, searchSymbol) {
  console.log(text, searchSymbol);
    return 0;
  
}
function letterCount(text, searchSymbol) {
  let count = 0;
  for (let i=0; i <text.length; i++) {

  }
    return count;
  
}

function letterCount(text, searchSymbol) {
  let count = 0;

  for (let i=0; i < text.length; i++){
    if(text[i] === + searchSymbol) {
      count++;
    }
  }
  
    return 'Zodyje "${text}" yra ${count}"${searchSymbol}" raides.' ;

}

 console.log(letterCount('Mano tel nr yra 862254895' , 8));


function doesTextIncludesSymbol (text,symbol) {
  for(let i=0; i<text.length; i++){
if (text[i] === symbol) {
  return true;
}
  }
  return false;
}

console.log(doesTextIncludesSymbol('vasara', 'a'));
console.log(doesTextIncludesSymbol('vasara', 'g'));
console.log(doesTextIncludesSymbol('terminator x','x' ));


console.log('*********');
console.log('vasara'.includes('a'));
console.log('vasara'.includes('g'));
console.log('vasara'.includes('v'));



console.clear();

function symbolAtPossition(text,pos) {
  const index = pos >=0 ? pos : (text.length + pos);
  return text[index];

}


const p = 'pomidoras';
console.log(p.at(0), p[0], symbolAtPossition(p, 0));
console.log(p.at(1), p[1], symbolAtPossition(p, 1));
console.log(p.at(2), p[2], symbolAtPossition(p, 3));
console.log(p.at(22), p[22], symbolAtPossition(p, 22));
console.log(p.at(-1), p[p.length -1], symbolAtPossition(p, -1));
console.log(p.at(-2), p[p.length -2], symbolAtPossition(p, -2));
console.log(p.at(-3), p[p.length -3], symbolAtPossition(p, -3));
console.log(p.at(-33), p[-33], symbolAtPossition(p, -33));

console.clear();

console.log('pomidoras'.charAt(0));
console.log('pomidoras'.charAt(1));
console.log('pomidoras'.charAt(2));
console.log('pomidoras'.charAt(3));
console.log('pomidoras'.charAt(-1));
console.log('pomidoras'.charAt(-2));
console.log('pomidoras'.charAt(-3), 'pomidoras'[-3]);


console.clear();
console.log('ABCDEF'.charCodeAt(0));
console.log('ABCDEF'.charCodeAt(1));
console.log('ABCDEF'.charCodeAt(2));
console.log('Z'.charCodeAt(0));
console.log('abcdef'.charCodeAt(0));
console.log('abcdef'.charCodeAt(1));
console.log('abcdef'.charCodeAt(2));




console.log(String.fromCharCode(91,92,93,94,95,96));
console.log(String.fromCharCode(333));
console.log(String.fromCharCode(222));
console.log(String.fromCharCode(2222));
console.log(String.fromCharCode(22222));


console.clear();
console.log('pomidoras'.concat('aaa'));
console.log('pomidoras'.concat('aaa', 'bbb'));

console.log('pomidoras'+ 'aaa'+ 'bbb');



console.clear();
console.log('pomidoras'.endsWith('aaa'));
console.log('pomidoras'.endsWith('a'));
console.log('pomidoras'.endsWith('s'));

console.clear();
console.log('pomidoras'.startsWith('a'));
console.log('pomidoras'.startsWith('p'));
console.log('pomidoras'.startsWith('pr'));
console.log('pomidoras'.startsWith('po'));
console.log('pomidoras'.startsWith('pom'));

console.log('selfy.png'.endsWith('.png'));
console.log('selfy.png'.endsWith('.jpg'));

console.log('https://abc.lt'.startsWith('https://'));
console.log('https://abc.lt'.startsWith('htps://'));

console.clear();
console.log('pomidoras'.includes('a'));
console.log('pomidoras'.includes('r'));
console.log('pomidoras'.includes('x'));
console.log('pomidoras'.includes('pom'));
console.log('pomidoras'.includes('ido'));



const abc = 'abcdef';

console.clear();
console.log('pomidoras'.indexOf('a'));
console.log('pomidoras'.indexOf('r'));
console.log('pomidoras'.indexOf('x'));
console.log('pomidoras'.indexOf('pom'));
console.log('pomidoras'.indexOf('ido'));

















