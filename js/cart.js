document.addEventListener('DOMContentLoaded', function () {
    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    var cartTableBody = document.getElementById('cart-table-body');
    var totalContainer = document.getElementById('total');

    function updateCart() {
        cartTableBody.innerHTML = ''; // Xóa nội dung hiện tại của bảng
        var total = 0; // Biến để tính tổng giá của giỏ hàng

        cartItems.forEach(function (item, index) {
            // Trong hàm updateCart(), sau khi tạo row và các ô thông tin sản phẩm:
            var row = document.createElement('tr');
            row.innerHTML = `
    <td><img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;"></td>
    <td>${item.name}</td>
    <td>$${item.price.toFixed(2)}</td>
    <td><button class="decrease-btn">-</button> ${item.quantity} <button class="increase-btn">+</button></td>
    <td>$${(item.price * item.quantity).toFixed(2)}</td>
    <td><button class="remove-btn">Xóa</button></td>
`;

            // Thêm sự kiện giảm số lượng
            var decreaseButton = row.querySelector('.decrease-btn');
            decreaseButton.addEventListener('click', function () {
                if (item.quantity > 1) {
                    item.quantity--;
                } else {
                    var confirmed = confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?');
                    if (confirmed) {
                        cartItems.splice(index, 1);
                    }
                }
                updateCart();
                saveCartToLocalStorage();
            });

            // Thêm sự kiện tăng số lượng
            var increaseButton = row.querySelector('.increase-btn');
            increaseButton.addEventListener('click', function () {
                item.quantity++;
                updateCart();
                saveCartToLocalStorage();
            });

            // Thêm sự kiện xóa sản phẩm
            var removeButton = row.querySelector('.remove-btn');
            removeButton.addEventListener('click', function () {
                var confirmed = confirm('Bạn có chắc chắn muốn xóa sản phẩm này khỏi giỏ hàng?');
                if (confirmed) {
                    cartItems.splice(index, 1);
                    updateCart();
                    saveCartToLocalStorage();
                }
            });

            cartTableBody.appendChild(row);
            total += item.price * item.quantity;
        });

        totalContainer.textContent = `Tổng Cộng: $${total.toFixed(2)}`;
    }

    // Gọi hàm cập nhật giỏ hàng khi trang tải hoặc có thay đổi trong giỏ hàng
    updateCart();

    // Lưu giỏ hàng vào localStorage
    function saveCartToLocalStorage() {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }

    // Xử lý sự kiện khi người dùng nhấn vào nút thanh toán
    var checkoutButton = document.getElementById('checkout-btn');
    checkoutButton.addEventListener('click', function () {
        // Chuyển hướng sang trang thanh toán
        window.location.href = 'checkout.html';
    });
});
