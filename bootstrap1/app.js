let works = [{
    id: 1,
    content: 'Learn HTML',
    dueDate: '2025-01-01',
    status: "Pending",
    assignedTo : "Anh Bach"
},
{
    id: 2,
    content: 'Learn CSS',
    dueDate: '2024-02-15',
    status: "Pending",
    assignedTo : "Anh Lam"
},
{
    id: 3,
    content: 'Learn Bootstrap',
    dueDate: '2022-09-06',
    status: "Pending",
    assignedTo : "Anh Hai"
},
{
    id: 4,
    content: 'Learn Javascript',
    dueDate: '2024-12-12',
    status: "Pending",
    assignedTo : "Anh Cuong"
},
{
    id: 5,
    content: 'Learn Jquery',
    dueDate: '2025-09-10',
    status: "Pending",
    assignedTo : "Anh Kumar"
},
{
    id: 6,
    content: 'Learn React Native',
    dueDate: '2023-11-11',
    status: "Pending",
    assignedTo : "Anh Nancy"
},
{
    id: 7,
    content: 'Learn Java',
    dueDate: '2026-12-07',
    status: "Pending",
    assignedTo : "Anh Laravel"
}
];

const tbody = document.getElementById("tbody");
const form = document.getElementById("main-form");
let index = works[works.length-1]["id"];

// Render
renderWork(works);
function renderWork(work) {
    tbody.innerHTML = "";
    for(let key in work) {
        tbody.innerHTML += `<tr id="${work[key].id}">
        <th scope="row">${work[key].id}</th>
        <td>${work[key].content}</td>
        <td>${work[key].dueDate}</td>
        <td>${work[key].status}</td>
        <td>${work[key].assignedTo}</td>
        <td>
            <button class="btn btn-primary btn-update">Update</button>
            <button class="btn btn-danger btn-delete">Delete</button>
        </td>
      </tr>`
    }
}

// Event Listeners

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let work = {
        id: index + 1,
        content: form.content.value,
        dueDate: form.dueDate.value,
        status: form.status.value,
        assignedTo : form.username.value,
    }
    works.push(work);
    renderWork(works);
    form.content.value = "";
    form.dueDate.value = "";
    form.status.value = "";
    form.username.value = "";
})

tbody.onclick = function(e) {
    if(e.target.classList.contains("btn-update")){
        let id = e.target.parentElement.parentElement.id;
        let work = works.find(work => work.id == id);
        let update = e.target.parentElement.parentElement;
        update.innerHTML = `<th scope="row">${work.id}</th>
        <td><input type = "text" name = "content" value="${work.content}"></td>
        <td><input type = "date" value="${work.dueDate}"></td>
        <td><select class="form-select" id="inlineFormSelectPref" name="status" required>
                <option disabled value="">Choose...</option>
                <option selected value="Pending">Pending</option>
                <option value="Fulfill">Fulfill</option>
                <option value="Reject">Reject</option>
            </select></td>
        <td><input value="${work.assignedTo}"></td>
        <td>
            <button class="btn btn-info btn-confirm">Confirm</button>
            <button class="btn btn-danger btn-cancel">Cancel</button>
        </td>`;

    } else if(e.target.classList.contains("btn-delete")) {
        let del = e.target.parentElement.parentElement;
        del.remove();
    }
    if(e.target.classList.contains('btn-confirm')) {
        let id = e.target.parentElement.parentElement.id;
        let content = e.target.parentElement.parentElement.children[1].children[0].value;
        let dueDate = e.target.parentElement.parentElement.children[2].children[0].value;
        let status = e.target.parentElement.parentElement.children[3].children[0].value;
        let assignedTo = e.target.parentElement.parentElement.children[4].children[0].value;
        works[id-1].content = content;
        works[id-1].dueDate = dueDate;
        works[id-1].status = status;
        works[id-1].assignedTo = assignedTo;
        renderWork(works);
    } else if(e.target.classList.contains('btn-cancel')){
        renderWork(works);
    }
}