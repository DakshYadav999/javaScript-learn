function sayMyName(){
    console.log("D")
    console.log("A")
    console.log("K")
    console.log("S")
    console.log("H")
}

//sayMyName() // calling the function

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers(3,"4") // calling the function with arguments

function addTwoNUmbers(num1,num2){
//     let result=num1+num2
//     return result
    return num1+num2
}
// const result=addTwoNUmbers(3,4) // calling the function with arguments and storing the return value in a variable
// console.log("Result:", result)

function loginUserMessage(userName){
    if(!userName){
        return "Please enter a username"
    }
    return `${userName} just logged in`
}
// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){//when we typed val 1 and val 2 wfirst two values went inside val 1 and val 2 and others went inside the array num1
    console.log(val1)
    console.log(val2)
    return num1
}
// console.log(calculateCartPrice(100,200,300,400))

const user={
    name:"Daksh",
    price:1000
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`)
}
// handleObject(user)

const newArray=[200,300,400,500]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue([200,300,400,500]))