
const loginBtn = document.getElementById("loginBtn");
const loginModal = document.getElementById("loginModal");
const closeModal = document.querySelector(".modal .close");
const loginForm = document.getElementById("loginForm");


loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});


closeModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});


window.addEventListener("click", (e) => {
    if(e.target === loginModal){
        loginModal.style.display = "none";
    }
});


loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value;
    alert(`Bienvenido, ${username}!`);
    window.location.href = "index.html";
});


const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");

hamburger.addEventListener("click", () => {
    if(mobileMenu.style.display === "flex"){
        mobileMenu.style.display = "none";
    } else {
        mobileMenu.style.display = "flex";
    }
});
const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-item");

searchInput.addEventListener("input", () => {
    const text = searchInput.value.toLowerCase();

    products.forEach(product => {
        const name = product.querySelector("h4").textContent.toLowerCase();

        if (name.includes(text)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});


// ==========================
// ANIMACIÓN EN PRODUCTOS
// ==========================
products.forEach(product => {
    product.addEventListener("mouseover", () => {
        product.style.transform = "scale(1.05)";
        product.style.transition = "0.2s";
    });

    product.addEventListener("mouseout", () => {
        product.style.transform = "scale(1)";
    });
});