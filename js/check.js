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