const students = [];
const obj = {};
const tbody = document.getElementById("tbody");

// Render
function renderStudent(student) {
    tbody.innerHTML = "";
    for(let key in student) {
        tbody.innerHTML += `<tr id="${student[key].id}">
        <th scope="row">${student[key].id}</th>
        <td>${student[key].name}</td>
        <td>${student[key].email}</td>
        <td>${student[key].mobile}</td>
        <td>${student[key].address}</td>
        <td>${student[key].gender}</td>
        <td>
            <button class="btn btn-primary btn-edit">Edit</button>
            <button class="btn btn-danger btn-delete">Delete</button>
        </td>
        <td></td>
      </tr>`
    }
}

// Submit form
let form = document.getElementById("form");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let index = students.length + 1;
    let name = form.name.value;
    let email = form.email.value;
    let mobile = form.mobile.value;
    let address = form.address.value;
    let gender = form.gender.value;
    let obj = {
        id: index,
        name: name,
        email: email,
        mobile: mobile,
        address: address,
        gender: gender
    }
    students.push(obj);
    renderStudent(students);
    form.name.value = "";
    form.email.value = "";
    form.mobile.value = "";
    form.address.value = "";
    form.gender.value = "";
})

//delete student
tbody.onclick = function(e) {
    let id = e.target.parentElement.parentElement.id;
    if(e.target.classList.contains("btn-delete")){
        for(let key in students){
            if(students[key].id == id){
                let index1 = students.indexOf(students[key]);
                students.splice(index1 , 1);
            }
        }
        renderStudent(students);
// edit student
    } else if(e.target.classList.contains("btn-edit")){
        let name = document.getElementById("name");
        let email = document.getElementById("email");
        let mobile = document.getElementById("mobile");
        let address = document.getElementById("address");
        name.value = students[id-1].name;
        email.value = students[id-1].email;
        mobile.value = students[id-1].mobile;
        address.value = students[id-1].address;
        
        
        const obj1 = {};
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            let name = form.name.value;
            let email = form.email.value;
            let mobile = form.mobile.value;
            let address = form.address.value;
            let gender = form.gender.value;
            let obj1 = {
                id: id,
                name: name,
                email: email,
                mobile: mobile,
                address: address,
                gender: gender
            }
            students[id-1] = obj1;
            renderStudent(students);
            form.name.value = "";
            form.email.value = "";
            form.mobile.value = "";
            form.address.value = "";
            form.gender.value = "";
        })
    }
}

// Sort students
let sortButton = document.getElementById("sortButton");
sortButton.onclick = function(){
    students.sort(function(a, b){
        if(a.id < b.id) {
            return -1;
        } else if(a.id > b.id) {
            return 1;
        } else {
            return 0;
        }
    })
    renderStudent(students);
}
