// Safely load and parse data from localStorage
function getSavedUsers() {
  try {
    const data = localStorage.getItem("telebirr_users");
    if (data === null) {
      return [];
    }
    const parsed = JSON.parse(data);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Corrupt data found in localStorage. Resetting...", error);
    return [];
  }
}

// Safely save array to localStorage
function saveUsers(usersArray) {
  try {
    localStorage.setItem("telebirr_users", JSON.stringify(usersArray));
  } catch (error) {
    console.error("Failed to save users to localStorage:", error);
  }
}

// DOM Elements
const form = document.getElementById("signup-form");
const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("phone");
const errorArea = document.getElementById("error-area");
const userCount = document.getElementById("user-count");
const userList = document.getElementById("user-list");

// Ethiopian phone regex requirement: /^(?:\+251|0)9\d{8}$/
const ethPhoneRegex = /^(?:\+251|0)9\d{8}$/;

// Render saved entries onto the page
function renderUsers() {
  const users = getSavedUsers();
  userCount.textContent = users.length;
  userList.textContent = "";

  users.forEach((user) => {
    const li = document.createElement("li");
    // Secure text insertion using textContent
    li.textContent = `${user.name} (${user.phone})`;
    userList.appendChild(li);
  });
}

// Form submit event handler
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent page reload

  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  // Reset error area state
  errorArea.textContent = "";
  errorArea.className = "";

  // Validation 1: Name length check
  if (nameValue.length < 2) {
    errorArea.textContent = "Name must be at least 2 characters long.";
    errorArea.className = "error";
    return;
  }

  // Validation 2: Ethiopian phone regex check
  if (!ethPhoneRegex.test(phoneValue)) {
    errorArea.textContent =
      "Please enter a valid Ethiopian phone number (e.g., 0911234567 or +251911234567).";
    errorArea.className = "error";
    return;
  }

  // Save new user entry
  const users = getSavedUsers();
  users.push({ name: nameValue, phone: phoneValue });
  saveUsers(users);

  // Success message via textContent
  errorArea.textContent = "Signup successful! Entry saved.";
  errorArea.className = "success";

  // Reset form and update rendered list
  form.reset();
  renderUsers();
});

// Load entries on page startup
renderUsers();
