const coding=["js","py","rb","cpp"]

// coding.forEach(function(val){
//     console.log(val)
// })//forEach() goes through each element of the array.For every element, it calls the callback function.val receives the current element.

//we can use arrow function as well
// coding.forEach((item)=>{
//     console.log(item);
// })

function printMe(item){
    console.log(item);
}
// coding.forEach(printMe)//just give reference dont include () because it means to execute

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr)
// })

// forEach() executes a callback once for each element.
// Syntax: arr.forEach((value, index, array) => {})
// Used for iteration when you don't need to return a new array.
// Cannot use break, continue, or return to stop the loop.

const myCoding=[
    {
        languageName:"javaScript",
        languageFileName:"js"
    },
    {
        languageName:"Java",
        languageFileName:"java",
    },
    {
        languageName:"Python",
        languageFileName:"py"
    }
]

myCoding.forEach((item)=>{
    //console.log(item)
    console.log(item.languageName)
})