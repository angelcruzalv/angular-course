
 

/*
    ===== TypeScript code =====
*/
//No type specify
//  function sum (a , b){
//      return a+b;
//  }

 function sum(a:number, b:number):number {
     return a + b;
 }

 const sumArrow =(a: number, b: number):number => {return a + b}

 
 //const mult: number = (a, b) => {return a*b} //error test
 
 const mult = (num:number, num2?:number, num3:number = 8):number => {
     return num * num3;
     }
    
// const res = mult(5,  4);

// console.log(res);

//Object Character
interface CharacMine{
    name: string,
    hp: number,
    showHP: () => void; //function as a 
}
//new healing function calls the character
function healing(character: CharacMine, healX: number): void{

    character.hp += healX; //increments heal
    
}
//create a new character CharacMine's object
//
const newCharacter: CharacMine = {
    name: 'Jose',
    hp: 45,
    showHP(){
        //show the new hp number
        console.log('Health Points: ' + this.hp );
    }
}
//adds hp to the object newCharacter
healing(newCharacter, 20);
//calls the function to show the new HP
newCharacter.showHP(); 