import { Product, taxes } from './06-destructuring-function';

 

/*
    ===== TypeScript code =====
*/
//export every function inside interface before calling it
 const product: Product[] = [
     {
         description: 'Galaxy S20',
         price: 99,
     },
     {
         description: 'Huawei P40 Pro',
         price: 199,
     }
 ];

 //export original function taxes before this code
 const [total, tax] = taxes(product);