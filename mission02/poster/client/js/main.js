const body = getNode("body");
const nav = getNode(".nav");

// 노래 루프
const visualImage = getNode(".visual img");

const elementalOST = new AudioPlayer("./assets/audio/elementalOST.mp3");

// 이미지 클릭시 노래 토글
visualImage.addEventListener("click", toggleOST);

let isStartOST = false;
function toggleOST() {
  if (isStartOST === true) {
    elementalOST.pause();
    isStartOST = false;
  } else {
    isStartOST = true;
    elementalOST.play();
  }
}

// 이미지 클릭 이벤트 함수
function showNextPoster(e) {
  e.preventDefault();

  const nickName = getNode(".nickName");
  const imgList = getNodes(".nav ul li");
  const visualImage = getNode(".visual img");

  // 클릭된 이미지의 제일 근처에 있는 Li들고오기
  const target = e.target.closest("li");
  if (!target) return;

  // is-active 재설정
  setIsActive(imgList, target);

  const index = attr(target, "data-index");

  // nav 클릭시 배경 색상 변경
  setBgColor(index);

  // 이미지 변경
  setImage(visualImage, index);

  // 텍스트 변경
  setNameText(nickName, index);

  // 오디오 변경
  setAudio(index);
}

// 클릭 이벤트 활성화
nav.addEventListener("click", showNextPoster);

// 함수 분리
// is-active 재설정
function setIsActive(imgList, target) {
  imgList.forEach((li) => removeClass(li, "is-active"));
  addClass(target, "is-active");
}

// nav 클릭시 배경 색상 변경
function setBgColor(index) {
  body.style.background = `linear-gradient(to bottom,${
    data[index - 1].color
  }, #000000)`;
}

// 이미지 변경
function setImage(visualImage, index) {
  attr(
    visualImage,
    "src",
    `./assets/${data[index - 1].name.toLowerCase()}.jpeg`
  );
}

// 텍스트 변경
function setNameText(nickName, index) {
  nickName.textContent = data[index - 1].name;
}

// 오디오 리스트
const audioList = [
  new AudioPlayer(`./assets/audio/${data[0].name.toLowerCase()}.m4a`),
  new AudioPlayer(`./assets/audio/${data[1].name.toLowerCase()}.m4a`),
  new AudioPlayer(`./assets/audio/${data[2].name.toLowerCase()}.m4a`),
  new AudioPlayer(`./assets/audio/${data[3].name.toLowerCase()}.m4a`),
];

// 오디오 변경
function setAudio(index) {
  audioList.forEach((soundPlayer) => soundPlayer.stop());

  const audioPlayer = audioList[index - 1];
  if (index == 4 || index == 2) {
    audioPlayer.setVolume(0.15);
  }
  audioPlayer.play();
}
