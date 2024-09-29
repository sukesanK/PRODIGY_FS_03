const products = [
  {
    id: 1,
    name: "Product 1",
    price: 20,
    image: "https://via.placeholder.com/150",
    description: "Description of Product 1",
  },
  {
    id: 2,
    name: "Product 2",
    price: 25,
    image: "https://via.placeholder.com/150",
    description: "Description of Product 2",
  },
  {
    id: 3,
    name: "Product 3",
    price: 15,
    image: "https://via.placeholder.com/150",
    description: "Description of Product 3",
  },
  {
    id: 4,
    name: "Product 4",
    price: 30,
    image: "https://via.placeholder.com/150",
    description: "Description of Product 4",
  },
];

// Cart storage
let cart = [];

// Display products
const productList = document.getElementById("product-list");
products.forEach((product) => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button class="add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
    `;
  productList.appendChild(div);
});

// Add to cart
function addToCart(id) {
  const product = products.find((p) => p.id === id);
  const existingProduct = cart.find((p) => p.id === id);

  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  updateCart();
}

// Update cart display
function updateCart() {
  const cartCount = document.getElementById("cart-count");
  cartCount.textContent = cart.length;

  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
    cartItems.appendChild(li);
    total += item.price * item.quantity;
  });

  document.getElementById("total-price").textContent = total.toFixed(2);
}

// Open cart modal
document.getElementById("cart-btn").onclick = () => {
  document.getElementById("cart-modal").style.display = "block";
};

// Close cart modal
document.getElementsByClassName("close")[0].onclick = () => {
  document.getElementById("cart-modal").style.display = "none";
};

// Close modal when clicking outside of it
window.onclick = (event) => {
  if (event.target == document.getElementById("cart-modal")) {
    document.getElementById("cart-modal").style.display = "none";
  }
};

// Checkout button (for demonstration)
document.getElementById("checkout-btn").onclick = () => {
  alert("Checkout functionality not implemented yet.");
};
