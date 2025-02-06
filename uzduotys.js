/**
 * Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina "true", jei jis teigiamas, ir "false", jei neigiamas arba nulis.
 */



function isPositive (number) {
    return number > 0;
    
}
 //Testavimas
console.log('');
console.log('Pirma uzduotis');
console.log(isPositive (1)); // True
console.log(isPositive (0)); //False
console.log(isPositive (-11)); //False




    
    

 
/**
 * Užduotis Nr. 2
 * Parašykite funkciją, kuri priima skaičių nuo 1 iki 12 ir grąžina mėnesio pavadinimą.
 */
 function menesioPavadinimas (skaicius) {
    switch(skaicius) {
      case 1:
        return "Sausis";
      case 2:
        return "Vasaris";
      case 3:
        return "Kovas";
      case 4:
        return "Balandis";
      case 5:
        return "Geguze";
      case 6:
         return "Birzelis";
      case 7:
        return "Liepa";
      case 8:
        return "Rugpjutis";
      case 9:
         return "Rugsejis";
      case 10:
        return "Spalis";
      case 11:
        return "Lapkritis";
      case 12:
        return "Gruodis";
      default:
        return 'Neteisingas menesio pavadinimas!';
 }
 }

   //Funkcija
console.log('');
console.log('Antra uzd');
console.log(menesioPavadinimas(4)); //"Balandis"
console.log(menesioPavadinimas(10)); // "Spalis"
console.log(menesioPavadinimas(15)); //"Neteisingas menesio pavadinimas"




 
/**
 * Užduotis Nr. 3
 * Parašykite funkciją, kuri priima du skaičius ir grąžina "Pirmas didesnis", "Antras didesnis" arba "Lygūs".
 */


function palygintiSkaicius(x,y){
  return x > y
  ? "Pirmas didesnis"
  : x < y
  ? "Antras didesnis"
  : "Skaiciai lygus"
}


//Testavimas
console.log('');
console.log('Trecia uzd');
console.log(palygintiSkaicius(5,9)); //"Antras didesnis"
console.log(palygintiSkaicius(7,2)); //"Pirmas didesnis"
console.log(palygintiSkaicius(8,8)); //"Lygus"







 
/**
 * Užduotis Nr. 4
 * Parašykite funkciją, kuri priima temperatūrą Celsijaus laipsniais ir grąžina ją Farenheito laipsniais.
 * P.S.: Dirbame tik su skaičiais, be "°C" ir "°F".
 */
function toFahrenheit(num){
  if(num) {
    return(num*(9/5)+32)+ 'Fahrenheit'
  }
}

//Testuojame
console.log('');
console.log('Ketvirta uzd');
console.log(toFahrenheit(1)); // 34 Fahrenheit
console.log(toFahrenheit(17)); // 63 Fahrenheit







 
/**
 * Užduotis Nr. 5
 * Parašykite funkciją, kuri priima teigiamą skaičių ir grąžina visų jo skaitmenų sumą.
 * P.S.: Jei pateikiamas vienženklis skaičius - grąžiname tą patį skaičių.
 */


function skaitmenuSuma(num) {
  let sum = 0;
  for (let i=0; num / 10 >0; i++){
    sum += num % 10;
    num =Math.floor(num/ 10);
  }
   return sum;
  }


console.log('');
console.log('Penktta uzd');
console.log(skaitmenuSuma(10));




 
/**
 * Užduotis Nr. 6
 * Parašykite funkciją, kuri grąžina atsitiktinį procentą nuo 0 iki 100 (sveikasis skaičius).
 */
 function grazinaAtsitiktiniSkaiciu () {
  return Math.floor(Math.random() *101);
 }

 //Testavimas
console.log('');
console.log('Sesta uzd');
console.log(grazinaAtsitiktiniSkaiciu());
console.log(grazinaAtsitiktiniSkaiciu());
console.log(grazinaAtsitiktiniSkaiciu());
console.log(grazinaAtsitiktiniSkaiciu());





/**
 * [BONUS] Užduotis Nr. 1
 * Parašykite funkciją, kuri priima skaičių ir grąžina masyvą su jo daugybos lentelės rezultatais iki 10.
 */

function daugyba(num) {
  return Array.from( {lenght:10}, (_,i) => (i +i) * num);
}

console.log("\n Sesta  uzduotis");
console.log(daugyba(5)); 
console.log(daugyba(10)); 
console.log(daugyba(15)); 


