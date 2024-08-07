$(document).ready(function() {
  const papuaContent = $("#Papua__content");
  const papuaImg = $("#Papua__coffee__img");
  const brazilImg = $(".Brazil__coffee__half__bg");
  const pickTxt = $(".Pick__menu__txt");
  const reserveTitle = $(".Reserve__title");
  const reserveBtn = $(".Reserve__btn");
  const storeTxt = $(".Store__txt");

  // Papua
  $(document).scroll(function() {
    if ($(window).scrollTop() > 510) {
      papuaContent.addClass("Papua__coffee__content show");
      papuaImg.addClass("Papua__coffee__img__ani show");
    }
  });

  // Brazil
  $(document).scroll(function() {
    if ($(window).scrollTop() > 1190) {
      brazilImg.addClass("show");
    }
  });

  // Pick menu
  $(document).scroll(function() {
    if ($(window).scrollTop() > 1480) {
      pickTxt.css("animation", "pick__right 2s");
      pickTxt.addClass("show");
    }
  });

  // Reserve
  $(document).scroll(function() {
    if ($(window).scrollTop() > 2220) {
      reserveTitle.css("animation", "reserve__right 2s");
      reserveBtn.css("animation", "reserve__btn__right 2s");
    }
  });

  // Store
  $(document).scroll(function() {
    if ($(window).scrollTop() > 2990) {
      storeTxt.css("animation", "store__left 2s");
    }
  });
});
