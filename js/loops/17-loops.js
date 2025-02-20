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

// FOR - OF
for (const number of numbers) {
    console.log(number);
}

for(const name of names) {
    console.log(name);
}