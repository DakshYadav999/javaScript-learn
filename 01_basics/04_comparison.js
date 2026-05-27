// console.log(2<1);
// console.log(2>1);
// console.log(2<=2);
// console.log(2>=3);
// console.log(2==2);
// console.log("2"<1);
// console.log("02"<1);
console.log(null == undefined); 
console.log(null<0);
console.log(null>0);
console.log(null==0);
console.log(null<=0);
console.log(null>=0);
//this doesnt work as expected because comparison operator converts null to number and treat it as 0 and
//null becomes 0 but equality operator does not convert null to number and it remains null
console.log(undefined==0);
console.log(undefined<0);
console.log(undefined>0);
console.log(undefined<=0);
console.log(undefined>=0);