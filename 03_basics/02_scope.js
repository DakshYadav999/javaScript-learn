if(true){
    let a=10;
    const b=20;
    var c=30;
}

//console.log(a)// ReferenceError: a is not defined because let and const are block scoped
//console.log(b)  // ReferenceError: b is not defined because let and const are block scoped
//console.log(c)  //this will work because var is function scoped and not block scoped, so it is accessible outside the block as well\

// //for(let i=0;i<array.length;i++){
//     const element=array[i]
// }
// console.log(array.length)

function one(){
    const username="Daksh"
    
    function two(){
        const website="Daksh.com"
        console.log(username) // this will work because of closure, inner function has access to the variables of the outer function
    }
    //console.log(website) // ReferenceError: website is not defined because it is defined inside the inner function and not accessible outside

    //two()
}
//one()

if(true){
    const username="Daksh"
    if(username==="Daksh"){
        const website="youtube.com"
        // console.log(username+ website)
    }
    //console.log(website) // ReferenceError: website is not defined because it is defined inside the inner block and not accessible outside
}

function addOne(num){
    return num+1
}
// console.log(addOne(5))

//addTwo(5)//ReferenceError: Cannot access 'addTwo' before initialization
const addTwo=function(num){
    return num+2
}
addTwo(5)
