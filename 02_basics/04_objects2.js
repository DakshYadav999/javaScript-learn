 //const tinderUser=new Object()->thiscreates a singleton object
 const tinderUser={}//this doesnt create a singleton object

 tinderUser.id="123abc"
 tinderUser.name="John"
 tinderUser.isLoggedIn=true
 console.log(tinderUser)
 
 const regularUser={
    email:"john@example.com",
    fullname:{
        userfullname:{
            firstname:"John",
            lastname:"Doe"
        }
    }
 }
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3={obj1,obj2}//this is called object literal
//const obj3=Object.assign({},obj1,obj2)//this is called object assign
//const returnedTarget=Object.assign(target,source);
const obj3={...obj1,...obj2}//this is called spread operator
//console.log(obj3)

const users=[
    {
        id:"123abc",
        name:"John"
    },
     {
        id:"123abc",
        name:"John"
    },
     {
        id:"123abc",
        name:"John"
    }
]
users[1].name

// console.log(Object.keys(tinderUser))//this will give us the keys of the object
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser)) 
// console.log(tinderUser.hasOwnProperty("name"))//this will check if the object has the property or not

const course={
    coursename:"JavaScript",
    price:999,
    courseInstructor:"John Doe" 
}
//course.courseInstructor

const {courseInstructor: instructor}=course//this is called object destructuring
//Object destructuring is a JavaScript syntax that lets you extract properties from an object into separate variables in a concise way.
console.log(instructor)

// {
//     "name":"John",
//     "age":30,
//     "city":"New York"
// }JSON data