$(document).ready(function() {
  const noticeBtn = $(".Notice__promo__btn");
  const slide = $(".slide__box");
  const play = $(".play");
  const leftArrow = $(".arrow__left");
  const rightArrow = $(".arrow__right");
  const slideImage = $(".banner__img");
  const banner = $(".banner");
  const checkBox = $("input[type=checkbox]");

  let currentIndex = 0;
  let imageCount = banner.length;
  let originLeft = -1269;

  // slide 등장 & 사라짐
  function showSlide() {
    slide.toggleClass("slide__show");
  }

  // 반응형 초기 값
  if (window.matchMedia("(max-width: 1100px)").matches) {
    slideImage.css("left", "500px");
  }

  // 슬라이드 이동
  function goToSlide(idx) {
    if (window.matchMedia("(max-width: 1100px)").matches) {
      slideImage.css("left", 500 - 520 * idx + "px");
    } else {
      slideImage.addClass("animated");
      slideImage.css("left", originLeft - 839.5 * idx + "px");
    }
    currentIndex = idx;
  }

  // 오른쪽으로 이동
  function moveRight() {
    goToSlide(currentIndex + 1);
    loopSlide();
    changeIcon();
    controlOpacity();
  }

  // 왼쪽으로 이동
  function moveLeft() {
    goToSlide(currentIndex - 1);
    loopSlide();
    changeIcon();
    controlOpacity();
  }

  setTimeout(function() {
    slideImage.addClass("slide__animate");
  }, 100);

  // 슬라이드 자동 실행
  let moveslide;
  function startSlide() {
    moveslide = setInterval(moveRight, 3000);
  }

  // 슬라이드 자동 실행 정지
  function stopSlide() {
    clearInterval(moveslide);
  }

  // 무한 루프 loop
  function leftLoop() {
    setTimeout(function() {
      slideImage.css("left", "-429.5px");
      slideImage.removeClass("slide__animate");

      goToSlide(2);
    }, 500);

    // 0.1초 후 class 다시 원상복구
    setTimeout(function() {
      slideImage.addClass("slide__animate");
    }, 600);
  }

  function rightLoop() {
    setTimeout(function() {
      slideImage.removeClass("slide__animate");
      slideImage.css("left", "-429.5px");
      goToSlide(0);
    }, 500);
    // // 0.1초 후 class 다시 원상복구
    setTimeout(function() {
      slideImage.addClass("slide__animate");
    }, 600);
  }

  function loopSlide() {
    if (currentIndex === 3) {
      rightLoop();
    } else if (currentIndex === -1) {
      leftLoop();
    }
  }

  // play -> stop
  let clickCnt = 0;
  function changePlay() {
    clickCnt++;
    console.log(clickCnt);
    if (clickCnt % 2 === 1) {
      play.attr("src", "image/Slide/main_prom_play.png");
      stopSlide();
    } else if (clickCnt % 2 === 0) {
      play.attr("src", "image/Slide/main_prom_stop.png");
      setTimeout(moveRight, 500);
      startSlide();
    }
  }

  // slide 아이콘 변경
  function changeIcon() {
    if (currentIndex === 0 || currentIndex === 3) {
      changeFirstIcon();
    } else if (currentIndex === 1) {
      changeSecondIcon();
    } else if (currentIndex === -1 || currentIndex === 2) {
      changeThirdIcon();
    }
  }

  // slide circle icon
  function changeFirstIcon() {
    checkBox.eq(0).prop("checked", true);
    checkBox.eq(1).prop("checked", false);
    checkBox.eq(2).prop("checked", false);
  }

  function changeSecondIcon() {
    checkBox.eq(1).prop("checked", true);
    checkBox.eq(0).prop("checked", false);
    checkBox.eq(2).prop("checked", false);
  }

  function changeThirdIcon() {
    checkBox.eq(2).prop("checked", true);
    checkBox.eq(0).prop("checked", false);
    checkBox.eq(1).prop("checked", false);
  }

  // 투명도 조절에 필요한 clone 요소 (위쪽에 적을 수 없음)
  const cloneRight = $(".clone__right");
  const cloneLeft = $(".clone__left");

  // 투명도 조절
  function controlOpacity() {
    if (currentIndex === 1) {
      banner.eq(1).addClass("slide__opacity").removeClass("slide__opacity");
      banner.eq(2).removeClass("slide__opacity");
      banner.eq(3).addClass("slide__opacity");
    } else if (currentIndex === 2) {
      banner.eq(2).addClass("slide__opacity").removeClass("slide__opacity");
      banner.eq(3).removeClass("slide__opacity");
      banner.eq(4).addClass("slide__opacity");
    } else if (currentIndex === 3 || currentIndex === 0) {
      banner.eq(1).removeClass("slide__opacity");
      banner.eq(4).removeClass("slide__opacity");
      banner.eq(0).addClass("slide__opacity");
      banner.eq(2).addClass("slide__opacity");
      banner.eq(3).addClass("slide__opacity");
    } else if (currentIndex === -1) {
      banner.eq(1).addClass("slide__opacity");
      banner.eq(0).removeClass("slide__opacity");
      banner.eq(3).removeClass("slide__opacity");
      banner.eq(4).addClass("slide__opacity");
    }
  }

  // 버튼 클릭 시 이미지 이동
  function moveFirstImage() {
    goToSlide(0);
    controlOpacity();
    changeFirstIcon();
  }
  function moveSecondImage() {
    goToSlide(1);
    controlOpacity();
    changeSecondIcon();
  }
  function moveThirdImage() {
    goToSlide(2);
    controlOpacity();
    changeThirdIcon();
  }

  function moveIcon() {
    if (checkBox.eq(0).prop("checked")) {
      checkBox.eq(1).on("click", moveSecondImage);
      checkBox.eq(2).on("click", moveThirdImage);
    }
    if (checkBox.eq(1).prop("checked")) {
      checkBox.eq(0).on("click", moveFirstImage);
      checkBox.eq(2).on("click", moveThirdImage);
    }
    if (checkBox.eq(2).prop("checked")) {
      checkBox.eq(0).on("click", moveFirstImage);
      checkBox.eq(1).on("click", moveSecondImage);
    }
  }

  moveIcon();
  changeFirstIcon();
  loopSlide();

  noticeBtn.on("click", showSlide);
  noticeBtn.on("click", startSlide);
  rightArrow.on("click", moveRight);
  leftArrow.on("click", moveLeft);
  play.on("click", changePlay);
});
