// tạo slideshow:
// slick-slideshow
$(".img-slider").slick({
  slidesToShow: 2,
  slidesToScroll: 2,
  arrows: false,
  dot: true,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});

const a = document.querySelector.bind(document);
const aa = document.querySelectorAll.bind(document);
const btnEls = aa(".btn_ic");
const tabs = aa(".tab");
btnEls.forEach((btnEl, index) => {
  const tab = tabs[index];
  btnEl.onclick = function () {
    a(".btn_ic.active").classList.remove("active");
    a(".tab.active").classList.remove("active");
    this.classList.add("active");
    tab.classList.add("active");
  };
});
const navEl = a(".nav");
navEl.onclick = function () {
  this.parentElement.parentElement.classList.toggle("active");
};

// Sắp xếp dữ liệu vào danh sách bài hát thông qua data
$(document).ready(function () {
  $(".btn-all button").click(function () {
    $(".btn-all button").removeClass("active");
    $(this).addClass("active");
  });
  $(".btn-all button").click(function (e) {
    const dataValue = $(this).attr("data");
    const allCols = $(".data-list .VN");
    if (dataValue === "all") {
      allCols.show();
      return;
    }
    const shownCols = $(`.data-list [data=${dataValue}]`);
    const hiddenCols = allCols.not(shownCols);
    shownCols.show();
    hiddenCols.hide();
  });
});

// Render List Song: dữ liệu bài hát
let songs = JSON.parse(localStorage.getItem("listmusic"));
renderListMusic(songs);
function renderListMusic(songs) {
  let row = document.querySelector(".align-items-center");
  row.innerHTML = "";
  for (let key in songs) {
    row.innerHTML += `
  <div class="col-4 VN coluum" data="${songs[key].selection}">
    <div class="music-list-music" id="picTure">
      <div class="music-list-hover">
        <div>
          <audio src="${songs[key].linkmusic}" id="audio" ></audio>
          <img src="${songs[key].picture}" alt="">
          <div class="music-hov">
              <i class="fa-solid fa-play"></i>
          </div>
        </div>
      </div>
    <div class="music-list">
      <div>   
          <div id="namemusic">${songs[key].namemusic}</div>
          <div id="namehuman">${songs[key].namehuman}</div>
      </div>
  </div>
  <button class="right"><i class="fa-solid fa-ellipsis"></i></button>
  </div>
  </div>`;
  }
}

// Update List User: dữ liệu tài khoản
let users = JSON.parse(localStorage.getItem("user"));
let userLogin = localStorage.getItem("use_login");
let logins1 = document.querySelector("#logins1");
let logins2 = document.querySelector("#logins2");
let success1 = document.querySelector(".success");
for (let i = 0; i < users.length; i++) {
  if (users[i].username == userLogin) {
    success1.style.display = "none";
    logins1.style.display = "block";
    logins1.innerHTML = users[i].username.replace("@gmail.com", "");
    logins2.innerHTML = users[i].username.replace("@gmail.com", "");
  }
}

//Play Song:
let songer = document.getElementById("song");
const audio = document.getElementById("audio");
const playBtn = document.querySelector(".play-inner");
const musics = JSON.parse(localStorage.getItem("listmusic"));
const prevBtn = document.querySelector(".next-back");
const nextBtn = document.querySelector(".next-forward");
let isPlaying = true;
let indexSong = 0;
const timeStart = document.querySelector(".time-start");
const timeEnd = document.querySelector(".time-end");
let timer;
let ranges = document.querySelector(".range");
let volumeIcon = document.querySelector(".volume-icon");
let musicRepeat = document.querySelector(".music-repeat");
let rePeat = false;
let musicShuffle = document.querySelector(".music-shuffle");
let idPicture = document.querySelector("#picTure");
let nameMusic = document.querySelector("#name-music");
let dataList = document.querySelector("#data-list");
audio.setAttribute("src", musics[indexSong].linkmusic);

// Chuyển bài hát: Khi click điều hướng
prevBtn.addEventListener("click", function () {
  changeSong(-1);
});
nextBtn.addEventListener("click", function () {
  changeSong(1);
});

// Lặp bài hát :
audio.addEventListener("nextsong", handleSong);
function handleSong() {
  if (rePeat) {
    isPlaying = true;
    playPause();
  } else {
    changeSong(1);
  }
}

// Chuyển bài hát: click điều hướng tự bật tiếp bài
function changeSong(dir) {
  if (dir == 1) {
    // next song
    indexSong++;
    if (indexSong >= musics.length) {
      indexSong = 0;
    }
    isPlaying = true;
  } else if (dir == -1) {
    //  back song
    indexSong--;
    if (indexSong < 0) {
      indexSong = musics.length - 1;
    }
    isPlaying = true;
  }
  audio.setAttribute("src", musics[indexSong].linkmusic);
  playPause();
}

//
playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    audio.play();
    playBtn.innerHTML = `<i class="fa-solid fa-square"></i>`;
    isPlaying = false;
    timer = setInterval(displayTime, 500); //setInterval() nhận hai đối số: một hàm sẽ được thực thi
    // và khoảng thời gian (tính bằng mili giây), hàm được thực thi là displayTime().
  } else {
    audio.pause();
    playBtn.innerHTML = `<i class="fa-solid fa-pause play-icon"></i>`;
    isPlaying = true;
    clearInterval(timer);
  }
}

// Bấm bài hát, phát nhạc
dataList.addEventListener("click", handleClick);
function handleClick(e) {
  let muSic = $(e.target.parentElement.children[0]).attr("src");
  // e.target.parentElement.children[0];
  let pictures = $(e.target.parentElement.children[1]).attr("src");
  let nameMUsic =
    e.target.parentElement.parentElement.parentElement.children[1].children[0]
      .children[0];
  // console.log(nameMUsic.innerHTML);
  let nameHuman =
    e.target.parentElement.parentElement.parentElement.children[1].children[0]
      .children[1];
  // console.log(nameHuman.innerHTML);
  audio.setAttribute("src", `${muSic}`);
  audio.play();
  playBtn.innerHTML = `<i class="fa-solid fa-square"></i>`;
  isPlaying = false;
  timer = setInterval(displayTime, 500);
  let updateMusic = document.querySelector(".update-music");
  updateMusic.innerHTML = `<div class="music-list-music container-music update-music">
   <div class="container-namemusic">
      <audio src="${muSic}" id="song"></audio>
      <img class="pc" src="${pictures}" alt="">
      <div class="music-list">
        <p id="name-music">${nameMUsic.innerHTML}</p>
        <p id="name-human">${nameHuman.innerHTML}</p>
      </div>
    </div>
  <button class="right"><i class="fa-solid fa-ellipsis"></i></button>
</div>`;
}

// Điều chỉnh thời gian bài hát,
function displayTime() {
  const { duration, currentTime } = audio;
  ranges.max = duration;
  ranges.value = currentTime;
  // console.log(audio.duration, audio.currentTime);
  timeStart.textContent = formatTimer(currentTime);
  if (!duration) {
    timeEnd.textContent = "00:00";
  } else {
    timeEnd.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes} : ${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
displayTime();

// Điều chỉnh thời gian từng giây khi bài hát chạy
ranges.addEventListener("change", handleChange);
function handleChange() {
  audio.currentTime = ranges.value;
}

//Lặp bài hát
musicRepeat.addEventListener("click", function () {
  if (rePeat) {
    rePeat = false;
    musicRepeat.removeAttribute("style");
  } else {
    rePeat = true;
    musicRepeat.style.color = "#00ff00";
  }
  console.log(rePeat);
});
