// Check login status
let users = JSON.parse(localStorage.getItem("users"));
let login = document.getElementById("login");
let signup = document.getElementById("signup");
let index = -1;
for (let key in users) {
    if(users[key].state_login == 1){
        index = users.indexOf(users[key]);
        login.innerHTML = "Thoát";
        login.href = "login.html";
        signup.innerHTML = users[key].email;
        signup.href = "user.html";
    }
}
login.onclick = function() {
    users[index].state_login = 0;
    localStorage.setItem("users", JSON.stringify(users));
    window.location.href = "login.html";
}

// Show history
let show = document.querySelectorAll(".col-4 .number");
for (let key in users) {
    if(users[key].state_login == 1){
        show[0].innerHTML = users[key].quantity + " cái";
        show[1].innerHTML = users[key].total + " Đồng";
    }
}