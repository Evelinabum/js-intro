class Student {
    constructor(name, age) {
      this.name = name;
        this.age = age;
        this.isStudying = false;
        this.marks = [];

    }
}
const jonas = new Student('Jonas', 99);

console.log(jonas.age);

// ginmtadienis ...
//1 pvz:
jonas.age++;
// 2 pvz :
jonas.age = jonas.age + 11;

console.log(jonas.age);
console.log(jonas);
