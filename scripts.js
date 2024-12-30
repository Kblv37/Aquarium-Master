const products = [
    {
        name: "Цилиндрический аквариум 5.2л, д-15см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 30см <br>Диаметр: 15см <br>Материал: стекло",
        price: "77 000",
        sku: "10001"
    },
    {
        name: "Цилиндрический аквариум 7л, д-15см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 40см <br>Диаметр: 15см <br>Материал: стекло",
        price: "87 000",
        sku: "10002"
    },
    {
        name: "Цилиндрический аквариум 8.8л, д-15см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 50см <br>Диаметр: 15см <br>Материал: стекло",
        price: "115 000",
        sku: "10003"
    },
    {
        name: "Цилиндрический аквариум 6.2л,д-20см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 20см <br>Диаметр: 20см <br>Материал: стекло",
        price: "85 000",
        sku: "10004"
    },
    {
        name: "Цилиндрический аквариум 9.4л, д-20см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 20см <br>Диаметр: 20см <br>Материал: стекло",
        price: "115 000",
        sku: "10005"
    },
    {
        name: "Цилиндрический аквариум 12.5л, д-20см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 40см <br>Диаметр: 20см <br>Материал: стекло",
        price: "136 000",
        sku: "10006"
    },
    {
        name: "Цилиндрический аквариум 15.7л, д-20см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 50см <br>Диаметр: 20см <br>Материал: стекло",
        price: "153 000",
        sku: "10007"
    },
    {
        name: "Цилиндрический аквариум 12.7л, д-25см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 25см <br>Диаметр: 25см <br>Материал: стекло",
        price: "146 000",
        sku: "10011"
    },
    {
        name: "Цилиндрический аквариум 14.7л, д-25см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 30см <br>Диаметр: 25см <br>Материал: стекло",
        price: "182 000",
        sku: "10012"
    },
    {
        name: "Цилиндрический аквариум 19.6л, д-25см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 40см <br>Диаметр: 25см <br>Материал: стекло",
        price: "251 000",
        sku: "10013"
    },
    {
        name: "Цилиндрический аквариум 24.5л, д-25см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 50см <br>Диаметр: 25см <br>Материал: стекло",
        price: "325 000",
        sku: "10014"
    },
    {
        name: "Цилиндрический аквариум 21л, д-30см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 30см <br>Диаметр: 30см <br>Материал: стекло",
        price: "325 000",
        sku: "10015"
    },
    {
        name: "Цилиндрический аквариум 28л, д-30см",
        category: "aquariums",
        image: "pht1.jpg",
        image2: "",
        image3: "",
        image4: "",
        included: "",
        xarak: "Высота: 40см <br>Диаметр: 30см <br>Материал: стекло",
        price: "415 000",
        sku: "10016"
    },
    {
        name: "Лампа для аквариума",
        category: "accessories",
        image: "40001.png",
        image2: "40001-2.png",
        image3: "",
        image4: "",
        included: "",
        xarak: "Мощность: 7 Вт <br>Размер: 12х9х8 см <br>Цвета лампы: красные, синие, зелёные и белые <br>Длина шнура: 130см",
        price: "55 000",
        sku: "40001"
    },
    {
        name: 'Лампа для аквариума',
        category: 'accessories',
        image: '40002.png',
        image2: '40002_2.png',
        image3: '40002_3.png',
        image4: '',
        included: '',
        xarak: 'Мощность: 7 Вт. <br>Цвета лампы: белый, тёплый; белый, синий; белый, зелёный. <br>Цветовая темп: 8 000 - 10 000 К.',
        price: '36 000',
        sku: '40002',
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
    
    document.querySelectorAll('.product-params-d').forEach(param => param.classList.remove('active'));

    if (productParamsElement) {
        productParamsElement.classList.add('active');
    }

    const productParamsElement2 = productElement.querySelector('.product-params-d2');
    
    document.querySelectorAll('.product-params-d2').forEach(param => param.classList.remove('active'));

    if (productParamsElement2) {
        productParamsElement2.classList.add('active');
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
    productContainer.innerHTML = '';
    productsToShow.forEach((product, index) => {
        const productElement = document.createElement('div');
        productElement.classList.add('product');
        productElement.innerHTML = `
            <img class="product-img" src="${product.image}" alt="${product.name}">
            
            <div class="product-params">
                <h2>${product.name}</h2>
                <div class="product-params-d">
                    <p>В комплекте: ${product.included || ' '}${product.name}, </p>
                    <p>${product.xarak || ' '} </p>
                    <p>Цена:  ${product.price} сум + карго</p>
                    <p>SKU:  ${product.sku || 'Нет SKU'} <img class="sku-copy" src="copy.svg" alt="copy text"></p>
                </div>
            </div>

            <div class="product-params-d2">
                <img class="product-img2" src="${product.image2 || ""}" >
                <img class="product-img2" src="${product.image3 || ""}" >
                <img class="product-img2" src="${product.image4 || ""}" >   
            </div>
        `;

        productElement.addEventListener('click', () => {
            const allProducts = document.querySelectorAll('.product');
            
            allProducts.forEach(productItem => {
                if (productItem !== productElement) {
                    productItem.style.display = 'none';
                }
            });

            productElement.id = 'product';

            noneDisplayed();
            changedStyles(productElement);

            const productParamsElement = productElement.querySelector('.product-params-d');
            if (productParamsElement) {
                productParamsElement.classList.add('active');
            }
            
            const productParamsElement2 = productElement.querySelector('.product-params-d2');
            if (productParamsElement2) {
                productParamsElement2.classList.add('active');
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
