let products = JSON.parse(localStorage.getItem("products"));
let row = document.querySelector(".item-inner .row");

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

renderProducts(products);
function renderProducts(products) {
    row.innerHTML = "";
    for (let key in products) {
        row.innerHTML += `<div class="col-3">
        <a href="detail-product.html"><img src="../${products[key].image}"></a>
        <div class="product">
            <h3>${products[key].brand_name}</h3>
            <div>${products[key].content}</div>
            <div class="price">
                <span>${products[key].price}<u>đ</u></span>
            </div>
            </div>
        </div>`
    }
}

//Pagination
const productsPerPage = 12;
const item = [...products];
const numPages = Math.ceil(item.length / productsPerPage);

Pagination(1);
function Pagination(pageNum) {
    const start = (pageNum - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToRender = item.slice(start, end);
    renderProducts(productsToRender);
}

renderPagination();
function renderPagination() {
    const pagination = document.getElementById("pagination");
    for (let i = 1; i <= numPages; i++) {
    const button = document.createElement("button");
    button.textContent = i;
    if(i == 1){
        button.style.backgroundColor = "#414042",
        button.style.color = "white"
    }
    button.addEventListener("click", () => {
        const paginationButtons = document.querySelectorAll("#pagination button");
        paginationButtons.forEach((button) => {
            button.style.backgroundColor = "";
            button.style.color = "";
        });
        Pagination(i), 
        button.style.backgroundColor = "#414042",
        button.style.color = "white"
    });
    pagination.appendChild(button);
  }
}

// Order products
let right = document.querySelector(".container-fluid .right");
let quantity = document.querySelector("#quantity");
quantity.innerHTML = products.length;

right.onclick = function(e) {
    const arr = [...products];
    const arr2 = [...products];
    let children = right.children;
    for (let i = 0; i < children.length; i++) {
        children[i].classList.remove("order");
    }
    if(e.target.classList.contains("price-cheap")){
        e.target.classList.add("order");
        arr.sort(function(a, b) {
        let priceA = a.price.replaceAll(",", "");
        let priceB = b.price.replaceAll(",", "");
            return priceA - priceB;
        });
        for(let key in item){
            item[key] = arr[key];
        }
        renderProducts(arr);
        Pagination(1);
    } else if(e.target.classList.contains("price-expensive")){
        e.target.classList.add("order");
        arr.sort(function(a, b) {
        let priceA = a.price.replaceAll(",", "");
        let priceB = b.price.replaceAll(",", "");
            return priceB - priceA;
        });
        for(let key in item){
            item[key] = arr[key];
        }
        renderProducts(arr);
        Pagination(1);
    } else if(e.target.classList.contains("new")){
        e.target.classList.add("order");
        arr2.reverse();
        for(let key in item){
            item[key] = arr2[key];
        }
        renderProducts(arr2);
        Pagination(1);
    }
}

// Search brand
let search = document.querySelector(".input-group button");
let input = document.querySelector(".input-group input");
search.onclick = function() {
    const arr = [];
    for (let key in products) {
        if(input.value.toLowerCase() == products[key].brand_name.toLowerCase()){
            arr.push(products[key]);
        }
    }
    if(arr.length == 0){
        quantity.innerHTML = products.length;
        renderProducts(products);
        Pagination(1);
    } else {
        quantity.innerHTML = arr.length;
        renderProducts(arr);
    }
}

// Details
row.onclick = function(e) {
    e.preventDefault();
    for (let key in products) {
        if(e.target.getAttribute("src") == "../" + products[key].image) {
            localStorage.setItem("id", JSON.stringify(products[key]));
            window.location.href = "detail-product.html";
        }
    }
}


