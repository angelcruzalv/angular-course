
 

/*
    ===== TypeScript code =====
*/

interface SuperHero{
    name: string,
    age: number,
    // address: {
    //     st: string,
    //     city: string,
    //     country: string
    // },
    address: Address, //better create a new interface instead objets inside
    showAddress:() => string;
}
interface Address{
    st: string,
    city: string,
    country: string
}

const superHero:SuperHero = {
    name: 'Spiderman',
    age: 15,
    address: {
        st: 'Main St',
        city: 'NYC',
        country: 'USA'
    },
    showAddress(){
        return this.name + ', ' + this.address.st  + ', '+ this.address.city + ', ' + this.address.country;
    }
}

const address = superHero.showAddress();
console.log(address);