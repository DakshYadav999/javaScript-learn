//++++++++++++++++++

const arr=[1,2,3,4,5];
// console.log(arr[0]); //1
// console.log(arr[1]); //2
// arr.push(6);
// arr.push(7);
console.log(arr); //[1,2,3,4,5,6,7]

//Array Methods
//arr.unshift(0); //adds an element at the beginning of the array
// console.log(arr);
// console.log(arr.includes(3)); //true
// console.log(arr.includes(10)); //false
// console.log(arr.indexOf(3));//3
arr.push(3);
//console.log(arr.lastIndexOf(3)); //6(gives the last index of the element 3 in the array
arr.pop(); //removes the last element of the array

const arr2=new Array(10); //creates an array of length 10 with all elements undefined
const arr3=Array(10).fill(0); //creates an array of length 10 with allelements initialized to 0

const arr4=new Array(1,2,3); //creates an array with elements 1,2,3
// console.log(arr4[1])

const newArr=arr.join(); //joins all elements of the array into a string
// console.log(newArr);
 
///slice and splice

const myn1=arr.slice(2,5); //creates a new array from index 2 to 4 (5 is not included)
console.log(myn1);
console.log(arr); //arr is not modified after slice

const myn2=arr.splice(2,3); //removes 3 elements from index 2 and returns the removed elements
console.log(myn2);
console.log(arr); //arr is modified after splice