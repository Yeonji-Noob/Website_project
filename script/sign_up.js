// --------------------------------------------------------------- //

let checkPw = () => {
  /* 변수선언 */

  let pw1 = document.getElementsByClassName("input-pw")[0].value;

  let pw2 = document.getElementsByClassName("input-pw2")[0].value;

  let check = document.getElementsByClassName("check-password")[0];

  // 비밀번호가 일치하지 않으면?

  if (pw1 !== pw2) {
    // 빨간색 글자로 '비밀번호가 일치하지 않습니다' 문구가 뜰 것

    check.style.color = "#e60012";

    check.innerHTML =
      '<span><i class="fa-solid fa-circle-exclamation"></i> 비밀번호가 일치하지 않습니다</span>';
  } else {
    // 정상적으로 일치하면 문자 안뜸

    check.innerHTML = "";
  }
};

//함수실행

checkPw();

// --------------------------------------------------------------- //



// --------------------------------------------------------------- //
/* 다음 버튼을 누르면 페이지가 다음 화면으로 바뀜 */

// '다음'버튼
let nextButton = document.getElementById("button1");

// 아이디/비밀번호 박스
let idPasswordBox = document.getElementById("id-password");

// 회원약관 박스
let termsUse = document.getElementById("terms-use");

// 취소&동의 버튼
let cancelAgreeButton = document.getElementsByClassName("bottom-menu2")[0];

//함수 시작//
let changePage = () => {
  nextButton.addEventListener("click", () => {
    let pwValue = document.getElementsByClassName("input-pw")[0].value;

    let pwValue2 = document.getElementsByClassName("input-pw2")[0].value;

    if (pwValue !== pwValue2) {
      idPasswordBox.style.display = "block";
      nextButton.style.display = "block";
    }

    if (pwValue == pwValue2 && pwValue.length > 0) {
      idPasswordBox.style.display = "none";
      nextButton.style.display = "none";

      termsUse.style.display = "block";
      termsUse.classList.add("appear");

      cancelAgreeButton.style.display = "inline-block";
    }
  });
};

//함수실행
changePage();
// --------------------------------------------------------------- //



// --------------------------------------------------------------- //
// --------------------------------------------------------------- //
/*------------------------ 진행바 채우기------------------------- */


let progressChange = () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("button1").addEventListener("click", () => {
      let interval = setInterval(() => {

        let progressBar = document.getElementById("progress")

        progressBar.value++;

        if (progressBar.value == 60) {
          let valueStop = () => {
            clearInterval(interval);
          };

          valueStop();
        }
      }, 20);
    });
  });
};

//함수실행
progressChange();

// --------------------------------------------------------------- //
// --------------------------------------------------------------- //


