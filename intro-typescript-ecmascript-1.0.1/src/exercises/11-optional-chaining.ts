 

/*
    ===== TypeScript code =====
*/
 
interface Passenger {
    name: string,
    kids?: string[],  // "?" means OPTIONAL
}

const pass1:  Passenger = {
    name: 'Luis',
    kids: ['María', 'José', 'Charles']
}
const pass2:  Passenger = {
    name: 'Luis',
    //No kids in this passenger
     
}

function printKids(passenger:Passenger): void {

    const kidsNumber = passenger.kids?.length || 0;  // ? optional chaining

    console.log('kids: ', kidsNumber)
}

printKids(pass2);