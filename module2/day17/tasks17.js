// Task: VAT Functions

function vat(amount, rate = 0.15) {
  return amount * rate;
}

const vatArrow = (amount, rate = 0.15) => amount * rate;

console.log(vat(100));
console.log(vatArrow(100));



// Task: Private Counter Closure

function makeCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = makeCounter();

console.log(counter());
console.log(counter());
console.log(counter());
//`count` stays private because it is scoped inside makeCounter(). External code cannot access it directly, but the returned closure retains access to it.
//



// Task: Discount Factory

function discountBy(rate) {
  return function (price) {
    return price - price * rate;
  };
}

const memberPrice = discountBy(0.1);
const salePrice = discountBy(0.3);

console.log("Member price:", memberPrice(1000), "ETB");
console.log("Sale price:", salePrice(1000), "ETB");



// Task: Higher-Order Function (applyToAll)

function applyToAll(list, fn) {
  let result = [];
  for (let item of list) {
    result.push(fn(item));
  }
    return result;
}

const prices = [100, 200, 500];
const pricesWithVat = applyToAll(prices, (price) => price + price * 0.15);

console.log(pricesWithVat);



// Task: Ethiopian Cities with forEach

const cities = ["Addis Ababa", "Hawassa", "Bahir Dar", "Gondar", "Mekelle"];

cities.forEach((city, index) => {
    console.log(index + 1 + ". " + city);
});
