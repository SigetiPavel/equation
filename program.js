'use strict';

let date1 = Date.now();
// ((y = 2 ** 13 , x = Date.now()) => { while (Date.now() - x < y) ;})();
let date2 = Date.now();

console.log(date1);


console.log('res - ' + countPrime(2000));