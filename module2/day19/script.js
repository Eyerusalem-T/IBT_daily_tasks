// Task 1: Select h1, change text, and toggle class
const heading = document.querySelector("#main-heading");
heading.textContent = "Welcome to DOM Manipulation!";
heading.classList.toggle("active-title");



// Task 2: Create and append city list items
const cities = ["Addis Ababa", "Hawassa", "Gonder"];
const cityList = document.querySelector("#city-list");

cities.forEach((city) => {
    const li = document.createElement("li");
    li.textContent = city;
    cityList.appendChild(li);
});



// Task 3: Handle button click and event bubbling
const button = document.querySelector("#my-btn");
const wrapper = document.querySelector("#wrapper");

button.addEventListener("click", (event) => {
    console.log("Button clicked:", event.target);
});

wrapper.addEventListener("click", (event) => {
    console.log("Bubbled to div from:", event.target);
});



// Task 4: Delete items using event delegation
const itemsList = document.querySelector("#items-list");

itemsList.addEventListener("click", (event) => {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
});



// Task 5: Handle form submit and append new item
const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newLi = document.createElement("li");
    newLi.textContent = input.value;
    todoList.appendChild(newLi);

    input.value = "";
});
