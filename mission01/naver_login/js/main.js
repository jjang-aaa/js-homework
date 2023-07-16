// 이메일 조건 확인
const userEmail = document.getElementById("userEmail");

function emailTypeCheck() {
  if (emailReg(userEmail.value) === false) {
    userEmail.classList.add("is--invalid");
  } else {
    userEmail.classList.remove("is--invalid");
  }
}

function emailReg(text) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase());
}

userEmail.addEventListener("input", emailTypeCheck);

// 비밀번호 조건 확인
const userPassword = document.getElementById("userPassword");

function passwordTypeCheck() {
  if (pwReg(userPassword.value) === false) {
    userPassword.classList.add("is--invalid");
  } else {
    userPassword.classList.remove("is--invalid");
  }
}

function pwReg(text) {
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;

  return re.test(String(text).toLowerCase());
}

userPassword.addEventListener("input", passwordTypeCheck);

// 로그인 일치 확인
const login = document.querySelector(".btn-login");

const user = {
  id: "asd@naver.com",
  pw: "spdlqj123!@",
};

function userCheak() {
  event.preventDefault();
  if (userEmail.value === user.id && userPassword.value === user.pw) {
    window.location.href = "welcome.html";
  } else {
    alert("아이디 또는 비밀번호가 일치하지 않습니다.");
  }
}

login.addEventListener("click", userCheak);
