//Reduce
//const array1=[1,2,3,4]
//const initalValue=0
// const sumWithInitial=array1.reduce(
//     (accumulator,currentValue)=> accumulator+currentValue,initialValue
// );

const myNums=[1,2,3,4]
// const myTotal=myNums.reduce(function(acc,currVal){
//     console.log(`acc:${acc} and curr:${currVal}`)
//     return acc+currVal
// },0)
// const myTotal=myNums.reduce((acc,curr)=> acc+curr,0)
// console.log(myTotal)

const shoppingCart=[
    {
        itemName:"cpp course",
        price:1999
    },
    {
        itemName:"java course",
        price:1899
    },
    {
        itemName:"go course",
        price:2999
    }
]

const total=shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(total)
