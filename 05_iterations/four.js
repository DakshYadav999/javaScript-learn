//For-in

const myObj={
    js:'javaScript',
    cpp:'C++',
    rb:'Ruby'
}

// for(const key in  myObj){
//     console.log(myObj[key])
// }

const programming=["js","cpp","rb","py","java"]

for(const key in programming){
    //console.log(key);//0,1,2,3,4 because keys of array values are their indices
    console.log(programming[key])
}

// for...in -> iterates over enumerable object property keys.
// for...of -> iterates over values of iterable objects (Array, String, Map, Set).
// Maps are iterable but their entries are NOT enumerable object properties,
// so use for...of with Maps. for...in on a Map produces no output.