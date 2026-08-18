// Document element references cached ONCE on initial load
const itemForm = document.getElementById("item-form");
const itemNameInput = document.getElementById("item-name");
const itemPriceInput = document.getElementById("item-price");
const shoppingList = document.getElementById("shopping-list");
const totalPriceDisplay = document.getElementById("total-price");

// Application State
let runningTotal = 0;

/**
 * Updates the ETB total DOM display
 */
function updateRunningTotal(amount) {
  runningTotal += amount;
  // Ensure precise two decimal point formatting for currency
  totalPriceDisplay.textContent = runningTotal.toFixed(2);
}

/**
 * Form Submit Handler: Adds a new item to the shopping list
 */
function handleAddItem(event) {
  // Prevent page refresh on form submission
  event.preventDefault();

  const name = itemNameInput.value.trim();
  const priceValue = itemPriceInput.value.trim();

  // Validate inputs
  if (!name || !priceValue || isNaN(priceValue) || Number(priceValue) <= 0) {
    alert("Please enter a valid item name and positive price in ETB.");
    return;
  }

  const price = parseFloat(priceValue);

  // Create list elements using document.createElement and append
  const li = document.createElement("li");
  li.className = "item-row";
  // Store the numerical price on the element's dataset for clean retrieval on deletion
  li.dataset.price = price;

  const infoDiv = document.createElement("div");
  infoDiv.className = "item-info";

  const nameSpan = document.createElement("span");
  nameSpan.className = "item-name";
  nameSpan.textContent = name;

  const priceSpan = document.createElement("span");
  priceSpan.className = "item-price";
  priceSpan.textContent = `${price.toFixed(2)} ETB`;

  infoDiv.append(nameSpan, priceSpan);

  const deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-delete";
  deleteBtn.textContent = "Delete";
  deleteBtn.type = "button";

  li.append(infoDiv, deleteBtn);

  // Append row to container
  shoppingList.append(li);

  // Update running price total
  updateRunningTotal(price);

  // Reset form inputs
  itemForm.reset();
  itemNameInput.focus();
}

/**
 * Delegated Click Handler on the list container for toggling bought state & deletion
 */
function handleListClick(event) {
  const target = event.target;

  // Find the closest parent item row
  const row = target.closest(".item-row");
  if (!row) return;

  // Handle Delete Action
  if (target.classList.contains("btn-delete")) {
    const itemPrice = parseFloat(row.dataset.price);

    // Subtract item price from running total
    updateRunningTotal(-itemPrice);

    // Remove row element from DOM
    row.remove();
    return;
  }

  // Handle Toggle Bought State Action (toggles CSS class on row)
  row.classList.toggle("bought");
}

// Event Listeners
itemForm.addEventListener("submit", handleAddItem);
shoppingList.addEventListener("click", handleListClick);
