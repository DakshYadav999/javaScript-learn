//for

// for(let i = 0; i <= 10;i++){
//     const element=i
//     if(element==5){
//         console.log("hello")
//     }
//     console.log(element)

// } 

// for(let i=0;i<=10;i++){
//     console.log(`outer loop ${i}`)
//     for(let j=0;j<=10;j++){
//         console.log(`inner loop ${j}`)
//     }
// }

// let array=["batman","superman","flash"]

// for(let index=0;index<=array.length;index++){
//     const element=array[index]
//     console.log(element)
// }

//break & continue
//  for(let i = 1; i <= 10;i++){
//     const element=i
//     if(element==5){
//         console.log("hello")
//         break;
//     }
//     console.log(element)
// }
//Use Alt+ Shift + Down key to copy downwards
 for(let i = 1; i <= 10;i++){
    const element=i
    if(element==5){
        console.log("hello")
        continue;
    }
    console.log(element)
}//5 will not get printed because continue immediately ends the current iteration and jumps to the next one.


