const products = [
    {
        name: "pht1",
        image: "pht1.jpg",
    }
];

const productContainer = document.getElementById('products');

function displayProducts(productsToShow) {
    productContainer.innerHTML = '';
    productsToShow.forEach(product => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
        `;
        productContainer.appendChild(productElement);
    });
}

window.onload = () => {
    displayProducts(products);
};