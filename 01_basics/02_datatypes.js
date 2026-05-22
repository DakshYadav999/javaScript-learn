"use strict";//treat all JS code as newer version 
let age=18
let isLoggedIn=false
let state=null
//number=>2 to power 53
//bigint
//string=>" "
//null=>standalone value
//undefined=>
//symbol=>unique
console.log(typeof age);
// NOTES:

// undefined:
// Variable declared but value not assigned yet

let city;
console.log(typeof city); // undefined


// null:
// Intentional empty value

let user = null;

// typeof null gives "object"
// This is a historical bug in JavaScript
// null is actually a primitive datatype, NOT an object

console.log(typeof null); // object


// Object:
// Stores multiple related values together

let person = {
    name: "Daksh",
    age: 21
};

// Difference:
// undefined = value not assigned
// null = intentionally empty