//for of

//["","",""]
//[{},{},{}]

// const arr=[1,2,3,4,5]

// for(const num of arr){
//     console.log(num)
// }

// const greetings="Hello World"
// for(const greet of greetings){
//     console.log(`Each character is ${greet}`)
// }

//Maps: object holds key-value pairs and remembers the original insertion order of the keys. Any value(both objects and primitve values) may be used  as either a key or a value.
//A key in the map may only occur once ; it is unique in the Map's collection

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('Fr',"France")

// console.log(map)

for(const [key,value] of map){
    // console.log(key,':-',value)
}

const myObj={
    'game1':'NFS',
    'game2':'SpiderMan'
}
// for(const [key,value] of myObj){
//     console.log(key,':-',value)
// }//error because object is not iterable