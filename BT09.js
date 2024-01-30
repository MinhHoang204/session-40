const productForm = document.getElementById('productForm');
const productNameInput = document.getElementById('productName');
const productPriceInput = document.getElementById('productPrice');
const submitBtn = document.getElementById('submitBtn');
const clearBtn = document.getElementById('clearBtn');
const productList = document.getElementById('productList');

let products = JSON.parse(localStorage.getItem('products')) || [];

function renderProducts() {
      productList.innerHTML = '';
      products.forEach(function(product, index) {
        const li = document.createElement('li');
        li.textContent = `${product.name}: $${product.price}`;
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.addEventListener('click', function() {
          // Hiển thị thông tin sản phẩm lên form khi người dùng click vào nút sửa
          productNameInput.value = product.name;
          productPriceInput.value = product.price;
          submitBtn.textContent = 'Update Product';
          submitBtn.removeEventListener('click', addProduct);
          submitBtn.addEventListener('click', function(event) {
            event.preventDefault();
            updateProduct(index);
          });
        });
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', function() {
          products.splice(index, 1);
          saveProducts();
          renderProducts();
        });
        li.appendChild(editButton);
        li.appendChild(deleteButton);
        productList.appendChild(li);
      });
    }

function addProduct(event) {
      event.preventDefault();
      const name = productNameInput.value;
      const price = productPriceInput.value;
      products.push({ name, price });
      saveProducts();
      productNameInput.value = '';
      productPriceInput.value = '';
      renderProducts();
}

function updateProduct(index) {
      products[index].name = productNameInput.value;
      products[index].price = productPriceInput.value;
      saveProducts();
      productNameInput.value = '';
      productPriceInput.value = '';
      submitBtn.textContent = 'Add Product';
      submitBtn.removeEventListener('click', updateProduct);
      submitBtn.addEventListener('click', addProduct);
      renderProducts();
}
 
function saveProducts() {
      localStorage.setItem('products', JSON.stringify(products));
}

productForm.addEventListener('submit', addProduct);

clearBtn.addEventListener('click', function(event) {
      event.preventDefault();
      productNameInput.value = '';
      productPriceInput.value = '';
});

window.onload = function() {
      renderProducts();
};