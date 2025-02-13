// 1.Sukurkite funkciją, kuri pagal pateiktą mėnesio numerį(1 - 12) išveda sezono pavadinimą("Pavasaris", "Vasara", "Ruduo", "Žiema").Kuri struktūra geriausiai tinka šiam uždaviniui?
 
function gautiSezona (menesioNumeris) {
  switch (menesioNumeris) {
    case 12:
    case 1:
    case 2:
      return "Ziema";
    case 3:
    case 4:
    case 5:
      return "Pavasaris";
    case 6:
    case 7:
    case 8:
      return "Vasara";
    case 9:
    case 10:
    case 11:
      return "Ruduo";
    default :
      return " Neteisingas menesio numeris! ";
    
}
} 
//Funkcija
console.log('');
console.log('Pirma uzduotis');
console.log(gautiSezona(3)); // "Pavasaris"
console.log(gautiSezona(8)); // "Vasara"
console.log(gautiSezona(11)); // "Ruduo"
console.log(gautiSezona(1)); // "Ziema"






// 2.Parašykite programą, kuri nustato, ar du skaičiai yra lygūs, ar ne, ir atitinkamai išveda pranešimą.Kuris operatorius naudoti?
 function palygintiSkaicius (skaicius1, skaicius2){
    return skaicius1 === skaicius2 ? 'lygus ' : 'nelygus' ;
       }
    

    //Testavimas
    console.log('');
    console.log('Antra uzduotis');
    console.log(palygintiSkaicius(3,3)); //"Skaiciai lygus"
    console.log(palygintiSkaicius(5,3)); //"Skaiciai nera lygus"
     


    
    
 










// 3.Sukurkite funkciją, kuri patikrina, ar vartotojo įvestas simbolis yra balsė, priebalsė ar nėra raidė.Koks operatorius geriausiai tinka?
 

function isEqual (n1,n2) {
  return n1 === n2? 'Skaiciai yra lygus' : 'Skaiciai yra nelygus';
}

console.log('Antra uzd');
console.log('Pateikiame skaicius (1,1). ${isEqual(1,1)}');
console.log('Pateikiame skaicius (2,1). ${isEqual(2,1)}');

function test(raide){
  const balses = ['a', 'ą', 'e', 'ę','i', 'į','y','o','u','ū','ų'];
  const priebalses = ['b','c','č','d','f','g','h','j','k','l','m','n','p','r','s','š','t','v','z','ž'];

  if(balses.includes(raide)) {
    return 'Pateiktas simbolis yra balse';
  } else if (priebalses.includes(raide)) {
    return 'Pateiktas simbolis yra priebalse';
  } else {
    return 'Pateiktas simbolis nera raide' ;
  }
}
  
console.log('Trecia uzd');
console.log(test('a'));
console.log(test('b'));
console.log(test('v')) ;
console.log(test('1')) ;










// 4.Parašykite programą, kuri pagal nurodytą dieną(pirmadienis, antradienis, ...sekmadienis) išveda, ar tai darbo diena ar savaitgalis.Kurį operatorių naudoti?
 
// 5.Sukurkite funkciją, kuri pagal įvestą temperatūrą(Celsius) nustato oro būklę: "Šalta"(< 10°C), "Šilta"(10 - 25°C), "Karšta"(> 25°C).Koks operatorius geriausiai tinka?
 
function weather(degrees){
    switch(true) {
        case(degrees <=10):
        return 'Salta';
        case(degrees >=10 && degrees <=25) :
        return 'Silta';
        case(degrees >25):
        return 'Karsta'
    }
}
console.log('');
console.log('Penkta uzduotis')
console.log(weather(26))







// 6.Parašykite programą, kuri patikrina, ar vartotojo įvestas skaičius yra daliklis tiek 3, tiek 5. Kurį operatorių naudoti?
 
// 7.Sukurkite funkciją, kuri pagal įvestą dienos tipą("darbo diena", "savaitgalis") išveda atitinkamą veiklą: "Dirbti", "Ilsėtis".Kuri struktūra geriausiai tinka?
 
function arReikiaDirbti(dienosTipas) {
    if(dienosTipas === 'darbo diena' ) {
        return 'Dirbti';
    } else if (dienosTipas === 'savaitgalis') {
        return 'Ilsetis';
    } else {
        return'Neteisinga ivestis'; 
    }
    
    }
//Testuojame
console.log('');
console.log('Septinta uzduotis');
console.log(arReikiaDirbti('darbo diena'));
console.log(arReikiaDirbti('savaitgalis'));
console.log(arReikiaDirbti('atostogos'));





    
 



// 8.Parašykite programą, kuri nustato, ar vartotojo įvestas metai yra keliamieji.Kurį operatorių naudoti?

function keliamieji(metai) {
return metai % 4 === 0 && (metai % 100 !== 0 || metai % 400 ===0 ) 
?"Keliamieji"
:"Nekeliamieji" ;
}
console.log('');
console.log('Astunta uzduotis');
console.log(keliamieji(2024));
console.log(keliamieji(2025));





// 9.Sukurkite funkciją, kuri pagal vartotojo įvestą temperatūrą(Celsius) priskiria aprangos rekomendaciją: "Kepurių nereikia", "Kepurės reikalingos", "Geriau neik į lauką".Koks operatorius geriausiai tinka?
 