$(document).ready(function() {
  const bannerList = $(".banner__content");
  let idx = 0;

  function moveBanner() {
    bannerList.hide();
    $(bannerList[idx]).show();
    idx = (idx + 1) % bannerList.length;
  }

  setInterval(moveBanner, 2000);
});
