const products = [
    {
        name: "Цилиндрический аквариум 5.2л",
        category: "aquariums",
        image: "pht1.jpg",
        material: "стекло",
        height: "30",
        width: "30",
        length: "30",
        price: "77 000",
        sku: "10001"
    },
    {
        name: "Цилиндрический аквариум 5.2л",
        category: "accessories",
        image: "pht1.jpg",
        material: "стекло",
        height: "30",
        width: "30",
        length: "30",
        price: "77 000",
        sku: "10001"
    }
];

const productContainer = document.getElementById('products');

function noneDisplayed() {
    const header = document.getElementById('myHeader');
    const footer = document.querySelector('footer');
    const catalog_h1 = document.getElementById('catalog-h1');
    const filter0 = document.getElementById('filters0');
    const section0 = document.getElementById('catalog');

    section0.style.backgroundColor = '#f1f8f9';
    catalog_h1.style.display = 'none';
    filter0.style.display = 'none';
    header.style.display = 'none';
    footer.style.display = 'none';
}

function changedStyles(productElement) {
    const productParamsElement = productElement.querySelector('.product-params-d');
    
    // Скрыть параметры для всех товаров
    document.querySelectorAll('.product-params-d').forEach(param => param.classList.remove('active'));

    // Показать параметры для текущего товара
    if (productParamsElement) {
        productParamsElement.classList.add('active');
    }

    const elementsToStyle = [
        { element: document.getElementById('myBody'), styles: { display: 'flex', justifyContent: 'center' } },
        { element: document.getElementById('catalog'), addClass: 'catalog-st2', removeClass: 'catalo-st' },
        { element: document.getElementById('products'), addClass: 'products2', removeClass: 'products' },
        { element: document.getElementById('product'), addClass: 'product2', removeClass: 'product' },
        { element: document.getElementById('product-img'), addClass: 'product-img' }
    ];

    elementsToStyle.forEach(({ element, styles, addClass, removeClass }) => {
        if (styles) {
            Object.assign(element.style, styles);
        }
        if (addClass) element.classList.add(addClass);
        if (removeClass) element.classList.remove(removeClass);
    });
}

function displayProducts(productsToShow) {
    productContainer.innerHTML = ''; // Убедитесь, что это правильно
    productsToShow.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.name}">
            <div class="product-params">
                <h2>${product.name}</h2>
                <div class="product-params-d">
                    <p>Материал: ${product.material || 'Не указан'}</p>
                    <p>Высота: ${product.height ? product.height + ' см' : 'Не указана'}</p>
                    <p>Высота: ${product.width ? product.width + ' см' : 'Не указана'}</p>
                    <p>Высота: ${product.length ? product.length + ' см' : 'Не указана'}</p>
                    <p>${product.price} сум + карго</p>
                    <p>${product.sku || 'Нет SKU'} <img class="sku-copy" src="copy.svg" alt="copy text"></p>
                </div>
            </div>
        `;

        productElement.addEventListener('click', () => {
            const allProducts = document.querySelectorAll('.product');
            
            // Скрыть все товары, кроме выбранного
            allProducts.forEach(productItem => {
                if (productItem !== productElement) {
                    productItem.style.display = 'none';
                }
            });

            // Устанавливаем id для текущего товара (не обязательно, можно использовать классы)
            productElement.id = 'product';

            // Применяем изменения стилей
            noneDisplayed();
            changedStyles(productElement);

            // Показать параметры для выбранного товара
            const productParamsElement = productElement.querySelector('.product-params-d');
            if (productParamsElement) {
                productParamsElement.classList.add('active');
            }
        });

        productContainer.appendChild(productElement);

        const copyIcon = productElement.querySelector('.sku-copy');
        copyIcon.addEventListener('click', function (event) {
            event.stopPropagation();

            if (product.sku) {
                navigator.clipboard.writeText(product.sku).then(() => {
                    console.log('Text скопирован: ' + product.sku);
                }).catch(err => {
                    console.error('Ошибка копирования текста: ', err);
                });

                copyIcon.src = "check.svg";
                setTimeout(() => {
                    copyIcon.src = "copy.svg";
                }, 3000);
            }
        });
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
        product.name.toLowerCase().includes(searchQuery) || 
        (product.sku && product.sku.toLowerCase().includes(searchQuery))
    );

    displayProducts(filteredProducts);
}


document.getElementById('searchInput').addEventListener('input', searchProducts);
