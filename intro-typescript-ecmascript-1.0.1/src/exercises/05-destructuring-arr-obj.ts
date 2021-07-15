
 

/*
    ===== TypeScript code =====
*/

 interface Player{
     volume: number,
     duration: number,
     song:  string,
     details: Details
 }

 interface Details{
     singer: string,
     author: string,
     year: number
 }

 const player: Player = {
     volume: 85,
     duration: 345,
     song: 'La bamba',
     details: {
         singer:'Ritchie Valens',
         author: 'Unknown',
         year: 1958
     }
 }
 //Object destructuring
    const {volume, duration, song, details} = player;
  
    const { singer, author, year } =  details;
    //const {author, year, singer} =  details;

    console.log('Volume: ', volume);
    console.log('Duration: ', duration);
    console.log('Title: ', song);
    console.log('Singer: ', singer),
    console.log('Author: ', author),
    console.log('Release: ', year)


 //whitout destructuring
//  console.log('Volume: ', player.volume);
//  console.log('Duration: ' , player.duration);
//  console.log('Song: ', player.song);
//  console.log('Singer: ', player.details.singer);
//  console.log('Author: ', player.details.author);
//  console.log('Release:', player.details.year);


//Array destructuring
//declaring
const MyArray: string[] = ['Position0', 'Position1', 'Position2', 'Position3'];

const [a1, a2, a3, a4] = MyArray;

console.log('Array ', a1)
console.log('Array ', a2)
console.log('Array ', a3)
console.log('Array ', a4)

//if just want One Position leave coma , spaces until position
//const [,,,a] = MyArray; 
//console.log('array', a); 
//output: Position3


