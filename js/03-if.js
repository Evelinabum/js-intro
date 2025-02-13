/*
IF - salygos sakiniai

Pagrindiniai kodo sablonai:
if () {}
if () {} else {}
if () {} else if {} .... else if () {} 
if () {} else if {} .... else if () {} else{}

Palyginimo operatoriai:
-viso: >, <, <=, >=, !=, !==, ==, ===
-naudotini: >, <, <=, >=, !=, !==, ===
-nenaudotini: !=, !==,


loginiai operatoriai:
&& (ir)
|| (arba)
*/



console.log('ssssss');

if (4 <2 ) {
    console.log('dddddd');
} else {
    console.log('eeeeee');  
}

console.log ('aaaaaa');


console.clear();
if ( 4=== 4) {
console.log('Taip');
} else {
console.log('Ne');
}


const a = 3;

if ( a === 1 ) {
    console.log('vienas');
} else if( a === 2) {
    console.log('du');
} else if( a === 3) {
    console.log('trys');
} else {
    console.log('Neatpazintas skaicius');
}

const n = 8;
 if( n % 2 === 0 ) {
    console.log('lyginis');
  } else {
        console.log('nelygiinis');
    }


switch (n % 2) {
    case 0:
        console.log('lyginis');
        break;

    case 1 :
        console.log('nelygiinis');
        break;

}




const d2 = 2;


if (d2 === 1 ) {
     console.log('pirmadienis');
} else {
   if (d2 === 2) {
     console.log('antradienis');
} else {
    if (d2 === 3) {
     console.log('treciadienis');

    }
  }
}


const d3 = 1;
switch (d3) {
    case 1:
        console.log('pirmadienis');
        break;
    default:
       console.log('tokai diena neegzistuoja');

}

// 1-5 - darbo diena
// 6-7 - savaitgalis

const d4 = 3;

if (d4 === 1 ) {
    console.log('darbo diena') ;
} else if (d4 === 2) {
    console.log('darbo diena') ;
} else if (d4 === 3) {
    console.log('darbo diena');

   }



   //switch...

   const d5 = 2;
   switch (d5) {
    case 1:
        console.log('darbo diena');
        break;

    case 2 :
        console.log('darbo diena');
        break;
    case 3 :
            console.log('darbo diena');
            break;
    case 4 :
                console.log('darbo diena');
                break;
    case 5 :
                    console.log('darbo diena');
                    break;
     case 6 :
                        console.log('savaitgalis');
                        break;
    default:
        console.log('tokia diena savaiteje neegzistuoja');
        break;
   }

   switch (d5) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('darbo diena');
        break;

    case 6:
    case 7 :
        console.log('savaitgalis');
        break;
    default :
    console.log('tokia diena savaiteje neegzistuoja');
    break;
    
   }


   const teaStep = 1;
   
   switch (teaStep) {

    case 1 :
        console.log('pasiimti puodeli');
     case 2:
        console.log('uzkaisti vandens ');
    case 3:
            console.log('uzkaiciam');   
    case 4:
            console.log('i puodeli isidedam arbatos');     
    case 5:
            console.log('uzpilame karstu vanbdeniu');                   
    default:
        console.log('labas');
   }



   const stop = 'Geniu';

   switch (stop) {
    case 'Geniu':
        console.log('Geniu');
        break;
    case 'Tremtiniu':
        console.log('Tremtiniu');
        break;
   }



   const temp = 20;
   const isDay =true;

   if (temp > 18) {
     console.log('silta');
   } else {
    console.log('salta ');
   }
     



   
   if (temp > 18) {
    switch (isDay) {
        case true :
            console.log('silta');
            break;
        case false :
            console.log('silta');
             break;
        }
  } else {
   console.log('salta ');
  }
    


  // UNARY (1)
  // BINARY (2)
  // TERNARY (3)

  const x = 5; //vienetine operacija(unary)

  const y = 2 + 2 ; //+ yra binary operatorius

  let text = '' ;
  if (4 < 2 ) {
      text = 'Taip';
  } else {
      text ='Ne' ;
  }
  console.log(text);
  
  const text2 = 4 > 2 ? 'Taip' : 'Ne'; // ternary 
  console.log(text2);



const amziausRiba = 18;
const jonoAmzius = 99;
const jonas = jonoAmzius >= amziausRiba ? 'pilnametis' : 'nepilnametis';

console.log(jonas);
console.log(jonoAmzius >= amziausRiba ? 'pilnametis' : 'nepilnametis');






console.log(1 < 2 ? 3 : 4);
console.log(2 > 3 ? 4: 5 ? 6 : 7);
console.log(2 < 3 ? 4: 5 ? 6 : 7);
console.log(1 < 2 ? 3 ? 4 : 5 : 6 ? 7 : 8);


// VISI SKAICIAI YRA POZITYVUS (TRUTHY)
// 0 YRA  YRA NEGATYVUS (FALSY)

if (2 > 4 ) {
    console.log('ok');
} else { 
    console.log('not so ok');

}



console.log(1 ? 2 : 3 );
console.log(0 ? 2 : 3 );
console.log(5 < 6 ? 2 : 3);



// Visi string yra pozityvus
// isskyrus tuscia
// gali buti ir tarpas, vis tiek bus pozityvus

if ('labas') {
    console.log('ok');
} else { 
    console.log('not so ok');

}


const username = ''; 

if (username) {
    console.log('Labas', username, '!');
} else {
    console.log('Nenurodytas slapyvardis');
}

if (!username) {
    console.log('Nenurodytas slapyvardis');
} else {
    console.log('Labas', username, '!');

}



console.log(1 ? 2 ? 3 : 4 : 5 ? 6 : 7);   //3
console.log(0 ? 1 ? 2 : 3 : 4 ? 5 : 6 );  //5

/*
1 
  ? 2 
  : 3 
- gudriai minimaliausias if else

0
   ? 1 
       ? 2 
       : 3 
  : 4 
       ? 5 
       : 6 

*/





