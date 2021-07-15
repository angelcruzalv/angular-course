
 

/*
    ===== TypeScript code =====
*/

interface Product {
    description: string,
    price: number
}

const smartPhone:Product = {
    description: 'iPhone 12 Pro',
    price: 100
}

const computer: Product = {
    description: 'Macbook pro',
    price: 100
} 

// function taxes (product:Product[]): number{

//     let total = 0;
//     product.forEach(element => {
//         total += element.price;
//     });

//     return total * 0.16;
    
// }
//destructuring function
function taxes (product:Product[]): [number, number]{

    let total = 0;
    product.forEach(({price}) => {
        total += price;
    });

    return [total, total * 0.16];
    
}

const products = [smartPhone, computer];

const [total, tax] = taxes(products);

console.log('total: ', total, '\n', 'taxes: ', tax)