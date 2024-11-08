const products = [
    {
        name: "Аквариум 100 литров",
        category: "aquariums",
        image: "https://via.placeholder.com/300x200?text=Aquarium1",
        price: "5000 ₽",
        sku: "58976"
    },
    {
        name: "Фильтр для аквариума",
        category: "accessories",
        image: "https://via.placeholder.com/300x200?text=Filter",
        price: "1200 ₽"
    },
    {
        name: "Аквариум 50 литров",
        category: "aquariums",
        image: "https://via.placeholder.com/300x200?text=Aquarium2",
        price: "3500 ₽"
    },
    {
        name: "Светодиодная подсветка",
        category: "accessories",
        image: "https://via.placeholder.com/300x200?text=Light",
        price: "800 ₽"
    },
    {
        name: "Террариум для рыб",
        category: "aquariums",
        image: "https://via.placeholder.com/300x200?text=Aquarium3",
        price: "4500 ₽"
    },
    {
        name: "Корм для рыб",
        category: "accessories",
        image: "https://via.placeholder.com/300x200?text=Food",
        price: "350 ₽"
    },
    {
        name: "Корм для рыб",
        category: "accessories",
        image: "https://via.placeholder.com/300x200?text=Food",
        price: "350 ₽"
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
            <p>${product.price}</p>
            <p>${product.sku}</p>
        `;
        productContainer.appendChild(productElement);
    });
}

function filterProducts() {
    const category = document.getElementById('category').value;
    const filteredProducts = category === 'all' ? products : products.filter(product => product.category === category);
    displayProducts(filteredProducts);
}

window.onload = () => {
    displayProducts(products);
};

function searchProducts() {
    const searchQuery = document.getElementById('searchInput').value.toLowerCase();

    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery)
    );

    displayProducts(filteredProducts);
}

document.getElementById('searchInput').addEventListener('input', searchProducts);

