/** 
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.


*/
function count(start, finish, divider) {
    let result = 0;
    for (let i = start; i <= finish; i++) {
        if( i % divider === 0 ){
            result++;
        }
    }
    return result;
}
console.log(count(0, 11, 3), '--> ', 4);
console.log(count(0, 11, 5), '--> ', 3);
console.log(count(0, 11, 7), '--> ', 2);

console.log(count(1, 11, 3), '--> ', 3);
console.log(count(1, 11, 5), '--> ', 2);
console.log(count(1, 11, 7), '--> ', 1);
console.log(count(1, 11, 7), '--> ', 1);
console.log(count(0 , 1_000_000_000_000, 7),'--> ', 1);
