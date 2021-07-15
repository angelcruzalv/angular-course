 

/*
    ===== TypeScript code =====
*/
 //generic function <T> T could be any letter
function type<T>(arg: T){
    return arg;
}

//generic function receives any type of argument

let iAmString = type('String');

let iAmNumber = type(10);

let iAmArray = type([1,2,3,4,5]);

//explain the function youre sending an explicit type
let iAmExplicit = type<number>(500);

console.log(iAmArray)