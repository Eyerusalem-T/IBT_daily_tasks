const prices = [100, 800, 200, 1400, 1000];

const grandTotal = prices
  .map((price) => price * 1.15) 
  .filter((price) => price < 1000) 
  .reduce((total, price) => total + price, 0); 

console.log("Grand Total:", grandTotal);