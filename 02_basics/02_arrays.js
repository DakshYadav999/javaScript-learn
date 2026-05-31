
const bleach=["Ichigo","Yamamoto","Aizen"]
const one_piece=["Luffy","Zoro","Sanji"]

// bleach.push(one_piece); //adds the one_piece array as an element to the bleach array
// console.log(bleach);

// const animes=bleach.concat(one_piece); //concatenates the bleach and one_piece arrays and returns a new array
// console.log(animes);

const animes=[...bleach,...one_piece]; //spread operator to concatenate the bleach and one_piece arrays
// console.log(animes);

const arr=[1,2,3,4,[5,6,7,8],[,9,[10,11,12]]]
// const flatArr=arr.flat(Infinity); //returns a new array with all sub-array elements concatenated into it recursively up to the specified depth (2 in this case)
// console.log(flatArr);

// console.log(Array.isArray("Hello")); //false
// console.log(Array.from("Hello")); //['H','e','l','l','o'] creates an array from a string
// console.log(Array.from({name:"John"})); //[] creates an array from an object (only works if the object has a length property)

let score1=100;
let score2=400;

console.log(Array.of(score1,score2)); //[[100],[400]] creates an array from the given arguments