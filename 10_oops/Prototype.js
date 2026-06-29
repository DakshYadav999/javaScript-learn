let myName="Daksh   "
// console.log(myName.length)
console.log(myName.trim().length)
console.log(myName.trueLength)//undefined

let myDemigods=["Messmer","Radahn"]

let DemigodsPower={
    Messmer:"Flame",
    Radahn:"Gravity",

    getMessmerPower:function(){
        console.log(`In the Embrace of Messmer's ${this.Messmer}`)
    }
}

Array.prototype.helloDaksh=function(){
    console.log('Daksh hello')
}
Object.prototype.Daksh=function(){
    console.log(`Daksh is present in all Objects`)
}
myDemigods.Daksh()
//DemigodsPower.helloDaksh()//wont work because this function was defined for arrays 

//Inheritance 

const user={
    name:"Daksh",
    email:"Daksh@gmail.com"
}
const Teacher={
    makeVideo: true
}
const TeachingSupport={
    isAvailable:false
}

const TAsupport={
    makeAssignment:"JS Asssignment",
    fullTime:true,
    __proto__:TeachingSupport
}
Teacher.__proto__= user

//Modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Daksh Yadav"
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`${this.name}`);
    console.log(`True Length is:${this.trim().length}`)
}

anotherUsername.trueLength()