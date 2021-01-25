export class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list"),
      element = document.createElement("div");

    element.classList.add("card", "mb-4");
    element.innerHTML = `
      <div class="card-body d-flex justify-content-between">
        <div>
          <strong>Product Name:</strong> ${product.name} -
          <strong>Product Price:</strong> ${product.price} -
          <strong>Product Year:</strong> ${product.year}
        </div>
        <button class="btn btn-danger" name="delete" type="button" aria-label="button delete">
          Delete
        </button>
      </div>
    `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    element.name === "delete"
      ? element.parentElement.parentElement.remove()
      : null;
  }

  showMessage(message, css) {
    const div = document.createElement("div");
    div.className = `alert alert-${css} mt-4`;
    div.appendChild(document.createTextNode(message));
    // SHOW IN THE DOM
    const container = document.getElementById("container"),
      app = document.getElementById("App");
    container.insertBefore(div, app);
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
