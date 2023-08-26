const login = document.getElementById("login");

login.addEventListener("submit", function (event) {
  event.preventDefault(); // Ngăn chặn form gửi yêu cầu mặc định

  // Lấy giá trị tên đăng nhập và mật khẩu từ form
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // Giả định rằng đăng nhập thành công nếu tên đăng nhập và mật khẩu đều là "admin"
  if (username === "admin" && password === "admin") {
    // Hiển thị thông báo đăng nhập thành công
    alert("Đăng nhập thành công!");

    // Chuyển hướng người dùng đến trang cá nhân hoặc trang khác
    window.location.href = "index.html"; // Thay đổi thành trang cá nhân của bạn
  } else {
    // Xử lý trường hợp đăng nhập không thành công, ví dụ: hiển thị thông báo lỗi
    alert("Tên đăng nhập hoặc mật khẩu không đúng.");
  }
});
