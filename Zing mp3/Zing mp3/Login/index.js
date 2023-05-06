const button1 = document.querySelector(".button1");
let form = document.querySelector(".form");
// let usernameAdmin = JSON.parse(localStorage.getItem("admin")).username;
// let passwordAdmin = JSON.parse(localStorage.getItem("admin")).password;
let json = JSON.parse(localStorage.getItem("user"));
form.onsubmit = function (e) {
  e.preventDefault();
  let userName = form.username.value;
  let userPassword = form.password.value;
  // console.log(userName, userPassword);
  if (userName == "Admin@gmail.com" && userPassword == "123@") {
    window.location.href = "http://127.0.0.1:5500/admin/index.html";
    // if(userName == usernameAdmin && userPassword == passwordAdmin) {
    // "file:///C:/Users/Admin/Desktop/Zing%20mp3/admin/index.html";
  } else {
    for (let i in json) {
      if (json[i].username == userName && json[i].password == userPassword) {
        localStorage.setItem("use_login", userName);
        alert("Đăng nhập thành công");
        window.location.href = "http://127.0.0.1:5500/user/index.html";
        // "file:///C:/Users/Admin/Desktop/Zing%20mp3/user/index.html";
        return;
      } 
    }
  }
  form.username.value = "";
  form.password.value = "";
};
