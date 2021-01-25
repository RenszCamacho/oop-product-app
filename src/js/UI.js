export class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.classList.add("card", "mb-4");
    element.innerHTML = `
      <div class="card-body d-flex justify-content-between">
        <div>
          <strong>Product Name:</strong> ${product.name} -
          <strong>Product Price:</strong> ${product.price} -
          <strong>Product Year:</strong> ${product.year}
        </div>
        <a href="#" class="btn btn-danger" name="delete">Delete</a>
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

  showMessage() {}
}
