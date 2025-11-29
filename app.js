// Contenedores donde se insertarán los productos
const productsContainer = document.querySelector(".products");

// Función para crear una tarjeta visual en estilo WIREFRAME pero con datos reales
function createWireframeCard(product) {
    const card = document.createElement("div");
    card.classList.add("product-card");

    card.innerHTML = `
        <div class="img-box">
            <img src="${product.image}" alt="${product.title}">
        </div>
        <div class="text-line"></div>
        <div class="text-line short"></div>
        <div class="price-box">$${product.price}</div>
    `;

    return card;
}

// Cargar ropa de hombre
fetch("https://fakestoreapi.com/products/category/men's clothing")
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            productsContainer.appendChild(createWireframeCard(product));
        });
    })
    .catch(err => console.error("Error cargando ropa hombre:", err));

// Cargar ropa de mujer
fetch("https://fakestoreapi.com/products/category/women's clothing")
    .then(res => res.json())
    .then(data => {
        data.forEach(product => {
            productsContainer.appendChild(createWireframeCard(product));
        });
    })
    .catch(err => console.error("Error cargando ropa mujer:", err));
