// const coding=["js","py","cpp","rb"]

// const values=coding.forEach((item)=>{
//     console.log(item)
// })
// console.log(values)//this gives undefined 
//because forEach always returns undefined — it’s meant for side effects (like logging), not for producing a new array.

const myNums=[1,2,3,4,5,6,7,8,9,10]

// const newNums=myNums.filter((num)=> num>4)
// const newNums=myNums.filter((num)=>{
//     return num>4
// })//when using a {} it means you created a scope and return statement is a must

// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums)


const Books=[
    {
        title:"Book1",genre:"fiction",published:2003,edition:2026
    },
    {
        title:"Book2",genre:"history",published:1982, edition:2007
    }
]

let userBooks=Books.filter((bk)=> bk.genre==="fiction");
userBooks=Books.filter((bk)=> bk.published<2020 && bk.genre=="history")
console.log(userBooks)