/**
 *  https://www.codewars.com/kata/57a6633153ba33189e000074
 *
 * Count the number of occurrences of each character and return it as a (list of tuples) in order of appearance. For empty output return (an empty list).
 * Consult the solution set-up for the exact data structure implementation depending on your language.
 *
 * Example:
 * orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]
 */
 
function orderedCount(string) {
    // Inicijuojame tuščią masyvą, kuriame talpinsime masyvus su rastomis raidėmis ir jų kiekiu
    const letterCounter = [];
 
    // "Prasukame" ciklą kiekvienam simboliui iš viso gauto string'o
    for (let i = 0; i < string.length; i++) {
        // Gauname true / false ar toks simbolis jau yra pas mus letterCounter masyve
        const existing = letterCounter.find(pair => pair[0] === string[i]);
 
        if (existing) {
            existing[1]++; // Jeigu simbolis yra, padidiname jo skaičių
        } else {
            letterCounter.push([string[i], 1]); // Jei nėra, pridedame naują simbolį su 1
        }
    }
 
    return letterCounter;
}
 
console.log(orderedCount('abracadabra'));
console.table(orderedCount ('abracadabra'));



/** 
 *  Antra uzduotis
 * https://www.codewars.com/kata/54edbc7200b811e956000556
*Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
 true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined
*/
const countSheeps = (sheeps) => {
    let sheepCount = 0;

    for ( let i=0; i < sheeps.length; i++) {
        if ( sheeps[i] === true) {
            sheepCount++;
        }
    }
    return sheepCount;
  }

  const sheeps = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true, null, undefined, 'something'];
    console.log(`Sheep count - ${countSheeps(sheeps)}`);


/**
 * https://www.codewars.com/kata/5704aea738428f4d30000914
 *
 * Triple Trouble
Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
function tripleTrouble(one, two, three){
  //Solution
 }
  **/
 const tripleTrouble = (s1, s2, s3) => {
    //Inicijuojame kintamaji, kuriame saugosime nauja string'a
    let newString = "";
    // Prasukame cikla per pirmaji gauta stringa (pagal jo ilgi)
    for (let i = 0; i < s1.length; i++) {
        newString += s1[i]+ s2[i]+ s3[i];
        // 0 '' += a    +b    +c
        // 1.  'abc'  +=a   +b   +c
        //abcabc
    }
    return newString;
 }
 console.log(`Naujas string - ${tripleTrouble('aa', 'bb', 'cc')}`);
 
 
 /**
  * What if we need the length of the words separated by a space to be added at the end of that same word and have it returned as an array?

Example(Input --> Output)

"apple ban" --> ["apple 5", "ban 3"]
"you will win" -->["you 3", "will 4", "win 3"]
Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

Note: String will have at least one element; words will always be separated by a space.
  */

const addLength = (string ) => {
    string = string.split(' ');

   for (let i = 0; i < string.length; i++) {
       string[i] += ' ' + string[i].length;
   }

    return string;
}
console.log(addLength('apple ban'));
console.log(addLength('you will win'));

// Savarankiskos uzduotys
// PIRMA UZDUOTIS
/**Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires w
**/

function reverseWords(str){
 return str.split(" ").reverse().join(" ");
}
console.log(reverseWords("The greatest victory is that which requires no battle"));
// Split(" ") padalina eilutę į masyvą pagal tarpą
// Reverse () apverčia masyvą
// Join (" ") sujungia atgal į eilutę su tarpais tarp žodžiųž


/**ANTRA UZDUOTIS

Make a simple function called greet that returns the most-famous "hello world!".

Style Points
Sure, this is about as easy as it gets. But how clever can you be to create the most creative "hello world" you can think of? What is a "hello world" solution you would want to show your friends?
**/
function greet() {
    return "hello world!"
  }
  console.log(greet("hello world!"));




  /** TRECIA UZDUOTIS
   * It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
   * 
   */
  function removeChar(str) {
   return str.slice(1, -1);
   };
   console.log(removeChar("Hello"));

   
   
   /** KETVIRTA UZDUOTIS
    * 
    * When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
    * 
    * 
    */
   
function position(letter) {
    const alphabet = "abcdefghijklmnopqrstuvwyz";
    return `Position of alphabet : ${alphabet.indexOf(letter) + 1}`;
}
console.log(position('a'));
console.clear();













/**
 * Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

Examples:

* With `name` = "john"  => return "Hello, John!"
* With `name` = "aliCE" => return "Hello, Alice!"
* With `name` not given 
  or `name` = ""        => return "Hello, World!"
 */
  function hello(name = "") {
    if (!name) {
        return "Hello, World!";
    }
    const changeName = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase(0);
    return `Hello, ${changeName}!`;
  }
  console.log(hello("john"));
  console.log(hello("aliCe"));
  console.log(hello());
  console.log(hello(""));
console.clear();

  




/**
 * Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1
If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

Examples
Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
 */

function warnTheSheep(queue) {
    const wolfIndex = queue.indexOf("wolf");
    if(wolfIndex === queue.length -1){
        return "Pls go away and stop eating my sheep";
    } else {
        const sheepPosition = queue.length -1 - wolfIndex;
        return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
    }
}
console.log(warnTheSheep(['sheep', 'sheep', 'sheep', 'wolf', 'sheep', 'sheep']));
console.log(warnTheSheep(['sheep', 'walf']));
console.log(warnTheSheep(['wolf']));
  