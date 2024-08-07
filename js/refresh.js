$(document).ready(function() {
  var scrollpos = localStorage.getItem("scrollpos");
  if (scrollpos) $(window).scrollTop(scrollpos);

  $(window).on("beforeunload", function() {
    localStorage.setItem("scrollpos", $(window).scrollTop());
  });
});
