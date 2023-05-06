// let listMusic = [
//   {
//     id: 1,
//     namemusic: "Bo xi bo",
//     namehuman: "Hoàng Thùy Linh",
//     picture: "../Image music/boxibo.jpg",
//     linkmusic: "../List Music/BoXiBo-HoangThuyLinh-7702270.mp3",
//      selection: "VN",
//   },
//   {
//     id: 2,
//     namemusic: "Chúng ta không thuộc về nhau",
//     namehuman: "Sơn Tùng M-TP",
//     picture: "../Image music/chungtakhgongthuocvenhau.jpg",
//     linkmusic: "..//List Music/ChungTaKhongThuocVeNhau-SonTungMTP-4528181.mp3",
//      selection: "IN",
// },
// ];
// localStorage.setItem("listmusic", JSON.stringify(listMusic));
let listMusic = JSON.parse(localStorage.getItem("listmusic"))
  ? JSON.parse(localStorage.getItem("listmusic"))
  : [];

let tbody = document.getElementById("tbody");
let mainForm = document.getElementById("main-form");

// Render dữ liệu
function renderListMusic(listMusic) {
  tbody.innerHTML = "";
  for (let i = 0; i < listMusic.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${listMusic[i].id}">
          <td scope="col">${i + 1}</td>
          <td scope="col" name="namemusic">${listMusic[i].namemusic}</td>
          <td scope="col" name="namehuman">${listMusic[i].namehuman}</td>
          <td scope="col" name ="picture"><a href="${
            listMusic[i].picture
          }" target="_blank">Link</a></td>
          <td scope="col" name="linkmusic"><a href="${
            listMusic[i].linkmusic
          }" target="_blank">Link</a></td>
          <td data="${
            listMusic[i].selection
          }" name="selection" id="selections">${listMusic[i].selection}</td>
          <td>
            <button type="button" class="btn btn-primary btn-edit">Edit</button>
            <button type="button" class="btn btn-danger btn-delete" >Delete</button>
          </td>
        </tr>`;
  }
}
renderListMusic(listMusic);

// Thực hiện tính năng thêm
mainForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let newListMusic = {
    id: Math.floor(Math.random() * 1000),
    namemusic: mainForm.namemusic.value,
    namehuman: mainForm.namehuman.value,
    picture: mainForm.picture.value,
    linkmusic: mainForm.linkmusic.value,
    selection: mainForm.selection.value,
  };
  listMusic.push(newListMusic);
  localStorage.setItem("listmusic", JSON.stringify(listMusic));
  renderListMusic(listMusic);
  mainForm.namemusic.value = "";
  mainForm.namehuman.value = "";
  mainForm.picture.value = "";
  mainForm.linkmusic.value = "";
  mainForm.selection.value = "";
  renderListMusic(listMusic);
});

// Edit

tbody.onclick = function (e) {
  if (e.target.classList.contains("btn-edit")) {
    let id = e.target.parentElement.parentElement.id;
    // console.log(e.target.parentElement.parentElement.id);
    let listmusic = listMusic.find((listmusic) => listmusic.id == id);
    // console.log(listmusic);
    let check = -1;
    for (let i = 0; i < listMusic.length; i++) {
      if (id == listMusic[i].id) {
        check = i;
      }
    }
    if (check != -1) {
      e.target.parentElement.parentElement.innerHTML = `<form id="searcher">
                 <tr>
                  <td scope="col">${listmusic.id}</td>
                  <td scope="col"><input name ="namemusic" value="${listmusic.namemusic}" id="name-edit"></td>
                  <td scope="col"><input name ="namehuman" value="${listmusic.namehuman}" id="name-musicedit"></td>
                  <td scope="col"><input name ="picture" value="${listmusic.picture}" target="_blank" id="namepicture"></td>
                  <td scope="col"><input name ="linkmusic" value="${listmusic.linkmusic}" target="_blank" id="namelinkmusic"></td>
                  <td data="${listMusic.selection}" name="selection" id="selections">
                   
                  </td>
                  <td>
                    <button class="btn btn-info btn-confirm" id="btn-confirm" ${check}">Confirm</button>
                    <button class="btn btn-danger btn-cancel" id="btn-cancel ${check}">Cancel</button>
                  </td>
                </tr>
              </form>`;
      let btnconfirm = document.getElementById("btn-confirm");
      let namemusic = document.getElementById("name-edit");
      let namehuman = document.getElementById("name-musicedit");
      let namepicture = document.getElementById("namepicture");
      let namelinkmusic = document.getElementById("namelinkmusic");
      btnconfirm.onclick = function () {
        listMusic[check].namemusic = namemusic.value; //lấy value từ input và tiến hành sửa trường namemusic: "Bo xi bo",
        listMusic[check].namehuman = namehuman.value;
        listMusic[check].picture = namepicture.value;
        listMusic[check].linkmusic = namelinkmusic.value;
        console.log(listMusic[check]); //kiem tra da sua thành công trong mảng các trường khác sửa tương tự
        localStorage.setItem("listmusic", JSON.stringify(listMusic));
        renderListMusic(listMusic);
      };
    }
  }
  // delete
  if (e.target.classList.contains("btn-delete")) {
    let id = e.target.parentElement.parentElement.id;
    // console.log(id);
    let check = -1;
    for (let i = 0; i < listMusic.length; i++) {
      if (id == listMusic[i].id) {
        check = i;
      }
    }
    if (check != -1) {
      listMusic.splice(check, 1);
      localStorage.setItem("listmusic", JSON.stringify(listMusic));
    }
    renderListMusic(listMusic);
  }
};

// Search music
let btnSearch = document.getElementById("btn-search");
let search = document.getElementById("search");

btnSearch.onclick = function (e) {
  let resultMusic = [];
  for (let i = 0; i < listMusic.length; i++) {
    if (search.value === listMusic[i].namemusic) {
      resultMusic.push(listMusic[i]);
    }
  }
  tbody.innerHTML = "";
  for (let i = 0; i < resultMusic.length; i++) {
    tbody.innerHTML =
      tbody.innerHTML +
      `<tr id="${resultMusic[i].id}">
      <td scope="col">${i + 1}</td>
      <td scope="col" name="namemusic">${resultMusic[i].namemusic}</td>
      <td scope="col" name="namehuman">${resultMusic[i].namehuman}</td>
      <td scope="col" name ="picture"><a href="${
        resultMusic[i].picture
      }" target="_blank">Link</a></td>
      <td scope="col" name="linkmusic"><a href="${
        resultMusic[i].linkmusic
      }" target="_blank">Link</a></td>
      <td data="${listMusic[i].selection}" name="selection">${
        listMusic[i].selection
      }</td>
      <td>
        <button type="button" class="btn btn-primary btn-edit">Edit</button>
        <button type="button" class="btn btn-danger btn-delete" >Delete</button>
      </td>
    </tr>`;
  }
  if (search.value == "") {
    renderListMusic(listMusic);
  }
};
