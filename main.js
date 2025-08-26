var mainImage = document.getElementById("mainImage");
var thumbnails = document.querySelectorAll(".thumb");
thumbnails.forEach(function (Img) {
    Img.addEventListener("click", function () {
        mainImage.src = Img.src;
        thumbnails.forEach(function (img) { return img.classList.remove("active"); });
        Img.classList.add("active");
    });
});
// ✅ Quantity controls
var quantity = 10;
var quantitySpan = document.getElementById("quantity");
var increaseBtn = document.getElementById("increase");
var decreaseBtn = document.getElementById("decrease");
increaseBtn.addEventListener("click", function () {
    quantity++;
    quantitySpan.textContent = quantity.toString();
});
decreaseBtn.addEventListener("click", function () {
    if (quantity > 1) {
        quantity--;
        quantitySpan.textContent = quantity.toString();
    }
});
// ✅ Cart logic
var AddToCart = document.getElementById("AddToCart");
var cartItemsContainer = document.getElementById("cartItems");
var cartCount = document.getElementById("cartCount");
var cartDropdown = document.getElementById("cartDropdown");
var cartIcon = document.getElementById("cartIcon");
var cartCountNumber = 0;
AddToCart.addEventListener("click", function () {
    cartCountNumber += quantity;
    cartCount.textContent = cartCountNumber.toString();
    var price = 125;
    var total = price * cartCountNumber;
    cartItemsContainer.innerHTML = "\n    <div class=\"cart-item\">\n      <span>Fall Limited Edition Sneakers x ".concat(cartCountNumber, "</span>\n      <span>$").concat(total, ".00</span>\n      <button id=\"removeItem\">\uD83D\uDDD1</button>\n    </div>\n  ");
    var removeBtn = document.getElementById("removeItem");
    removeBtn.addEventListener("click", function () {
        cartItemsContainer.innerHTML = "<p>Your cart is empty</p>";
        cartCountNumber = 0;
        cartCount.textContent = "0";
    });
});
cartIcon.addEventListener("click", function () {
    cartDropdown.style.display =
        cartDropdown.style.display === "block" ? "none" : "block";
});
var sidebar = document.getElementById("sidebar");
var hamburger = document.getElementById("hamburger");
var closeSidebar = document.getElementById("closeSidebar");
hamburger.addEventListener("click", function () {
    sidebar.style.display = "flex";
});
closeSidebar.addEventListener("click", function () {
    sidebar.style.display = "none";
});
