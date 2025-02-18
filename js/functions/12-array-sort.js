const numbers = [1, 10, 2, 8, 105, 4, 6, 319, 500, 5];
const words = ['a', 'b', 'de', 'ak', 'eeee', 'ab', 'bo', 'bh'];
const list = [[2,2],[2, 11] ,[], [3, 3, 3], [1], [4, 4],[2],[2, 1]] ;

// mazesnis -1
// lygus 0
// didesnis +1
numbers.sort((a, b) => a - b);
console.log(numbers);

numbers.sort((a, b) => b - a );
console.log(numbers);

// (7, 5) => 7-5 = 2
// (5, 7) => 5-7 = -2

//// (7, 5) => 5-7 = -2
// (5, 7) => 7-5 = -2


words.sort();
console.log(words);

words.sort().reverse();
console.log(words);

list.sort((a, b) => a.length - b.length);
console.log(list);

//atbuline tvarka
list.sort((a, b) => b.length - a.length );
console.log(list);

const students = [
    { name : 'Jonas', age : 99, isMarried: true},
    { name : 'Maryte', age : 88, isMarried: false},
    { name : 'Petras', age : 77, isMarried: false},
    { name : 'Ona', age : 66, isMarried: true},

];

console.log(students);

students.sort((a, b) => a.age - b.age);
console.log(students);


students.sort((a, b) => b.age - a.age);
console.log(students); 


students.sort((a, b) => b.name.length - a.name.length);
console.log(students);

students.sort((a, b) => a.name.length - b.name.length);
console.log(students);

const jonas = {
    name : 'Jonas',
    age: 99,
    isMarried :true
};
console.log(jonas);

console.log(jonas.name);
console.log(jonas.age);
console.log(jonas.isMarried);


console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);

const luckyNumbers = {
    0 : 10,
    1 : 2,
    2 : 8,
    3 : 4,
    4 : 6,
};

const luckyNumbersArray = [10, 2, 8, 4, 6];


// reference



