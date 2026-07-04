const user={
    userName:"Daksh",
    loginCount:8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username:${this.userName}`);
        console.log(this)
    }
}

// console.log(user.userName)
// console.log(user.getUserDetails())
// console.log(this)//{} -this gives an empty object 
//when run in an browser it gives window object mtlb bhot sari chize deta hai

// const promiseOne=new Promise()//new keyword is actually a constructor function
// const date=new Date()//it allows us to create multiple instances from a single object literal

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    
    this.greeting=function(){
        console.log(`Welcome ${this.username}`)
    }

    return this
}

// const userOne=User("Daksh16",12,true)
// const usertwo=User("enviy0n",11,false)//this overrides the values

//this is solved by new keyword

const userOne=new User("Daksh16",12,true)
const userTwo=new User("enviy0n",11,false)
// console.log(userOne)
// console.log(userTwo)
console.log(userOne.constructor)

function Car(make,model,year){
    this.make=make
    this.model=model
    this.year=year
}
const auto=new Car('Honda','Accord',1998);
console.log(auto instanceof Car);//Expected output: true
console.log(auto instanceof Object);//Expected output:true
//// Constructor Function:
// new -> creates object + sets this + links to Car.prototype + returns object.
//
// instanceof:
// Checks if Constructor.prototype exists in the object's prototype chain.
// auto instanceof Car    -> true
// auto instanceof Object -> true (every normal object inherits from Object)