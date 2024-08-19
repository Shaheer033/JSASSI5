$(document).ready(function () {
    fetchProducts();
});

function fetchProducts() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            let productsContainer = $('#products');
            data.forEach(product => {
                let productCard = `
                <div class="col-12 col-sm-6 col-md-4 col-lg-3 product-card">
                    <div class="card h-100">
                        <img src="${product.image}" class="card-img-top product-img" alt="${product.title}">
                        <div class="card-body">
                            <h5 class="card-title">${product.title}</h5>
                            <p class="card-text">${product.description.substring(0, 100)}...</p>
                            <p class="card-text"><strong>Price: $${product.price}</strong></p>
                        </div>
                    </div>
                </div>
            `;
                productsContainer.append(productCard);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
}
