class Product {
  constructor(name, price, year) {
    this.name = name;
    this.price = price;
    this.year = year;
  }
}

class UI {
  addProduct() {}

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
  console.log(product);
});
