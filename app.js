
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
    if (e.target === loginModal) {
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

hamburger.addEventListener("click", (e) => {
    e.stopPropagation();
    hamburger.classList.toggle("active");
    mobileMenu.classList.toggle("show");
});

document.addEventListener("click", (e) => {
    if (!mobileMenu.contains(e.target) && !hamburger.contains(e.target)) {
        mobileMenu.classList.remove("show");
        hamburger.classList.remove("active");
    }
});


const products = document.querySelectorAll(".product-item");

products.forEach(product => {
    product.addEventListener("mouseover", () => {
        product.style.transform = "scale(1.05)";
        product.style.transition = "0.25s";
    });

    product.addEventListener("mouseout", () => {
        product.style.transform = "scale(1)";
    });
});


let cart = [];
const cartCount = document.getElementById("cartCount");
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        const productItem = e.target.closest(".product-item");
        const title = productItem.querySelector("h4").textContent;
        const price = productItem.querySelector("p").textContent;

      
        cart.push({ title, price });
        cartCount.textContent = cart.length;

        alert(`${title} agregado al carrito`);
    });
});


const cartBtn = document.getElementById("cartBtn");

cartBtn.addEventListener("click", () => {
    if (cart.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let message = " Productos en el carrito:\n\n";
        cart.forEach((item, index) => {
            message += `${index + 1}. ${item.title} - ${item.price}\n`;
        });
        alert(message);
    }
});
