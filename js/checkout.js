document.addEventListener('DOMContentLoaded', function() {
    var checkoutForm = document.getElementById('checkout-form');
    var checkoutItemsContainer = document.getElementById('checkout-items');
    var paymentMethodSelect = document.getElementById('payment-method');
    var completePaymentBtn = document.getElementById('completePaymentBtn');

    var cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    // Hiển thị các sản phẩm trong giỏ hàng
    cartItems.forEach(function(item) {
        var itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>Số Lượng: ${item.quantity}</p>
            <p>Tổng Tiền: $${(item.price * item.quantity).toFixed(2)}</p>
        `;
        checkoutItemsContainer.appendChild(itemDiv);
    });

    // Xử lý sự kiện khi người dùng nhấn nút "Hoàn Tất Thanh Toán"
    completePaymentBtn.addEventListener('click', function() {
        var name = document.getElementById('name').value;
        var phone = document.getElementById('phone').value;
        var address = document.getElementById('address').value;
        var selectedPaymentMethod = paymentMethodSelect.value;

        if (name && phone && address && selectedPaymentMethod) {
            // Nếu tất cả thông tin đã được nhập
            var paymentMessage = `Đơn hàng của ${name} tại địa chỉ ${address} với số điện thoại ${phone} đã được đặt thành công. Phương thức thanh toán: ${selectedPaymentMethod}.`;

            // Hiển thị thông báo về hình thức thanh toán
            alert(paymentMessage);

            // Xóa giỏ hàng từ localStorage sau khi thanh toán
            localStorage.removeItem('cart');

            // Chuyển hướng người dùng về trang chính hoặc trang cảm ơn
            window.location.href = 'index.html'; // Chuyển hướng về trang chính
            // window.location.href = 'thankyou.html'; // Chuyển hướng về trang cảm ơn
        } else {
            // Nếu thông tin chưa được nhập đủ
            alert('Vui lòng nhập đầy đủ thông tin và chọn hình thức thanh toán.');
        }
    });
});
document.addEventListener('DOMContentLoaded', function () {
    // Lấy giỏ hàng từ localStorage
    var cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Tính tổng giá tiền
    var totalPrice = calculateTotalPrice(cart);

    // Hiển thị tổng giá tiền trong phần tử có id là 'total-price'
    var totalPriceElement = document.getElementById('total-price');
    totalPriceElement.textContent = 'Tổng giá tiền: $' + totalPrice.toFixed(2);
});

function calculateTotalPrice(cart) {
    var total = 0;

    for (var i = 0; i < cart.length; i++) {
        var product = cart[i];
        total += product.price * product.quantity;
    }

    return total;
}

