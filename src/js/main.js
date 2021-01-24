class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
    <div className="card text-center mb-4">
      <div className="card-body">
        <strong>Product Name:</strong>${product.name}
        <strong>Product Price:</strong>${product.price}
        <strong>Product Year:</strong>${product.year}
      </div>
    </div>
    `;
    productList.appendChild(element);
  }

  deleteProduct() {}

  showMessage() {}
}

//DOM Events.
const productForm = document.getElementById("product-form");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const productName = document.getElementById("name").value;
  const productPrice = document.getElementById("price").value;
  const productYear = document.getElementById("year").value;

  const product = new Product(productName, productPrice, productYear);
  const ui = new UI();
  ui.addProduct(product);
});
