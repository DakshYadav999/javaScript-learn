//singleton-a Singleton is a design pattern where only one instance of an object exists throughout the application.
//Object.create 

//Object Literals

const mySym=Symbol("key1")
const jsUser={
    name:"Daksh",
    [mySym]:"myValue",
    age: 22,
    location: "India",
    isLoggedIn: true,
    lastLoginDays: ["Monday", "Saturday"]
}
// console.log(jsUser.age)//this will work only when the key is defined without "" but when defined with "" then we have to use [] to access the value of the key 
// console.log(jsUser["age"])
// console.log(jsUser[mySym])//this will work but mySym is still not being used a symbol key in the object because it is defined as a string key in the object. To use mySym as a symbol key, we need to define it without quotes in the object.
//to use it as a symbol key we can do like this [mySYm]: "myValue" and then we can access it using jsUser[mySym]
jsUser.location="Delhi"//this will update the value of location key to Delhi

//Object.freeze(jsUser)//this will freeze the object and we cannot update any value of the object after this line
//console.log(jsUser)

jsUser.greeting=function(){
    console.log("Hello")
}
jsUser.greeting2=function(){
    console.log(`Hello ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())