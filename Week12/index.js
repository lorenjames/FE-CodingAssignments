// JSON Server base url
const API_URL = "http://localhost:3000/items";

// references to form inputs and container elements
const itemForm = document.getElementById("itemForm");
const nameInput = document.getElementById("name");
const commentsInput = document.getElementById("comments");
const itemsContainer = document.getElementById("itemsContainer");


// get all items
async function getItems() {
    const res = await fetch(API_URL);
    return res.json();
}


// create new item
async function createItem(item) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(item),
    });
    return res.json();
}

// delete item by ID
async function deleteItem(id) {
    await fetch(`${API_URL}/${id}`, { method: "DELETE" });
}

// display items on the page
async function renderItems() {
    const items = await getItems();

    // if no items, show message
    if (items.length === 0) {
        itemsContainer.innerHTML =
            '<p class="text-muted">No items yet. Add one above.</p>';
        return;
    }

    // build rows of items
    const rows = items
        .map(
            (item) => `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.comments ?? ""}</td>
        <td class="text-end">
          <button class="btn btn-sm btn-outline-danger" data-delete-id="${item.id}">
            Delete
          </button>
        </td>
      </tr>
    `
        )
        .join("");

    // add table to page
    itemsContainer.innerHTML = `
    <table class="table table-striped">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Comments / Quantity</th>
          <th class="text-end">Actions</th>
        </tr>
      </thead>
      <tbody>${rows}</tbody>
    </table>
  `;
}
// Create a new item using create button
itemForm.addEventListener("submit", async (e) => {

    // create new item from form fields
    const newItem = {
        name: nameInput.value.trim(),
        comments: commentsInput.value.trim(),
    };
    // send via API to JSON db
    await createItem(newItem);

    //clear form and refresh the list
    itemForm.reset();
    renderItems();
});

// Delete items by ID
itemsContainer.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-delete-id]");
    if (!btn) return;

    const id = btn.getAttribute("data-delete-id");

    //Delete the item and refresh the list
    await deleteItem(id);
    renderItems();
});

// Load items when page first opens
document.addEventListener("DOMContentLoaded", renderItems);
