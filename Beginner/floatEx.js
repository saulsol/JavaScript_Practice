
Decimal = require('decimal.js');
let result = new Decimal(0.1).plus(new Decimal(0.2));
console.log(result.toString()); 