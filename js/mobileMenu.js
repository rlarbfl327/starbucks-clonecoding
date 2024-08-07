$(document).ready(function() {
  const menuIcon = $(".fa-bars");
  const menu = $(".mobile__menu");
  const close = $(".fa-times");
  const dim = $(".mobile__menu__dim");

  // 검색창
  const searchInput = $(".menu__input");
  const searchBtn = $(".menu__btn");
  const searchForm = $(".menu__form");

  // arrow button
  const arrowMobileBtn = $(".fa-chevron-down");

  const starbucksBtn = arrowMobileBtn.eq(0);
  const coffeeBtn = arrowMobileBtn.eq(1);
  const storeBtn = arrowMobileBtn.eq(2);
  const responsibilityBtn = arrowMobileBtn.eq(3);
  const rewardsBtn = arrowMobileBtn.eq(4);
  const newBtn = arrowMobileBtn.eq(5);

  // list
  const starbucksList = $(".My__Starbucks__m__list");
  const coffeeList = $(".COFFEE__m__list");
  const storeList = $(".STORE__m__list");
  const responsibilityList = $(".RESPONSIBILITY__m__list");
  const rewardsList = $(".Starbucks__Rewards__m__list");
  const newList = $(".WHATS__NEW__m__list");

  menuIcon.on("click", function() {
    menu.addClass("menu__show").removeClass("menu__hide");
    dim.addClass("menu__show");
  });

  close.on("click", function() {
    menu.addClass("menu__hide").removeClass("menu__show");
    dim.removeClass("menu__show");
  });

  // search
  // input값 전송하고 알람창
  function inputSubmit(event) {
    event.preventDefault();
    const search = searchInput.val();
    if (search !== "") {
      alert(`${search} 은(는) 검색할 수 없습니다. 다른 검색어를 입력해주세요.`);
    } else {
      alert("검색어를 입력하세요.");
    }
  }

  searchForm.on("submit", inputSubmit);

  // list
  starbucksBtn.on("click", function() {
    starbucksList.toggleClass("disappear");
  });

  coffeeBtn.on("click", function() {
    coffeeList.toggleClass("disappear");
  });

  storeBtn.on("click", function() {
    storeList.toggleClass("disappear");
  });

  responsibilityBtn.on("click", function() {
    responsibilityList.toggleClass("disappear");
  });

  rewardsBtn.on("click", function() {
    rewardsList.toggleClass("disappear");
  });

  newBtn.on("click", function() {
    newList.toggleClass("disappear");
  });
});
