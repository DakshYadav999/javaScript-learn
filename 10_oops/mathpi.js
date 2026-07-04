const descriptor= Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descriptor)
/*{
    value: 3.141592653589793,
    writable: false,    
    enumerable: false,
    configurable: false
}*/ 

// console.log(Math.PI)
// Math.PI=5
// console.log(Math.PI)

const snack1={
    name:'Shawarma Roll',
    price:75,
    isAvailable:true,

    orderRoll:function(){
        console.log("done")
    }
}
// console.log(Object.getOwnPropertyDescriptor(snack1,"name"))

Object.defineProperty(snack1,'name',{
    //writable:false,
    enumerable:false
})

console.log(Object.getOwnPropertyDescriptor(snack1,"name"))

for(let [key,value] of Object.entries(snack1)){
    if(typeof value!=="function"){
        console.log(`${key}:${value}`)
    }
}