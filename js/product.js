document.addEventListener('DOMContentLoaded', function () {
    // Lấy tham số 'id' từ URL
    var urlParams = new URLSearchParams(window.location.search);
    var productId = urlParams.get('id');

    // Xử lý hiển thị chi tiết sản phẩm dựa trên 'productId'
    if (productId === '1') {
        document.getElementById('product-image').src = './img/NK1.jpg';
        document.getElementById('product-name').textContent = 'Nho mẫu đơn';
        document.getElementById('product-description').textContent = 'Nho Mẫu đơn là một giống nho lưỡng bội, là kết quả của sự lai tạo giữa giống Akitsu-21 và Hakunan do Viện Khoa học Cây ăn quả Quốc gia ở Nhật Bản tạo ra vào năm 1988. Nó có quả mọng lớn màu xanh vàng, kết cấu thịt, hương vị, nồng độ chất rắn hòa tan cao và độ axit thấp';
        document.getElementById('product-price').textContent = 'Giá: $100';
        // Thêm các thông tin sản phẩm khác
    } else if (productId === '2') {
        document.getElementById('product-image').src = './img/1.jpg';
        document.getElementById('product-name').textContent = 'Dưa hấu';
        document.getElementById('product-description').textContent = 'Dưa hấu là một loài thực vật thuộc họ Cucurbitaceae, một loài thực vật có hoa giống như cây nho có hoa nguồn gốc từ khu vực Tây Phi. Nó được trồng để lấy quả. Dưa hấu là một loài dây leo xoắn và dài trong họ thực vật có hoa Cucurbitaceae. Có bằng chứng từ hạt giống dưa hấu trong những ngôi mộ Pharaoh ở Ai Cập cổ đại';
        document.getElementById('product-price').textContent = 'Giá: $2';
        // Thêm các thông tin sản phẩm khác
    } else {
        // Hiển thị thông báo khi sản phẩm không tồn tại
        document.getElementById('product-name').textContent = 'Sản Phẩm Không Tồn Tại';
        document.getElementById('product-description').textContent = '';
        document.getElementById('product-price').textContent = '';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var addToCartBtn = document.getElementById('addToCartBtn');

    addToCartBtn.addEventListener('click', function () {
        var productName = document.getElementById('product-name').textContent;
        var productPrice = parseFloat(document.getElementById('product-price').textContent.replace('Giá: $', ''));
        var quantity = parseInt(document.getElementById('quantity').value);
        var productImage = document.getElementById('product-image').src;
        // Tạo một đối tượng đại diện cho sản phẩm
        var product = {
            name: productName,
            price: productPrice,
            quantity: quantity,
            image: productImage
        };


        // Lấy giỏ hàng từ localStorage hoặc tạo mới nếu không tồn tại
        var cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Kiểm tra xem sản phẩm đã có trong giỏ hàng chưa
        var existingProductIndex = cart.findIndex(function (item) {
            return item.name === productName;
        });

        if (existingProductIndex !== -1) {
            // Nếu sản phẩm đã có trong giỏ hàng, cập nhật số lượng
            cart[existingProductIndex].quantity += quantity;
        } else {
            // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm vào giỏ hàng
            cart.push(product);
        }

        // Lưu giỏ hàng vào localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Hiển thị thông báo
        alert('Sản phẩm đã được thêm vào giỏ hàng!');
    });
});
