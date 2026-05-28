//Primitive
//7 types: String, Number, Boolean, Null, Undefined, Symbol, BigInt

//Non-primitive(Reference data type )
//Object, Array, Function
const score=100;
const scoreValue=100.3;
const isLoggedIn=true;
const outsideTemp=null;
let userEmail;
const id=Symbol("123");
const anotherId=Symbol("123");
console.log(id===anotherId); //false, because each Symbol is unique
const bigNumber=BigInt(1234567890123456789012345678901234567890);
// BigInt:
// Used for very large integers.
// JS Number loses precision for huge values, so BigInt was introduced.
// BigInt stores ONLY whole numbers (no decimals).
// Create using 'n' or BigInt().
// Cannot mix directly with Number.
// typeof BigInt -> "bigint"

// Symbol:
// Primitive datatype used to create unique identifiers.
// Every Symbol value is unique, even with same description.
// Mostly used for unique object keys and avoiding name conflicts.
// typeof Symbol -> "symbol"
const pirates=["Jack Sparrow","Black Beard","Captain Hook"];
let myObj={
    name:"Daksh",
    age:23,
    hobbies:["coding","gaming"],
    isLoggedIn:true
}
const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof pirates);//object
console.log(typeof bigNumber);//bigInt
console.log(typeof score);//Number
console.log(typeof outsideTemp);//object (null is considered an object in JS)
// Null:
// Represents intentional absence of value (empty value).
// null is NOT an object.
// But typeof null returns "object" due to a historical JS bug.
// Kept unchanged to avoid breaking old code.

console.log(typeof myFunction);//function
// Object & Function datatype:
// typeof object -> "object"
// typeof function -> "function"
// Functions are actually special objects in JS.
// Since functions are callable objects, typeof gives "function"
// instead of generic "object".

//Stack(primitive) vs Heap(non-primitive):
//Primitive values are stored in the stack, which is a simple memory structure.
//Non-primitive values (objects, arrays, functions) are stored in the heap, which is a more complex memory area.
//When you assign a primitive value to a variable, it holds the actual value.
//When you assign a non-primitive value to a variable, it holds a reference (pointer) to the location in the heap where the value is stored.

let myName="Daksh";
let anotherName=myName;
console.log(myName); //Daksh
console.log(anotherName); //Daksh
myName="Rohit";
console.log(myName); //Rohit
console.log(anotherName); //Daksh (unchanged, because it's a copy of the value)

let myObj1={
    name:"Daksh",
    age:23
}
let anotherObj=myObj1;
myObj1.age=24;
console.log(myObj1); //{name: "Daksh", age: 24}
console.log(anotherObj); //{name: "Daksh", age: 24} (changed, because it's a reference to the same object)

// Stack vs Heap Memory:

// Primitive datatypes (String, Number, Boolean, Null, Undefined, Symbol, BigInt)
// -> Stored in Stack
// -> Copy of value is passed
// -> Changes do NOT affect original variable

// Non-primitive / Reference types (Object, Array, Function)
// -> Stored in Heap
// -> Stack stores reference (address) to heap memory
// -> Reference is shared, so changes can affect original data