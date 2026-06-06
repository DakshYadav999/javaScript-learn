// const userEmail="daksh@gmail.com"

// if(userEmail){
//     console.log("You have an email")
// }
// else{
//     console.log("Please provide an email")
// }

//falsy values: false, 0,-0,BigInt 0n, "", null, undefined, NaN

//truthy values: "0","false",'false',[],{},function(){},true,1,

// const email=[]
// if(email.length===0){
//     console.log("empty array")
// }

// const emptyObj={}

// if(Object.keys(emptyObj).length===0){
//     console.log("empty object")
// }

// const number=0n
// if(number){
//     console.log("number is truthy")
// }else{
//     console.log("number is falsy")
// }

// false==0//true because of type coercion
// false===0//false because of strict equality operator which doesn't perform type coercion
// false=' '//true because of type coercion
// 0==' '//true because of type coercion

//++++++++++++++++++++++++++++++++++++++++++++++++
//Nullish coalescing operator(??) null & undefined are considered nullish values

// let val1;
// // val1=5 ?? 10//5 because 5 is not nullish
// // val1=null ?? 10//10 because null is a nullish value
// // val1=undefined ?? 10//10 because undefined is a nullish value
// val1=null ?? undefined ?? 10 ?? 20//10 because null and undefined are nullish values but 10 is not a nullish value
// console.log(val1)

//++++++++++++++++++++++++++++++++++++++++++++++++

//Ternary operator
//condition ? expressionIfTrue : expressionIfFalse

// const age=18
// const canVote=age>=18 ? "You can vote" : "You cannot vote"
// console.log(canVote)

const iceTeaPrice=100
iceTeaPrice>50 ? console.log("It's expensive") : console.log("It's affordable")