# MISSON 02

---

## 완성본

![mission02](https://github.com/jjang-aaa/js-homework/assets/131199065/715db76f-2855-4b1f-88b9-f79615eec12a)

---

## 요구사항

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
2. 이미지와 색상의 데이터는 data.js 에서 불러와주세요.
3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
5. 함수를 분리시켜주세요.
6. 가독성이 좋은 코드로 리팩토링 해주세요.

---

## 코드설명

1. `nav.addEventListener("click", showNextPoster);`로 클릭 이벤트를 활성화 했습니다.
2. 데이터는 data.js 에서 불러와 사용하였고 이미지의 기본 색을 검정으로 지정하였습니다.

```js
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
```

3. li를 사용해서 메인 비주얼 이미지를 변경하였습니다.

```js
const target = e.target.closest("li");
if (!target) return;
```

4. 비주얼 이미지의 이름 변경을 위한 코드를 작성했습니다.

```js
// 텍스트 변경
function setNameText(nickName, index) {
  nickName.textContent = data[index - 1].name;
}
```

5. 함수를 분리했습니다.

```js
// nav 클릭시 배경 색상 변경
setBgColor(index);

// 이미지 변경
setImage(visualImage, index);

// 텍스트 변경
setNameText(nickName, index);
```

6. 코드를 읽기 쉽게 만들었습니다.

---

## 어려웠던 점

##### 함수쪼개기

- 코드를 다 작성한 후에 함수로 나누려고하니깐 코드의 흐름을 읽기 어려웠습니다.
  - 해결: 나눌 함수 네임을 먼저 작성하고 그 함수를 돌려보고 콘솔에서 오류를 확인하고 그 오류를 수정하면서 함수를 작성해나갔습니다.

---

## 추가로 시도해 본 점

- 이미지를 누르면 오디오가 나오게 하기 위한 함수를 추가했습니다.
  - 오디오 객체르 생성하고 오디오 함수를 만듭니다.
  - 오디오 함수에 각 객체들의 오디오를 멈추게 하는 코드와 실행하는 코드를 추가하였습니다.
  - 웨이드와 게임의 오디오 음량을 낮추기 위한 메서드를 추가하였습니다.
- 비주얼이미지를 누르면 배경음악이 나오게 하는 함수를 추가했습니다.
  - 엘리멘탈 OST를 비주얼 이미지를 누르면 켜졌다 꺼졌다 하는 코드를 작성했습니다.
  - 클릭 이벤트와 상태변수를 추가하였습니다.
