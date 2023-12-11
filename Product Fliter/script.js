import productsData from './js.json' assert {type: "json"};

function displayProducts(products = []) {
  const container = document.querySelector('.container');
  container.innerHTML = '';

  products.forEach(product => {
    const card = `
      <div class="store-product">
        <div class="imgBox">
          <img src="${product.thumbnail}" alt="${product.title}">
        </div>
        <div class="product-details">
          <h2>${product.title}</h2>
          <p>${product.description}</p>
          <p><span>Cost: ${product.price} $</span></p>
          <a href="#">Add to cart</a>
        </div>
      </div>`;
    container.innerHTML += card;
  });
}

function filterProducts(searchQuery, category) {
  let filteredProducts = productsData;

  if (searchQuery) {
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) || 
      product.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  if (category && category !== 'all') {
    filteredProducts = filteredProducts.filter(product => product.category === category);
  }

  return filteredProducts;
}

function applyFilters() {
  const searchInput = document.getElementById('search');
  const searchQuery = searchInput.value.trim();

  const filterButtons = document.querySelectorAll('.btn');
  let selectedCategory = 'all';

  filterButtons.forEach(button => {
    if (button.classList.contains('active')) {
      selectedCategory = button.getAttribute('data-filter');
    }
  });

  const filteredProducts = filterProducts(searchQuery, selectedCategory);
  displayProducts(filteredProducts);
}

const searchBtn = document.querySelector('.sb-btn');
searchBtn.addEventListener('click', applyFilters);


const filterButtons = document.querySelectorAll('.btn');
filterButtons.forEach(button => {
  button.addEventListener('click', function(event) {
    event.preventDefault();
    filterButtons.forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    applyFilters();
  });
});

// Initial display of all products
displayProducts(productsData);
