//1. Parašykite funkciją, kuri pagal vartotojo įvestą balą(nuo 1 iki 10) išspausdina atitinkamą vertinimą: "Labai gerai", "Gerai", "Patenkinamai" arba "Nepatenkinamai".Kuris operatorius čia tinkamiausias?
console.log('')
console.log('Pirma uzduotis')
function vertinimas (balas) {
    if( balas>= 9 && balas <= 10){
        console.log('Labai gerai');
    } else if (balas >= 7 && balas <= 8) {
        console.log('Gerai');
    } else if (balas >= 5 && balas <=6) {
        console.log('Patenkinamai');
    } else if(balas >=1 && balas <= 4) {
        console.log('Nepatenkinamai') ;
    } else {
        console.log('Ivertinkite bala nuo 1 iki 10!');

    }

 }

 //Testavimas su skirtingais balais
 vertinimas(10); // Labai gerai
 vertinimas(8); // Gerai
 vertinimas(6); // Patenkinamai
 vertinimas(3); // Nepatenkinamai
 vertinimas(11); // Iveskite bala nuo 1 iki 10 !


// 2. Parašykite programą, kuri patikrina, ar asmuo gali balsuoti pagal amžių(18 ir daugiau).Jei taip, atspausdinkite "Gali balsuoti", jei ne – "Negali balsuoti".Kuris metodas čia tinkamiausias?

console.log('')
console.log('Antra uzduotis')
function tikrintiBalsavimoTeise(amzius) {
    if(amzius >= 18) {
        console.log ('Gali balsuoti');
    } else {
        console.log('Negali balsuoti')
        }
}


// Testavimas su skirtingais amziais
tikrintiBalsavimoTeise(20);  // Gali balsuoti
tikrintiBalsavimoTeise(18);  // Gali balsuoti
tikrintiBalsavimoTeise(16); // Negali balsuoti





//3. Sukurkite programą, kuri pagal savaitės dienos numerį(nuo 1 iki 7) atspausdina dienos pavadinimą.Kurį metodą čia patartumėte naudoti?

function amziausGrupe(grupe) {
    if (grupe >= 12 && grupe <= 19) {
        return 'Jaunuolis';
    } else if (grupe >= 19 && grupe <=64) {
        return 'Suauges';
    } else if (grupe >= 64 && grupe <= 120) {
        return 'Pensininkas';

    }
    else {
        return 'idk';
    }
    
}
console.log(amziausGrupe(39));
console.log(amziausGrupe(88));


console.log('')
console.log('Trecia uzduotis');
console.log(pavadinimas(1)); // Pirmadienis
console.log(pavadinimas(2)); // Antradienis
console.log(pavadinimas(3)); // Treciadienis
console.log(pavadinimas(4)); // Ketvirtadienis
console.log(pavadinimas(5)); // Penktadienis
console.log(pavadinimas(6)); // Sestadienis
console.log(pavadinimas(7)); // Sekmadienis
console.log(pavadinimas(8)); 



//4. Parašykite funkciją, kuri patikrina, ar skaičius yra teigiamas, neigiamas ar lygus nuliui, ir atitinkamai išveda pranešimą.Kurį operatorių naudoti?
 
function skaicius (num) {
    if (num < 0) {
        return 'Skaicius neigiamas';
    } else if (num == 0) {
        return 'Skaicius lygus nuliui';
    }else if ( num > 0) {
        return 'Skaicius teigiamas'
    }
    }


console.log('')
console.log('Ketvirta uzduotis')
console.log(skaicius(-3)); // Skaicius neigiamas
console.log(skaicius(0)); //Skaicius lygus 0
console.log(skaicius(5)); // Skaicius teigiamas




// 5 uzduotis

function ageGroup(age) {
    switch(true) {
    case(age >= 13 && age <=19) :
         return 'Asmuo priskirtas jaunuoliu grupei';
     case(age>=20 && age <= 64):
         return 'Asmuo priskirtas suaugusiuju grupei';
    case (age >=65):
        return 'Asmuo priskirtas pensininku grupei';
    default:
        return 'Asmuo nepriskirtas jokiai grupei'
    }
}
console.log('')
console.log('Penkta uzduotis')
console.log(ageGroup(55))
console.log(ageGroup(19))








//6uzd
console.log('')
console.log('Sesta uzduotis')
function tikrintiLyginiArNelygini(skaicius) {
    if (skaicius % 2 ===0) {
        console.log('Skaicius yra lyginis');
    }else {
        console.log('Skaicius yra nelyginis') ;
    }
 }

  tikrintiLyginiArNelygini(8);
  tikrintiLyginiArNelygini(9);








