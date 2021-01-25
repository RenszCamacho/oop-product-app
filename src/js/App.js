import { Product } from "./Product.js";
import { UI } from "./UI.js";

//DOM Events.
const productForm = document.getElementById("product-form"),
  productList = document.getElementById("product-list");

productForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const productName = document.getElementById("name").value,
    productPrice = document.getElementById("price").value,
    productYear = document.getElementById("year").value;

  const product = new Product(productName, productPrice, productYear),
    ui = new UI();

  if (name === "" || price === "" || year === "") {
    return ui.showMessage("Complete Fields, Please", "danger");
  }
  ui.addProduct(product);
  ui.resetForm();
  ui.showMessage("Product was added Successfully!", "success");
});

productList.addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
});
