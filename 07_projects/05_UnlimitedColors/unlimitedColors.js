//generate a random color

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color='#'
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)];
    }
    return color;
};
// 1. Start with '#' since every hex color begins with it.
// 2. Loop 6 times to generate 6 color characters.
// 3. Each loop picks a random character from:"0123456789ABCDEF"
// 4. Append the character to the color string.
// 5. Return the final color.

let intervalId
const startChanging=function(){
    if(!intervalId){
        intervalId=setInterval(changeBgColor,500)
        function changeBgColor(){
            document.body.style.backgroundColor=randomColor()
        } 
    }
}
const stopChanging=function(){
    clearInterval(intervalId)
    intervalId=null
}

document.querySelector('#start').addEventListener('click',startChanging)
document.querySelector('#stop').addEventListener('click',stopChanging)