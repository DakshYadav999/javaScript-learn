const user={
    name: "Daksh",
    price:1000,
    welcomeMessage:function(){
        console.log(`${this.name}, welcome to the site`)
        console.log(this) // this will refer to the user object because it is called as a method of the user object

    }
}
//user.welcomeMessage()
//console.log(this) // this refers to module.exports — an empty object by default.

// function one(){
//     console.log(this.name)// this will be undefined because it is called in the global scope and there is no name property in the global object
//     //console.log(this) // this will refer to the global object because it is called in the global scope
// }
// one()

// const one=function(){
//     let name="Daksh"
//     console.log(this.name) // this will be undefined because it is called in the global scope and there is no name property in the global object
// }
// one()

const one=()=>{
    let name="Daksh"
    console.log(this.name) // this will be undefined because arrow functions do not have their own this, they inherit it from the parent scope which is the global scope in this case and there is no name property in the global object
}
//one()

// const addTwo=(num1,num2)=>{
//     return num1+num2
// }normal return //return statememnnt is always written with {}
// console.log(addTwo(5,10))

//const addTwo=(num1,num2)=> (num1+num2) // implicit return can also be used without parentheses and with ()
//console.log(addTwo(5,10))

const addTwo=(num1,num2)=> ({userName:"Daksh", price:1000}) // implicit return of an object, we need to wrap the object in parentheses to avoid syntax error
console.log(addTwo(5,10))