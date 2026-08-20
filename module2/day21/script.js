// ==========================================
// Task 1: Theme Toggle with localStorage
// ==========================================
const themeToggleBtn = document.getElementById("themeToggleBtn");

// Restore saved theme on page load
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
  document.body.classList.add("dark-mode");
  themeToggleBtn.textContent = "Switch to Light Theme";
}

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggleBtn.textContent = "Switch to Light Theme";
  } else {
    localStorage.setItem("theme", "light");
    themeToggleBtn.textContent = "Switch to Dark Theme";
  }
});

// ==========================================
// Task 2: localStorage save() and load() Helpers
// ==========================================
function save(key, data) {
  try {
    const jsonString = JSON.stringify(data);
    localStorage.setItem(key, jsonString);
  } catch (error) {
    console.error("Error saving data:", error);
  }
}

function load(key) {
  try {
    const jsonString = localStorage.getItem(key);
    if (jsonString === null) {
      return [];
    }
    return JSON.parse(jsonString);
  } catch (error) {
    console.error("Error reading or parsing data:", error);
    return []; // Return fallback array on corrupted data
  }
}

// ==========================================
// Tasks 3, 4, 5 & 6: Form Validation & Storage
// ==========================================
const signupForm = document.getElementById("signupForm");
const nameInput = document.getElementById("nameInput");
const phoneInput = document.getElementById("phoneInput");
const messageArea = document.getElementById("messageArea");
const countDisplay = document.getElementById("countDisplay");

// Ethiopian Phone Number Regular Expression
// Matches formats like: 0911234567, 0711234567, +251911234567, or 251911234567
const ethPhoneRegex = /^(?:\+251|251|0)?[79]\d{8}$/;

// Function to refresh the signups count display on page load and submit
function updateSignupCount() {
  const currentUsers = load("users");
  countDisplay.textContent = `Total signups: ${currentUsers.length}`;
}

// Display total count when page loads
updateSignupCount();

signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // Task 4: Prevent default submission

  const nameValue = nameInput.value.trim();
  const phoneValue = phoneInput.value.trim();

  // Task 4 & 5: Validation checks
  if (nameValue.length < 2) {
    messageArea.style.color = "red";
    messageArea.textContent = "Name must be at least 2 characters long.";
    return;
  }

  if (!ethPhoneRegex.test(phoneValue)) {
    messageArea.style.color = "red";
    messageArea.textContent =
      "Please enter a valid Ethiopian phone number (e.g., 0911234567).";
    return;
  }

  // Task 6: On Success
  const users = load("users");
  users.push({ name: nameValue, phone: phoneValue });
  save("users", users);

  messageArea.style.color = "green";
  messageArea.textContent = "Signup successful!";

  signupForm.reset(); // Clear form fields
  updateSignupCount(); // Update the count on screen
});
