
function saveUserData(username, password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
  }
  
  function getUserData() {
    return {
      username: localStorage.getItem('username'),
      password: localStorage.getItem('password')
    };
  }
  
  function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }
  
  function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
  }
  
  if (document.getElementById('register-form')) {
    const form = document.getElementById('register-form');
    
    form.addEventListener('submit', (e) => {
      e.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      saveUserData(username, password);
  
      window.location.href = 'store.html';
    });
  }
  
  if (document.getElementById('products')) {
    const products = [
      { id: 1, name: 'Product 1', price: 100 },
      { id: 2, name: 'Product 2', price: 200 },
      { id: 3, name: 'Product 3', price: 300 }
    ];
  
    const productContainer = document.getElementById('products');
  
    products.forEach((product) => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('product');
      productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
      `;
      productContainer.appendChild(productDiv);
    });
  
    document.querySelectorAll('.add-to-cart').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.id;
        const cart = getCart();
        cart.push(productId);
        saveCart(cart);
      });
    });
  
    document.getElementById('go-to-cart').addEventListener('click', () => {
      window.location.href = 'cart.html';
    });
  }
  
  if (document.getElementById('cart-items')) {
    const cart = getCart();
    const cartItemsContainer = document.getElementById('cart-items');
  
    if (cart.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty</p>';
    } else {
      cart.forEach((productId) => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
          <p>Product ${productId}</p>
          <button class="remove-from-cart" data-id="${productId}">Remove</button>
        `;
        cartItemsContainer.appendChild(productDiv);
      });
    }
  
    document.querySelectorAll('.remove-from-cart').forEach((button) => {
      button.addEventListener('click', () => {
        const productId = button.dataset.id;
        const updatedCart = cart.filter((id) => id !== productId);
        saveCart(updatedCart);
        window.location.reload();
      });
    });
  
    document.getElementById('remove-all').addEventListener('click', () => {
      saveCart([]);
      window.location.reload();
    });
  
    document.getElementById('checkout').addEventListener('click', () => {
      alert('You have successfully checked out!');
      saveCart([]);
      window.location.reload();
    });
  }
  