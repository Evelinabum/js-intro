const numbers = [10, 2, 8, 4, 6];
const names = [ 'Jonas', 'Maryte', 'Petras', 'Ona'];

// FOR
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(number);
}

for(let i = 0; i < names.length; i++) {
    const name = names [i];
    console.log(name);
}
// i+=2 -kas antra
//for(let i = 0; i < names.length; i+=2) {

// FOR - OF

{
    let i = 0;
   for (const number of numbers) {
        console.log(i++, '-->', number);
    }
}

{
    let i = 0;
    for(const name of names) {
        console.log(i++, '-->',name);
   }
}

// WHILE
{
    let i = 0;
    while(i < 5) {
        console.log(i,'while...');
        i++;
    }
}

// WHILE yra tas pats FOR:
{
for( let i= 0; i <5; i++) {
        console.log(i,'for...');
   }
}

{
     for (let i = 0, j = 25; i < 20 && j > 10 ; i++, j--) {
         console.log(i, j);
    }
}
