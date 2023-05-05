// const users = [];
const users = JSON.parse(localStorage.getItem("users")) || [];
let form = document.getElementById("form");
form.onsubmit = function(e){
    e.preventDefault();
    let filter = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let email = form.email.value;
    let password = form.password.value;
    let repassword = form.repassword.value;
    
    for (let key in users){
        if (users[key].email == email) {
            alert("Email đã tồn tại");
            return false;
        }
    }
    if(!filter.test(email)){
        alert("Vui lòng nhập email hợp lệ");
    } else if(password != repassword){
        alert("Mật khẩu không khớp. Vui lòng nhập lại.");
    } else {
        let data = {
            email: email,
            password: password,
            quantity: 0,
            total: 0,
            state_account: 1,
            state_login: 0
        }
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Đăng kí thành công");
        window.location.href = "login.html";
    }
}