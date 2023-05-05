let getItem = JSON.parse(localStorage.getItem("id"));
let row = document.querySelector(".container .row");

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

renderItem(getItem);
function renderItem(getItem) {
    row.innerHTML = `<div class="col-5 left">
        <img src="../${getItem.image}">
        </div>
        <div class="col-7 right">
            <img src="../${getItem.brand_logo}">
            <h2>${getItem.content}</h2>
            <h2 style="color: #ff5d15;">${getItem.price} <sup>đ</sup></h2>
            <div class="buy-item">
                <label>Số lượng</label>
                <select class="quantity">
                    <option value="1" selected>1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <div>Hạn sử dụng 90 ngày (kể từ ngày mua)</div>
            </div>
            <button class="button" id="button">MUA</button>
        </div>` 
}

// Thanh toán
let box = document.querySelector(".box");
let overlay = document.querySelector(".overlay");
let button = document.getElementById("button");
let quantity = document.querySelector(".quantity");

let check = 0;
for (let key in users) {
    if(users[key].state_login == 1){
        check = 1;
    }
}
button.onclick = function(e) {
    e.preventDefault();
    let total = getItem.price.replaceAll(",", "") * quantity.value;
    if(!check) {
        alert("Vui lòng đăng nhập");
        window.location.href = "login.html";
        return false;
    } else {
        box.innerHTML = "";
        box.style.display = "block";
        overlay.style.display = "block";
        box.innerHTML = `
        <div class="container">
            <div class="topBar"></div>
            <div class="img"><img src="../${getItem.image}"></div>
            <div class="brand">${getItem.brand_name}</div>
            <div class="content">${getItem.content}</div>
            <div class="content2">Hạn sử dụng: 90 ngày (kể từ ngày mua)</div>
            <div class="content3">
                <div>Giá</div>
                <div>${getItem.price} <sup>đ</sup></div>
            </div>
            <div class="content3">
                <div>Số lượng</div>
                <div>${quantity.value}</div>
            </div>
            <div class="content3">
                <div class="result">Tổng</div>
                <div class="total">${total.toLocaleString()} <sup>đ</sup></div>
            </div>
            <div class="buy">Mua hàng</div>
        </div>`
    }

    let buy = document.querySelector(".buy");
    buy.onclick = function() {
        alert("Mua hàng thành công");
        users[index].quantity = +users[index].quantity + +quantity.value;
        users[index].total = (+users[index].total.replaceAll(",", "") + total).toLocaleString();
        localStorage.setItem("users", JSON.stringify(users));
        window.location.href = "user.html";
    }
    overlay.onclick = function() {
        box.style.display = "none";
        overlay.style.display = "none";
    }
}