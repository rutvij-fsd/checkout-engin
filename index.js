import Checkout from './checkout.js';

// Example scenarios
const co = Object.create(Checkout);

// Scenario 1: SKUs Scanned: buds, op10, buds, buds
co.scan('buds').scan('op10').scan('buds').scan('buds')
const total1 = co.total();
console.log('Total 1:', total1); // Expected output: 1109.97

// Scenario 2: SKUs Scanned: wtch, op11, op11, op11, buds, buds, op11, op11
// co.scan('wtch').scan('op11').scan('op11').scan('op11').scan('buds').scan('buds').scan('op11').scan('op11');
// const total2 = co.total();
// console.log('Total 2:', total2); // Expected output: 4989.92
