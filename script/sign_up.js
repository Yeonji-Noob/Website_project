let checkPw = () => {
  /* 클래스나 ID는 불러오는게 자주 반복되고 그러면 식이 빨주노초파남보색으로 개길어지니까 변수선언부터 해줍니다 */

  /* 굳이 전역변수로 쓸 이유가 없으면 지역변수로 쓰는게 낫다고 해서
  함수 안에서 선언함 */

  let pw1 = document.getElementsByClassName("input-pw")[0].value;

  let pw2 = document.getElementsByClassName("input-pw2")[0].value;

  let check = document.getElementsByClassName("check-password")[0];

  // 비밀번호가 일치하지 않으면?

  if (pw1 !== pw2) {
    // 빨간색 글자로 '비밀번호가 일치하지 않습니다' 문구가 뜰 거임

    check.style.color = "#e60012";

    check.innerHTML =
      '<span><i class="fa-solid fa-circle-exclamation"></i> 비밀번호가 일치하지 않습니다</span>';
  } else {
    // 정상적으로 일치하면 문자 안뜸

    check.innerHTML = "";
  }
};

//함수실행 ㄱ

checkPw;
