 

/*
    ===== TypeScript code =====
*/
//export every function inside interface before calling it
 


class CarInfo{
    constructor(
        public fullDescrip: string,
        public state: string
    ){}
}
class Car extends CarInfo{
    // model: string;
    // year: number;
    // descrip: string;
    constructor(
        public model: string,
        public year: number,
        public descrip: string
        ){
            super('This is the full cars full description', 'Good');
        }
}

const mycar = new Car('Toyota prius', 2009, 'Sedan');

console.log(mycar)