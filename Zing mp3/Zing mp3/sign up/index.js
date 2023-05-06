
let form = document.querySelector(".form");
let user = JSON.parse(localStorage.getItem("user"))
  ? JSON.parse(localStorage.getItem("user"))
  : [];
let btn = document.querySelector(".btn");
form.onsubmit = function (e) {
  e.preventDefault();
  let username = form.username.value;
  let passwords = form.password.value;
  let data = {
    username: username,
    password: passwords,
  };
  user.push(data);
  localStorage.setItem("user", JSON.stringify(user));
  alert("Đăng kí thành công")
  form.reset();
  history.back();
};

