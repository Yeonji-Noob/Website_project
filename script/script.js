// marquee 태그 효과 script //

/*----------------------------------------------------------------------------------------------------
왼쪽부터 뷰포트와 ul 컨테이너의 left 거리, li의 right 거리를 getBoundingClientRect() 메소드로 계산하여 
marginLeft = -1씩 옆으로 밀어서 정해진 초마다 계속 누적되다가 일정 값에 도달하면 초기화시키고
li 요소가 appendChild로 맨 뒤로 무한히 계속해서 보내지는
원리로, 직접 공부 후 적용해보았습니다.
----------------------------------------------------------------------------------------------------*/

/* ---관련 효과 블로그 글 작성 https://demi-dev.tistory.com/23 ---*/

document.addEventListener("DOMContentLoaded", () => {
  const containerElem = document.getElementById("marqueeContainer");
  const containerLeft = containerElem.getBoundingClientRect().left;
  const listElem = document.getElementById("marquee--list");
  let currentLeftValue = 0;

  /* 초당 한번찍 찍어내기 */
  window.setInterval(animationLoop, 30);

  /* 무한루프 애니메이션 함수 */
  function animationLoop() {
    const firstListItem = listElem.querySelector(".list__item:first-child");

    let rightSideOfFirstItem = firstListItem.getBoundingClientRect().right;

    if (rightSideOfFirstItem == containerLeft) {
      currentLeftValue = -1;
      listElem.appendChild(firstListItem);
    }

    listElem.style.marginLeft = `${currentLeftValue}px`;
    currentLeftValue--;
  }
});

/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/

// 헤더 메인메뉴 슬라이드 script //

var swiper = new Swiper(".firstSwiper", {

  // swiper의 on 
  on: {
    // slideChange는 활성화된 슬라이드가 바뀔 때마다 호출하는 이벤트
    slideChange: function () {
      const title =
        this.slides[this.activeIndex].querySelectorAll("#slide1-text p");
      let tl = gsap.timeline();
      tl.from(title, 1.8, {
        duration: 1,
        opacity: 0,
        y: 120,
        ease: "power4.out",
        skewY: 5,
        stagger: {
          amount: 0.3,
        },
      });
    },
  },


  autoHeight: true,
  // autoWidth: true,

  loop: true,

  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/

// gunpla 도어 오픈 애니메이션 (scroll trigger) //

gsap.registerPlugin(ScrollTrigger);
gsap.to([".left-door", ".right-door"], {
  scrollTrigger: {
    trigger: ".left-door",
    start: "top center",
    end: "bottom center",
    scrub: true,
  },
  x: function (i) {
    return i === 0 ? -600 : 600;
  },
  duration: 5,
});

/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/

// gunpla swiper slide //

var swiper = new Swiper(".secondSwiper", {

  on: {
    slideChange: function () {

      gsap.fromTo(".mercury-logo", {
        autoAlpha: 0,
        y: 30
      }, {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        delay: 1
      })

      gsap.fromTo(".mercury-text", {
        autoAlpha: 0,
        opacity: 0,
      }, {
        autoAlpha: 1,
        opacity:1,
        duration: 3,
        delay: 0.5
      })



      gsap.fromTo(".unleashed-gundam-text1", {
        autoAlpha: 0,
        y: 30
      }, {
        autoAlpha: 1,
        duration: 0.5,
        y: 0,
        delay: 0.5
      })

      gsap.fromTo(".unleashed-gundam-text2", {
        autoAlpha: 0,
        y: 30
      }, {
        autoAlpha: 1,
        duration: 2,
        y: 0,
        delay: 0.5
      })


      gsap.fromTo(".unleashed-gundam", {
        autoAlpha: 0,
        x: 30
      }, {
        autoAlpha: 1,
        duration: 1,
        x: 0,
        delay: 1
      })


      gsap.fromTo(".mgex-gundam", {
        autoAlpha: 0,
        y: 30
      }, {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        delay: 1
      })

      gsap.fromTo(".mgex-gundam-text1", {
        autoAlpha: 0,
        y: 40,
        ease: "circ.out",
      }, {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        delay: 0
      })

      gsap.fromTo(".mgex-gundam-text2", {
        autoAlpha: 0,
        y:40,
      }, {
        autoAlpha: 1,
        duration: 1,
        y: 0,
        delay: 2
      })


    }

  },

  effect: 'fade',

  loop: true,

  // autoHeight: true, 이미지 높이로 자동으로 잡음 
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});


/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/
/*-----------------------------------------------------------------------------------------------*/

// 상품 목록 swiper slide //

var swiper = new Swiper(".thirdSwiper", {



  loop: true,
  slidesPerView: 3,
  spaceBetween: 50,
  autoHeight: true,
  autowidth: true,
  autoplay: {
    delay: 3000,
  },

  navigation: {
    nextEl: ".slide3-button-next",
    prevEl: ".slide3-button-prev",
  },

});