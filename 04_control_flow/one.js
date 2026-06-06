//if

// const isUserlogggedIn=true;

// if(isUserlogggedIn){
//     console.log("Welcome back!");
// }else{
//     console.log("Plaese log in to continue.");
// }

// const temp=40;

// if(temp>0 && temp<30){
//     console.log("The weather is nice.");
// }else if(temp<=0){
//     console.log("It's freezing outside.");
// }else{
//     console.log("It's hot outside.");
// }

//<,>,<=,>=,===,!==,&&,||,!

// const score=300

// if(score>100){
//     const power="Haki"//if used var then power would be function scoped and accessible outside the if block but with const it is block scoped and not accessible outside the if block
//     console.log(`You have unlocked ${power}!`);
// }
// //console.log(power);//error because power is block scoped and not accessible outside the if block

// const balance=1000

// if(balance>500) console.log("test"),console.log("test2");

const userLoggedIn=true
const debitCard=true

if(userLoggedIn && debitCard){
    console.log("You can make a purchase.");
}else{
    console.log("Please log in and ensure you have a debit card to make a purchase.");
}