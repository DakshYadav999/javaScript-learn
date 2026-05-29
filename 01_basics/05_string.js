const name="daksh"
const repoCount=10

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String('Elden Ring')
console.log(gameName)
console.log(gameName.__proto__);
// Prototype:
// JS uses prototype-based inheritance.
// Every object has access to a prototype object.
// Prototype allows objects to inherit properties and methods.
// Used for code reuse and inheritance.
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));

const newString=gameName.substring(0,5)
console.log(newString);

const anotherString=gameName.slice(-9,2)
console.log(anotherString);

const newString2="   Hello World!   "
console.log(newString2.trim());

const url="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
console.log(url.replace("https","http"));
console.log(url.includes("youtube"));

