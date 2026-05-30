//+++++++++++++++NUMBERS+++++++++++++++++
// const score=400
// console.log(score);

// const balance=new Number(1000)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

// const num1=123.8981
// console.log(num1.toPrecision(5));

// const num2=1000000
// console.log(num2.toLocaleString('en-IN'))

//+++++++++++++++MATHS+++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.max(4,6,8,2));
// console.log(Math.min(4,6,8,2));
console.log(Math.random());//gives value between 0 and 1
console.log(Math.floor(Math.random()*10)+1);//gives value between 1 and 10

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);//gives value between 10 and 20
// Random integer in range [min,max]
// Math.random() -> 0 to <1
// *(max-min+1) -> scales to range size
// floor() -> integer
// +min -> shifts range to start from min
