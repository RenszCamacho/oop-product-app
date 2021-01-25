import { Product } from "./Product.js";
import { UI } from "./UI.js";

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
