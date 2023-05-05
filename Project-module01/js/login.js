const users = JSON.parse(localStorage.getItem("users"));
let form = document.getElementById("form");
form.onsubmit = function(e){
    e.preventDefault();
    let email = form.email.value;
    let password = form.password.value;
    for(let key in users){
        if(email === users[key].email && password === users[key].password && users[key].state_account == 1){
            users[key].state_login = 1;
            localStorage.setItem("users", JSON.stringify(users));
            window.location.href = "home.html";
            return true;
        } else if(email === users[key].email && password === users[key].password && users[key].state_account == 0){
            alert("Tài khoản của bạn bị khoá. Vui lòng gọi hotline.");
            return false;
        }
    }
    alert(`Email hoặc mật khẩu không đúng.`);
    
}