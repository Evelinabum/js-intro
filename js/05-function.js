/* 
FUNCTION - funkcija - perpanaudojamas logikos blokas
*/

function  kainaSuPVM(bazineKaina) {
    if (bazineKaina <= 100)  { 
    return bazineKaina  + ' Eur, be PVM';
    } else {
        return bazineKaina * 1,21 + ' Eur , su PVM';
    }
}

const price1 = kainaSuPVM(100);
const price2 = kainaSuPVM(200);
const price3 = kainaSuPVM(5);
const price4 = kainaSuPVM(500);
  
console.log(price1);
console.log(price2);
console.log(price3);
console.log(price4);

















