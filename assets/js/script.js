let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let CloseCart = document.querySelector("#close-cart");

cartIcon.onclick = () => {
    cart.classList.add("active");
};