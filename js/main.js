

const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');

window.addEventListener('scroll', _.throttle(function () {
  console.log(scrollY);
  if(window.scrollY > 500) {
    // 배지 숨기기
    //gsap.to(요소, 지속시간, 옵션)
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none'
    });
    //버튼 보이기
    gsap.to(toTopEl, .2, {
      x: 0,
    });
  } else{
    // 배지 보이기
        gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100,
    });
  }
}, 300));
// _.throttle(함수,시간)

toTopEl.addEventListener('click', function () {
  gsap.to(window, .7, {
    scrollTo: 0
  });
});


const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function (fadeEl, index) {
  gsap.to(fadeEl, 1, {
    delay: (index + 1)*.7, //0.7, 1.4, 2.1, 2.7
    opacity: 1
  })
});

new Swiper('.notice-line .swiper-container', {
  direction: 'vertical', //방향
  autoplay: true, 
  loop: true
});

new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, // 슬라이드 사이여백 10px
  centeredSlides: true, //1번슬라이드가 가운데보이기
  loop: true,
  // autoplay: {
  //  delay: 5000
  //  }
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true // 사용자의 페이지 번호 요소 제어
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전버튼
    nextEl: '.promotion .swiper-next'  //다음버튼
  }
});
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromtion = false; //프로모션 영역이 숨겨져있니?
promotionToggleBtn.addEventListener('click', function() {
  isHidePromtion = !isHidePromtion // !:반대값 반환
  if (isHidePromtion) {
    //숨김처리!!
    promotionEl.classList.add('hide');
  } else {
    //보임처리!!
    promotionEl.classList.remove('hide');
  }
});


function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector,delay, size) {
  // gsap.to(요소,시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //에니메이션 동작시간
    { //옵션
      y: size,
      repeat: -1,
      yoyo: true,//애니메이션 뒤로재생
      ease: Power1.easeInOut,
      delay:3,
      delay: random(0, delay )
    }
    );
}
floatingObject('.floating1',1, 15);
floatingObject('.floating2',.5, 15);
floatingObject('.floating3',1.5, 20);



const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시하는 요소
      triggerHook: .8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller());
});


