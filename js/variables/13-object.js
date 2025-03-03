const jonas = {
    name : 'Jonas',
    age: 99,
    isMarried : true,
    marks : [10, 2, 8, 4, 6],
};
console.log(jonas);

console.log(jonas.name);
console.log(jonas.age);
console.log(jonas.isMarried);


console.log(jonas['name']);
console.log(jonas['age']);
console.log(jonas['isMarried']);
console.log(jonas.marks);

const luckyNumbers = {
    0 : 10,
    1 : 10,
    2 : 8,
    3 : 4,
    4 : 6 ,
};

console.log(luckyNumbers);
console.log(luckyNumbers[ '0'], luckyNumbers[0]);
console.log(luckyNumbers[ '1'], luckyNumbers[1]);
console.log(luckyNumbers[ '2'], luckyNumbers[2]);
console.log(luckyNumbers[ '3'], luckyNumbers[3]);
console.log(luckyNumbers[ '4'], luckyNumbers[4]);

const crazy = {
    title : 'pavadinimas....',
    isMarried: true,
    '7': 'septyni',
    'atskiri zodziai': 'daug atskiru zodziu',
    new: 'Kazkas naujo',
    new2: 'Kazkas naujo 2',

};

console.log(crazy);
console.log(crazy['title']);
console.log(crazy['7']);
console.log(crazy['isMarried']);
console.log(crazy['atskiri zodziai']);

console.log(crazy[7]);

console.log(crazy.title);
console.log(crazy.isMarried);


const maryte = {
    name : 'Maryte',
    age: 88,
    isMarried : false,
    marks : [10, 2, 8, 4, 6],
    parents : [
        {
            name: 'Juozapas',
            age: 102,
            isMarried: true,
            phone: 861475214,
            marks: [10, 9, 8, 7, 6, 5, 4],
        },
        {
            name : 'Marija',
            age: 110,
            isMarried :true,
            phone: 861475214,
            marks: [10, 9, 8, 3, 5, 4],
        },
    ],
};

console.log(maryte);

const marksCount = maryte.marks.length;
let marksTotalSum = 0;

for (let i = 0; i < marksCount; i++) {
   marksTotalSum += maryte.marks[i];
}

const maryteMarksAverage = marksTotalSum / marksCount;

console.log('Pazymiu suma:', maryteMarksAverage);
console.log('Pazymiu kiekis:', maryteMarksAverage);
console.log('Marytes pazymiu vidurkis:', maryteMarksAverage);

console.log(maryte.parents.length);

console.log(maryte.parents[0].name);
console.log(maryte.parents[1].name);

for(let i = 0; i < maryte.parents.length; i++) {
   const parent = maryte.parents[i];

    console.log(maryte.parents[i].name);
    console.log(maryte.parents[i].age);
    console.log(maryte.parents[i].isMarried);
    console.log(maryte.parents[i].marks);
}


const jonas1 = {
    name: 'John',
    age: 99,
    isMarried: true,
};
const maryte1 = {
    name: 'Maryte',
    age: 88,
    isMarried: false,
};

function hi(person) {
    return `Sveiki, mano vardas yra ${person.name}.`;
}

console.log(hi(jonas1));
console.log(hi(maryte1));
console.log(hi({}));
console.log(hi({ age: 66 }));



