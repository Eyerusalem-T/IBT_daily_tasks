console.log("this is js exercise.");
function sum(a, b) {
  return a + b;
}

console.log(sum(10, 20));

//to add many numbers by using REST function: the main function of REST is collect many argument into single array
function add(...value) {
  let num = 0;
  for (const n of value) num += n;
  return num;
}
console.log(add(10, 20, 30));

function fun(vat = 0.15, ...varname) {
  let sum = 0;
  for (const n of varname) sum += n;
  return sum * vat;
}
console.log(fun(10, 20, 30, 10));

//fun write as a variable using arrow
//    const sum = (a,b) => a+b;

//closure : function in anther function
function greet(city) {
  return function (name) {
    return `selam ${name}, from ${city}`;
  };
}
const hi = greet("a.a"); //hi is consider as a function cuz it call freet function , and the greet function is call the iner function , and that function is place in "hi" variable
console.log(hi("abe"));

//higher order function: a function it hold other function or a function calles other function . the caller /holder function is called *higher order function , and the other function is called call-back
/*function birr(price, action) {
                for (const p of price) {
                  action(p); // action is a function which is print price + ETB
                }
              }
              birr([120, 200, 150], (price) => {
                console.log("`${price} `ETB");
              });

              console.log(birr(23, 45, 67, 89, 90, 100)); //this is a function which is call the birr function and it is print the sum of the price

*/
//js array: array is a collection of data which is stored in a single variable
const vowle = ["A", "E", "O", "U", "I"];

console.log(vowle[0]);
console.log(vowle.length);
vowle.pop();
console.log(vowle.includes("A"));


//js create object: object is a collection of data which is stored in a single variable, and it is a key-value pair
//and we can access the value of the object by using the key of the object with dot notation is; banckAccount.owner  AND TO BE SAFE  we can use ? befor the dot like this; bankAccount?.owner
// we use ?? to check if the object is null or undefined, if it is null or undefined it will give a defualt value ,like this; bankAccount?.owner ?? "no owner" so it return no owner if the object is null or undefined
const bankAccount = {
  owner: "Alice",
  balance: 1000,
  interest: 0.07,

  deposit(amount) {
    this.balance += amount;
  },
  withdrawal(amount) {
    if (amount > this.balance) {
      console.log("Insufficient funds");
      return;
    }
    this.balance -= amount;
  },
};

bankAccount.deposit(500);
bankAccount.withdrawal(200);
console.log(bankAccount.balance);




//map function: map function is a function which is used to create a new array from an existing array by applying a function to each element of the existing array 
const numbers = [120, 220, 330, 410, 549];
const vat = numbers.map((n) => n * 0.15);
console.log(vat);

const new_Vowle = vowle.map((v) => `${v}  is a vowle`);
console.log(new_Vowle);


//filter function: filter function is a function which is used to create a new array from an existing array by applying a function to each element of the existing array and returning only the elements that pass the test implemented by the provided function
const new_numbers = numbers.filter((n) => n > 300);
console.log(new_numbers);

const dishes = [
  { name: "tibs", price: 330 },
  { name: "shiro", price: 410 },
  { name: "misr", price: 549 },
]
const expensiveDishes = dishes.filter((d) => d.price > 400).map((d) => d.price * 1.15);

console.log(expensiveDishes);


//reduce function: reduce function is a function which is used to reduce an array to a single value by applying a function to each element of the array and returning the accumulated result
const total = numbers.reduce((sum, n) => sum + n, 0); //sum = 0 is the initial value of sum, and n is the current element of the array
console.log(total);


const totalPrice = dishes.reduce((sum, d) => sum + d.price, 0);
console.log(totalPrice);

// all map,filter,reduce 
const numberss = [10, 17, 20, 23, 25,28,29, 32];
console.log(numberss.filter((n) => n % 2 == 0).map((n) => n * n).reduce((sum, n) => sum + n, 0));


//destructuring: destructuring is a feature of ES6 which is used to unpack values from arrays or properties from objects into distinct variables
const [first, second , third] = numbers;
console.log(first, second, third);

const { owner, balance, interest } = bankAccount;
console.log(owner, balance, interest, bankAccount?.accountnumber ?? "no account number"); // if the accountnumber is null or undefined it will give a defualt value "no account number"

//REST in destructuring

const [firstNum, ...restNum] = numberss;
console.log(firstNum, restNum); // firstNum is 10 and restNum is [17, 20, 23, 25,28,29, 32]

//copy and combine array: we can copy and combine array by using spread operator
//spread operator is used to spread the elements of an array or object into a new array or object
//rest operator is used to collect the elements of an array or object into a new array or object
const copyNumbers = [...numberss];
console.log(copyNumbers);

const users = ["Abe", "Bekele", "Chala"];
const copyUsers = [...users, "alem", "alemitu"];
console.log(copyUsers); // this is for array case

const bankAccount2 = { ...bankAccount, accountnumber: 1234567890 };
console.log(bankAccount2); // this is for object case

const bankAccount3 = { ...bankAccount, owner: "Bekele" };
console.log(bankAccount3); // this is overriding the owner property of bankAccount object with new value "Bekele" and it will not change the original bankAccount object




//default export is used to export a single value from a module, and it can be imported with any name in the importing module can be imported with any name in the importing module  "import anyName from './module.js';" or 
//named export is used to export multiple values from a module, and it can be imported with the same name in the importing module      can be imported "import { name1, name2 } from './module.js';" or "import * as module from './module.js';"