# MISSION 01
### 과제 완성본
![js-homwork-mission01](https://github.com/jjang-aaa/js-homework/assets/131199065/113df6ec-52a5-4de9-95c9-64a52cb14343)

---
## 코드설명

### 순서
이메일의 조건 확인 -> 비밀번호의 조건 확인 -> 이매일, 비밀번호가 유저와 동일한지 확인

### 코드형태
1. 변수안에 값(요소)을 할
2. 함수를 만들고 안에 ```if문```을 사용해 일치하는지 확인
3. ```.addEventListener``` 로 함수사용

---
## 문제해결

마지막에 이메일과 비밀번호가 유저와 동일한지 알아보는 함수를 이벤트로 사용하는데 확인이 정상적으로 작동했지만 welcome페이지가 나오지 않았습니다.
이유가 submit의 기본 이벤트가 있어서 실행되지 않은 것으로 보고```event.preventDefault();```를 추가하여 문제를 해결하였습니다.





