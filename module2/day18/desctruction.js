const customer = { name: "Abe", city: "Addis Ababa", balance: 2300 };

const { name, city } = customer;
console.log(name, city);
function greet({ name }) {
  console.log(`Hello, ${name}!`);
}
greet(customer);
