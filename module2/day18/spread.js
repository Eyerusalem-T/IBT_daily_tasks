const originalCustomer = {
  name: "Abebe",
  city: "Addis Ababa",
  balance: 2300,
};
const updatedCustomer = {
  ...originalCustomer,
  city: "Hawassa",
  phone: "+251948382937",
};
console.log("Original Customer:", originalCustomer);
console.log("Updated Customer:", updatedCustomer);
