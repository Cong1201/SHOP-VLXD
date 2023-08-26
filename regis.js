const register = document.getElementById("register");
register.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form gửi yêu cầu mặc định

  // Lấy giá trị tên đăng nhập và mật khẩu từ form đăng ký
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Giả định rằng đăng ký thành công

  // Hiển thị thông báo đăng ký thành công
  alert("Đăng ký thành công!");

  // Sau khi đăng ký thành công, chuyển hướng người dùng đến trang đăng nhập
  window.location.href = "login.html";
});
