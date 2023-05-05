const products = JSON.parse(localStorage.getItem('products'));
const users = JSON.parse(localStorage.getItem('users'));
const tbody = document.getElementById("tbody");
const tbody2 = document.getElementById("tbody2");
const form = document.getElementById("main-form");

// Render products
renderproduct(products);
function renderproduct(products) {
    tbody.innerHTML = "";
    for(let key in products) {
        tbody.innerHTML += `<tr id="${key}">
        <th scope="row">${+key+1}</th>
        <td>${products[key].brand_name}</td>
        <td><img src="../${products[key].brand_logo}"></td>
        <td><img src="../${products[key].image}"></td>
        <td>${products[key].content}</td>
        <td>${products[key].price}</td>
        <td>
            <button class="btn btn-primary btn-update">Update</button>
            <button class="btn btn-danger btn-delete">Delete</button>
        </td>
      </tr>`
    }
}

// Add Event

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let product = {
        brand_name: form.nameBrand.value,
        content: form.content.value,
        brand_logo: "image/brand/" + form.fileBrand.value.substring(12),
        image : "image/brand/" + form.fileProduct.value.substring(12),
        price : (+form.price.value).toLocaleString()
    }

    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    renderproduct(products);
    Pagination(1);
    form.content.value = "";
    form.nameBrand.value = "";
    form.fileBrand.value = "";
    form.fileProduct.value = "";
    form.price.value = "";
})

tbody.onclick = function(e) {
    if(e.target.classList.contains("btn-update")){
        let id = e.target.parentElement.parentElement.id;
        let update = e.target.parentElement.parentElement;
        update.innerHTML = `<th scope="row">${+id+1}</th>
        <td><input type = "text" value="${products[id].brand_name}"></td>
        <td><input type = "text" value="${products[id].brand_logo}"></td>
        <td><input type = "text" value="${products[id].image}"></td>
        <td><input type = "text" value="${products[id].content}"></td>
        <td><input type = "text" value="${products[id].price}"></td>
        <td>
            <button class="btn btn-info btn-confirm">Confirm</button>
            <button class="btn btn-danger btn-cancel">Cancel</button>
        </td>`;

    } else if(e.target.classList.contains("btn-delete")) {
        alert("Bạn có chắc chắn xoá không?");
        let id = e.target.parentElement.parentElement.id;
        products.splice(id , 1);
        localStorage.setItem("products", JSON.stringify(products));
        renderproduct(products);
        Pagination(1);
    }
    if(e.target.classList.contains('btn-confirm')) {
        let id = e.target.parentElement.parentElement.id;
        let brand_name = e.target.parentElement.parentElement.children[1].children[0].value;
        let brand_logo = e.target.parentElement.parentElement.children[2].children[0].value;
        let image = e.target.parentElement.parentElement.children[3].children[0].value;
        let content = e.target.parentElement.parentElement.children[4].children[0].value;
        let price = e.target.parentElement.parentElement.children[5].children[0].value;
        products[id].brand_name = brand_name;
        products[id].brand_logo = brand_logo;
        products[id].image = image;
        products[id].content = content;
        products[id].price = price;
        localStorage.setItem("products", JSON.stringify(products));
        renderproduct(products);
        Pagination(1);
    } else if(e.target.classList.contains('btn-cancel')){
        renderproduct(products);
        Pagination(1);
    }
}

// Render user
renderUsers(users);
function renderUsers(users) {
    tbody2.innerHTML = "";
    for(let key in users) {
        tbody2.innerHTML += `<tr id="${key}">
        <th scope="row">${+key+1}</th>
        <td>${users[key].email}</td>
        <td>${users[key].password}</td>
        <td>${users[key].quantity}</td>
        <td>${users[key].total}</td>
        <td>${users[key].state_account}</td>
        <td>${users[key].state_login}</td>
        <td>
            <button class="btn btn-primary btn-update">Update</button>
            <button class="btn btn-danger btn-delete">Delete</button>
        </td>
      </tr>`
    }
}

tbody2.onclick = function(e) {
    if(e.target.classList.contains("btn-update")){
        let id = e.target.parentElement.parentElement.id;
        let update = e.target.parentElement.parentElement;
        update.innerHTML = `<th scope="row">${+id+1}</th>
        <td><input type = "text" value="${users[id].email}"></td>
        <td><input type = "text" value="${users[id].password}"></td>
        <td><input type = "text" value="${users[id].quantity}"></td>
        <td><input type = "text" value="${users[id].total}"></td>
        <td><select>
                <option value="" disabled>Chọn</option>
                <option value="0">0</option>
                <option value="1" selected>1</option>
            </select>
        </td>
        <td><select>
                <option value="" disabled>Chọn</option>
                <option value="0" selected>0</option>
                <option value="1">1</option>
            </select>
        </td>
        <td>
            <button class="btn btn-info btn-confirm">Confirm</button>
            <button class="btn btn-danger btn-cancel">Cancel</button>
        </td>
        `;

    } else if(e.target.classList.contains("btn-delete")) {
        alert("Bạn có chắc chắn xoá không?");
        let id = e.target.parentElement.parentElement.id;
        users[id].state_account = 0;
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers(users);
    }
    if(e.target.classList.contains('btn-confirm')) {
        let id = e.target.parentElement.parentElement.id;
        let email = e.target.parentElement.parentElement.children[1].children[0].value;
        let password = e.target.parentElement.parentElement.children[2].children[0].value;
        let quantity = e.target.parentElement.parentElement.children[3].children[0].value;
        let total = e.target.parentElement.parentElement.children[4].children[0].value;
        let state_account = e.target.parentElement.parentElement.children[5].children[0].value;
        let state_login = e.target.parentElement.parentElement.children[6].children[0].value;
        users[id].email = email;
        users[id].password = password;
        users[id].quantity = quantity;
        users[id].total = total;
        users[id].state_account = state_account;
        users[id].state_login = state_login;
        localStorage.setItem("users", JSON.stringify(users));
        renderUsers(users);
    } else if(e.target.classList.contains('btn-cancel')){
        renderUsers(users);
    }
}

//Pagination
const productsPerPage = 10;
const item = [...products];
const numPages = Math.ceil(item.length / productsPerPage);

Pagination(1);
function Pagination(pageNum) {
    const start = (pageNum - 1) * productsPerPage;
    const end = start + productsPerPage;
    const productsToRender = item.slice(start, end);
    renderproduct(productsToRender);
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



