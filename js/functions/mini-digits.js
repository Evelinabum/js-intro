function skaitmenuKiekisSkaiciuje (n) {
  // parametru validacija
  if(typeof n !== 'number' ) {
    return 'Pateikta netinkamo tipo reiksme.';
  }
  if(isNaN(n) || n === Infinity || n === -Infinity ) {
    return 'Pateiktas netinka skaiciaus tipo reiksme';

  }

  // logika 
  
    let result = ('' + n).length;

    if (n < 0) {
      result--;
    }
    if (n % 1 !== 0) {
      result--;
    }

  // rezultato validacija

  // rezultato grazinimas
  return result;
}


console.log(skaitmenuKiekisSkaiciuje(), '-->', 'Pateikta netinkamo tipo  reiksme');
console.log(skaitmenuKiekisSkaiciuje(undefined), '-->', 'Pateikta netinkamo  tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje(true), '-->', 'Pateikta netinkamo  tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje('asd'), '-->', 'Pateikta netinkamo  tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje({}), '-->', 'Pateikta netinkamo  tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje([]), '-->','Pateikta netinkamo  tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje(skaitmenuKiekisSkaiciuje), '-->', 'Pateikta netinkamo  tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje(null), '-->', 'Pateikta netinkamo  tipo reiksme');

console.log(skaitmenuKiekisSkaiciuje(NaN), '-->', 'Pateiktas netinka skaiciaus tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje(Infinity), '-->', 'Pateiktas netinka skaiciaus tipo reiksme');
console.log(skaitmenuKiekisSkaiciuje(-Infinity), '-->', 'Pateiktas netinka skaiciaus tipo reiksme');

console.log(skaitmenuKiekisSkaiciuje(5), '-->', 1);
console.log(skaitmenuKiekisSkaiciuje(781), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(37060123456), '-->', 11);
console.log(skaitmenuKiekisSkaiciuje(-5), '-->', 1);
console.log(skaitmenuKiekisSkaiciuje(-781), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(-37060123456), '-->',11);
console.log(skaitmenuKiekisSkaiciuje(3.14), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(-3.14), '-->', 3);
console.log(skaitmenuKiekisSkaiciuje(2.727), '-->', 4);
console.log(skaitmenuKiekisSkaiciuje(-2.727), '-->', 4);
console.log(skaitmenuKiekisSkaiciuje(1.000), '-->', 4);
console.log(skaitmenuKiekisSkaiciuje(-1), '-->', 1);

console.log(skaitmenuKiekisSkaiciuje(1_000_000_000), '-->', 10);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000), '-->', 13);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000), '-->', 16);
console.log(skaitmenuKiekisSkaiciuje(1_000_000_000_000_000_000), '-->', 19);
console.log(skaitmenuKiekisSkaiciuje(10_000_000_000_000_000_000), '-->', 20);
console.log(skaitmenuKiekisSkaiciuje(100_000_000_000_000_000_000), '-->', 21);
console.log(skaitmenuKiekisSkaiciuje(1000_000_000_000_000_000_000), '-->', 22);



//kai virsija 22 funkcija nebepripazysta visu skaitmenu










