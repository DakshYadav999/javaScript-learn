const promiseOne=new Promise(function(resolve,reject){
    //Do an async task
    //DB calls,cryptography, network
    setTimeout(function(){
        console.log("Async task is complete");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Promise Consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async Task 2 ");
        resolve()
    },1000)
}).then(function(){
    console.log("Async task 2  resolved")
}) 

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Daksh",email:"daksh@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"Daksh",password:"123@abc"})
        }else{
            reject("ERROR! Something went wrong")
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(username)
}).catch(function(error){
    console.log(error)
}).finally(()=>{ console.log("The promise is either resolved or rejected")})

const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"tarnished",password:"werty1"});
        }else{
            reject("ERROR! JS went wrong")
        }
    },1000)
})

async function consumepromiseFive(){
    try{
        const response=await promiseFive
        console.log(response)
    }catch(error){
        console.log(error)
    }
}

consumepromiseFive()

// async function getAllusers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data=await response.json()//await here too because the data conversion takes time
//         console.log(data)
//     }catch(error){
//         console.log("E:",error)
//     }
// }

// getAllusers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=> {
    console.log(data)
})
.catch((error)=> console.log(error))