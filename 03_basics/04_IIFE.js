//Immediately Invoked Function Expression (IIFE)
// An IIFE is a JavaScript function that runs as soon as it is defined. It is a design pattern that is also known as a Self-Executing Anonymous Function
// An IIFE is an anonymous function wrapped in `()` to create a local scope and avoid polluting the global namespace. Adding `()` immediately after it runs the function right away.`


(function one(){//named IIFE
    console.log("DB is connected")
})();

//()() first is for definition and second is for invocation
//; after IIFE because it doesnt know when to stop

(()=>{
    console.log("DB2 is connected")
})();

((name)=>{//simple IIFE with parameter
    console.log(`DB2 is connected ${name}`)
})("Daksh");