//function declaration : is hoisted like it can be called before the actual line of code
console.log(add(2, 3)); // Output: 5
function add(a, b) {
    return a + b;
}


//function expression : is not hoisted like it can not be called before the actual line of code
const multiply = function(a, b) {
    return a * b;
};
console.log(multiply(2, 3)); // Output: 6

//arow function
const multiplyy = (a,d) => { return a * d; };


// closure is when inner function retain access to variable from its outer scope
function outerFunction(x) {
    return function innerFunction(y) {
        return x + y;
    };
};
const add5 = outerFunction(5);
console.log(add5(3)); // Output: 8

//*************************************************************************************************************** */
//HOFs :  1) function consider as any data type( varianble, array, object, etc)
const addVat = (n) => n * 1.15;
const double = (n) => n * 2;
const operations = [addVat, double];

console.log(operations[0](100)); // Output: 115
console.log(operations[1](100)); // Output: 200

//  ********************************************************************
// 2) function can be passed as an argument to another function 
function forEachPrice(prices, action) {
  for (const p of prices) {
    action(p);
  }
}
const logFormattedPrice = (price) => console.log(`${price} ETB`);
forEachPrice([120, 200, 160], logFormattedPrice);


// ********************************************************************
// 3) function can be returned from another function
function discountBy(percent) {
  return (price) => price * (1 - percent);
}
const memberDiscount = discountBy(0.10); // 10% discount
const clearanceSale = discountBy(0.25);   // 25% discount

console.log(memberDiscount(1000)); // Output: 900
console.log(clearanceSale(1000));  // Output: 750



/********************************************************************************************************************************************************************************************************************************************************************************************************************************************* */

