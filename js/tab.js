// "use strict";

$(document).ready(function() {
  const mainItems = $(".main__nav__items");
  const coffeeTab = $(".coffee__tab");
  const tab = $(".tab");

  function startHover() {
    coffeeTab.addClass("show").removeClass("hide");
  }

  function endHover() {
    setTimeout(function() {
      coffeeTab.addClass("hide").removeClass("show");
    }, 200);
  }

  mainItems.on("mouseover", function() {
    startHover();
    tab.addClass("tab__slide");
  });

  mainItems.on("mouseout", function() {
    endHover();
    tab.removeClass("tab__slide");
  });
});
