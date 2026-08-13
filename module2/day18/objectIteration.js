const customer = {
  name: "Abe",
  city: "Addis Ababa",
  balance: 2300,
};

for (const [key, value] of Object.entries(customer)) {
  console.log(`${key}: ${value}`);
}
