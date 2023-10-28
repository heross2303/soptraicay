const loginButton = document.getElementById('loginButton');
const logoutButton = document.getElementById('logoutButton');
const cartButton = document.getElementById('cartButton');

loginButton.addEventListener('click', () => {
    // Code for login functionality
    loginButton.style.display = 'none';
    logoutButton.style.display = 'inline';
});

logoutButton.addEventListener('click', () => {
    // Code for logout functionality
    alert('Đăng xuất thành công!');
    logoutButton.style.display = 'none';
    loginButton.style.display = 'inline';
});

cartButton.addEventListener('click', () => {
    // Code for cart functionality
    alert('Chuyển đến trang giỏ hàng.');
    // Redirect to cart page or handle cart logic here
});
//banner


var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 2000); // Thay đổi hình ảnh mỗi 2 giây
}
showSlides();

$('.list-news').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 3000,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                vertical: false,
                verticalSwiping: true,
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,

            }
        },

    ]

});

//xu ly mat khau
function registerUser(event) {
    event.preventDefault(); // Ngăn chặn form gửi dữ liệu đi

    const fullname = document.getElementById("fullname").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Mật khẩu và xác nhận mật khẩu không khớp.");
    } else {
        // Xử lý đăng ký tại đây (có thể gửi dữ liệu đăng ký đến máy chủ hoặc lưu vào cơ sở dữ liệu)
        // Sau khi đăng ký thành công, hiển thị thông báo và chuyển hướng về trang đăng nhập

        const successMessage = document.getElementById("success-message");
        successMessage.textContent = `Đăng ký thành công! Chuyển hướng đến trang đăng nhập...`;

        setTimeout(() => {
            // Chuyển hướng về trang đăng nhập (ở đây là ví dụ là index.html)
            window.location.href = "login.html";
        }, 1000); // Chuyển hướng sau 3 giây (3000 milliseconds)
    }
}

//dang nhap

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Kiểm tra thông tin đăng nhập (ví dụ: tài khoản và mật khẩu là "admin")
    if (username === "admin" && password === "1") {
        // Đăng nhập thành công, chuyển hướng đến trang index.html
        window.location.href = "index.html";

        // Lưu trạng thái đăng nhập để sử dụng trong trang index.html
        localStorage.setItem("isLoggedIn", "true");
    } else {
        // Hiển thị thông báo lỗi (ví dụ: sai tài khoản hoặc mật khẩu)
        alert("Tài khoản hoặc mật khẩu không chính xác. Vui lòng thử lại.");
    }
}

// Kiểm tra trạng thái đăng nhập khi trang được tải
window.onload = function () {
    var isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        // Nếu đăng nhập thành công, ẩn nút "Đăng Nhập" và hiển thị nút "Đăng Xuất"
        document.getElementById("loginButton").style.display = "none";
        document.getElementById("logoutButton").style.display = "inline-block";
    }
};

// Xử lý sự kiện khi người dùng ấn vào nút "Đăng Xuất"
document.getElementById("logoutButton").addEventListener("click", function () {
    // Xóa trạng thái đăng nhập từ localStorage
    localStorage.removeItem("isLoggedIn");
    // Chuyển hướng về trang index.html
    window.location.href = "index.html";
});



// Mảng chứa các sản phẩm trong giỏ hàng
var cartItems = [];

// Hàm hiển thị danh sách sản phẩm trong giỏ hàng
function displayCartItems() {
    var cartItemsDiv = document.getElementById("cart-items");
    cartItemsDiv.innerHTML = "";

    var totalAmount = 0;

    // Duyệt qua mỗi sản phẩm trong giỏ hàng và hiển thị
    cartItems.forEach(function(item) {
        var itemDiv = document.createElement("div");
        itemDiv.className = "cart-item";
        itemDiv.textContent = item.name + " - $" + item.price.toFixed(2);
        cartItemsDiv.appendChild(itemDiv);

        totalAmount += item.price;
    });

    // Hiển thị tổng cộng
    var totalAmountDiv = document.getElementById("total-amount");
    totalAmountDiv.textContent = totalAmount.toFixed(2);
}

// Thêm sản phẩm vào giỏ hàng
function addToCart(name, price) {
    cartItems.push({ name: name, price: price });
    displayCartItems();
}

// Một số sản phẩm mẫu được thêm vào giỏ hàng khi trang được tải
addToCart("Sản Phẩm 1", 29.99);
addToCart("Sản Phẩm 2", 19.99);
addToCart("Sản Phẩm 3", 39.99);


