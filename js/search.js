// "use strict";

$(document).ready(function() {
  const navInputForm = $(".nav__input__form");
  const navInputDiv = $(".nav__input");
  const navBtn = $(".small__nav__btn");
  const navInput = $(".small__nav__input");

  // 클릭 시 input 너비 증가
  function addLength() {
    navInputDiv.addClass("input__div__long");
    navInput.addClass("input__long");
  }

  // 클릭 시 버튼 변경
  function changeBtn() {
    navBtn.addClass("input__btn").removeClass("small__nav__btn");
    setTimeout(function() {
      navBtn.attr("type", "submit");
    }, 300);
  }

  // input값 전송하고 알람창
  function inputSubmit(event) {
    event.preventDefault();
    const search = navInput.val();
    if (search !== "") {
      alert(`${search} 은(는) 검색할 수 없습니다. 다른 검색어를 입력해주세요.`);
    } else {
      alert("검색어를 입력하세요.");
    }
  }

  navBtn.on("click", function() {
    changeBtn();
    addLength();
  });

  navInputForm.on("submit", inputSubmit);
});
