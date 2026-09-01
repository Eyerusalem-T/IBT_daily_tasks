const state = {
  recipes: [],
  cookbook: [],
  search: "",
};

const recipesEl = document.querySelector("#recipes");
const cookbookEl = document.querySelector("#cookbook");
const searchEl = document.querySelector("#search");

async function loadRecipes() {
  recipesEl.textContent = "Loading recipes...";
  try {
    const res = await fetch("data/recipes.json");
    if (!res.ok) throw new Error("HTTP error: " + res.status);
    state.recipes = await res.json();
    render();
  } catch (err) {
    recipesEl.textContent = "Could not load recipes.";
  }
}

function save() {
  localStorage.setItem("habesha_cookbook", JSON.stringify(state.cookbook));
}

function load() {
  const data = localStorage.getItem("habesha_cookbook");
  if (data) state.cookbook = JSON.parse(data);
}

function renderCookbook() {
  if (state.cookbook.length === 0) {
    cookbookEl.innerHTML =
      "<h2>My Cookbook</h2><p style='color: var(--muted)'>No saved recipes yet.</p>";
    return;
  }

  const totalETB = state.cookbook.reduce((sum, r) => sum + (r.price || 0), 0);

  const itemsHTML = state.cookbook
    .map(
      (item) => `
    <div class="saved-item" data-id="${item.id}">
      <div>
        <strong>${item.name}</strong>
        <div style="font-size: 0.85rem; color: var(--muted);">${item.price ? item.price + " ETB" : ""}</div>
      </div>
      <button class="rm">Remove</button>
    </div>
  `,
    )
    .join("");

  cookbookEl.innerHTML = `
    <h2>My Cookbook (${state.cookbook.length})</h2>
    ${itemsHTML}
    <div style="margin-top: 1rem; font-weight: 700; color: var(--accent);">Est. Total: ${totalETB} ETB</div>
  `;
}

function render() {
  const term = state.search.toLowerCase();

  // Exclude dishes that are currently saved in the cookbook
  const availableRecipes = state.recipes.filter(
    (r) => !state.cookbook.some((savedItem) => savedItem.id === r.id),
  );

  const shown = availableRecipes.filter(
    (r) =>
      r.name.toLowerCase().includes(term) ||
      r.category.toLowerCase().includes(term),
  );

  if (shown.length === 0) {
    recipesEl.innerHTML =
      "<p style='color: var(--muted)'>No available recipes match your search.</p>";
  } else {
    recipesEl.innerHTML = shown
      .map(
        (r) => `
      <article class="recipe-card" data-id="${r.id}">
        <div>
          <h3>${r.name}</h3>
          <span class="badge">${r.category}</span>
          <p class="meta-info">⏱ Prep: ${r.prepTime}</p>
          <p class="price">${r.price} ETB</p>
        </div>
        <button class="save-btn">Save Recipe</button>
      </article>
    `,
      )
      .join("");
  }

  renderCookbook();
}

searchEl.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

recipesEl.addEventListener("click", (e) => {
  if (!e.target.matches(".save-btn")) return;
  const id = Number(e.target.closest(".recipe-card").dataset.id);
  const recipe = state.recipes.find((r) => r.id === id);

  if (recipe && !state.cookbook.some((item) => item.id === id)) {
    state.cookbook.push(recipe);
    save();
    render();
  }
});

cookbookEl.addEventListener("click", (e) => {
  if (!e.target.matches(".rm")) return;
  const id = Number(e.target.closest(".saved-item").dataset.id);
  state.cookbook = state.cookbook.filter((item) => item.id !== id);

  save();
  render();
});

async function init() {
  load();
  await loadRecipes();
}

init();
