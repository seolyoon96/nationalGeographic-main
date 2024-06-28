gsap.to('.whale-sea', {
    y: 300, // y축 방향으로 이동
    duration: 0.5,
    // ease: 'power1.out',
    // yoyo: true, // 애니메이션을 왕복
    // repeat: -1, // 무한 반복
    scrollTrigger: {
        trigger: '.sec01',
        start: '0 200px',
        end: 'bottom bottom',
        scrub: 1,
    },
});
gsap.to('.bg-sea', {
    scale: 1.1,
    duration: 3,
    scrollTrigger: {
        trigger: '.sec01',
        start: 'top 335px',
        end: 'bottom bottom',
        scrub: true,
    },
});

// sec01


var swiper = new Swiper('.sec02-slide', {
    slidesPerView: 1, // 한 번에 보여지는 슬라이드 개수를 1로 설정
    slidesPerGroup: 1, // 한 번에 그룹으로 묶는 슬라이드 개수를 1로 설정
    centeredSlides: true,
    loop: true, // 루프 모드 활성화
    effect: 'fade',
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

var swiper = new Swiper('.sec02-slide2', {
    slidesPerView: 1, // 한 번에 보여지는 슬라이드 개수를 1로 설정
    slidesPerGroup: 1, // 한 번에 그룹으로 묶는 슬라이드 개수를 1로 설정
    centeredSlides: true,
    loop: true, // 루프 모드 활성화
    effect: 'fade',
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

gsap.to('.category > li:first-child', {
  xPercent: 150,
  opacity: 1,
  delay: 5,
  duration: 5,
  scrollTrigger: {
    trigger: '.sec02',
    start: 'top 700px',
    end: 'bottom bottom',
    scrub: true,
    markers: false,
  },
});
gsap.to('.category > li:nth-child(2) > span', {
  xPercent: -160,
  opacity: 1,
  delay: 5,
  duration: 5,
  scrollTrigger: {
    trigger: '.sec02',
    start: 'top 700px',
    end: 'bottom bottom',
    scrub: true,
  },
});
gsap.to('.category > li:nth-child(3)', {
  xPercent: 130,
  opacity: 1,
  delay: 1,
  duration: 1,
  scrollTrigger: {
    trigger: '.sec02',
    start: 'top 500px',
    end: 'bottom bottom',
    scrub: true,
  },
});
gsap.to('.category > li:nth-child(4) > span', {
  xPercent: 100,
  opacity: 1,
  delay: 10,
  duration: 10,
  scrollTrigger: {
    trigger: '.sec02',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: true,
  },
});
gsap.to('.category > li:last-child', {
  xPercent: -160,
  opacity: 1,
  delay: 10,
  duration: 10,
  scrollTrigger: {
    trigger: '.sec02',
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: true,
  },
});

// sec02


// gsap.to('.horse', {
//   y: 300,
//   duration: 0.5,
//   scrollTrigger: {
//     trigger: '.sec03',
//     start: '0 50px',
//     end: 'bottom bottom',
//     scrub: 1,
//   },
// });

gsap.to('span.sec03-txt-01', {
  xPercent: -400,
  opacity: 1,
  delay: 1,
  duration: 5,
  scrollTrigger: {
    trigger: '.sec03',
    start: 'top 200px',
    end: 'bottom bottom',
    scrub: true,
  },
});

gsap.to('span.sec03-txt-02', {
  xPercent: -300,
  opacity: 1,
  delay: 1,
  duration: 5,
  scrollTrigger: {
    trigger: '.sec03',
    start: 'top center',
    end: 'bottom bottom',
    scrub: true,
  },
});

// gsap.to('span.sec03-txt-03', {
//   xPercent: -110,
//   opacity: 1,
//   delay: 1,
//   duration: 5,
//   scrollTrigger: {
//     trigger: '.sec03',
//     start: 'top center',
//     end: 'bottom bottom',
//     scrub: true,
//   },
// });

// gsap.to('span.sec03-txt-04', {
//   xPercent: -80,
//   opacity: 1,
//   delay: 1,
//   duration: 5,
//   scrollTrigger: {
//     trigger: '.sec03',
//     start: 'top center',
//     end: 'bottom bottom',
//     scrub: true,
//   },
// });

// sec03


gsap.to('.leopard-cir-goto', {
  yPercent: -1000, // y축 방향으로 이동
  duration: 0.5,
  // ease: 'power1.out',
  // yoyo: true, // 애니메이션을 왕복
  // repeat: -1, // 무한 반복
  scrollTrigger: {
    trigger: '.sec04',
    start: 'top top',
    end: 'bottom bottom',
    scrub: 1,
  },
});


gsap.to('button > img', {
  rotation: '-=360',
  duration: 30,
  repeat: -1,
  ease: 'slow(0.9, 0.9)',
});
// sec09

