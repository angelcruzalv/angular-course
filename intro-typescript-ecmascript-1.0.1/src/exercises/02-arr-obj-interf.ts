
 

/*
    ===== TypeScript code =====
*/

 let skills = ['Sprint', 'Healing', 'Counter'];

 interface Character{
     name: string;
     hp: number;
     skills: string[];
     city?: string;  //? = optional
 }

 const character:Character = {
     name: 'Miguel',
     hp: 100,
     skills: ['Sprint', 'Healing', 'Counter'],
 }
 
 character.city = 'LA';
 
 console.table(character);