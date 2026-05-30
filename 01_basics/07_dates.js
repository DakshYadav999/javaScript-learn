//+++++++++++++++++++++++++++++++++

let myDate=new Date();
//console.log(myDate.toString());->Sat May 30 2026 14:10:39 GMT+0000 (Coordinated Universal Time)
//console.log(myDate.toDateString());->Sat May 30 2026
//console.log(myDate.toLocaleDateString());->5/30/2026
//console.log(myDate.toLocaleString());->5/30/2026, 2:15:05 PM(due to time zone)
//console.log(myDate.toISOString());->2026-05-30T14:10:39.160Z
//console.log(typeof myDate);//object

let myDate2=new Date(2026,4,30);//month is 0-indexed
//console.log(myDate2.toDateString());//Sat May 30 2026

let myTimeStamp=Date.now();
//console.log(myTimeStamp);//gives number of milliseconds since Jan 1, 1970

//console.log(Math.floor(Date.now()/1000));//gives number of seconds since Jan 1, 1970

let myDate3=new Date(2026,0,30,14,30,0);//year, month, day, hour, minute, second
//console.log(myDate3.toString());//Fri Jan 30 2026 14:30:00 GMT+0000 (Coordinated Universal Time)

let newDate=new Date();
// console.log(newDate);
// console.log(newDate.getFullYear());
// console.log(newDate.getDate());

//console.log(`${newDate.getDate()}-${newDate.getMonth()+1}-${newDate.getFullYear()}`);//30-5-2026

console.log(newDate.toLocaleString('default',{
    era:'long',
    weekday:'long',
    month:'long',
    day:'numeric',
    year:'numeric',
    timeZoneName:'short'
}))//Saturday, May 30, 2026 Anno Domini at UTC
//+++++++++++++++++++++++++++++++++