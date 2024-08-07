$(document).ready(function() {
  const arrowBtn = $(".footer__arrow");
  
  // list 목록
  const serviceList = $(".service__m__list");
  const companyList = $(".company__m__list");
  const corporateList = $(".corporate__m__list");
  const partnershipList = $(".partnership__m__list");
  const onlineList = $(".community__m__list");
  const recruitList = $(".recruit__m__list");
  
  // arrow 버튼
  const serviceBtn = arrowBtn.eq(0);
  const companyBtn = arrowBtn.eq(1);
  const corporateBtn = arrowBtn.eq(2);
  const partnershipBtn = arrowBtn.eq(3);
  const onlineBtn = arrowBtn.eq(4);
  const recruitBtn = arrowBtn.eq(5);
  
  serviceBtn.on("click", function() {
    serviceList.toggleClass("disappear");
  });
  
  companyBtn.on("click", function() {
    companyList.toggleClass("disappear");
  });
  
  corporateBtn.on("click", function() {
    corporateList.toggleClass("disappear");
  });
  
  partnershipBtn.on("click", function() {
    partnershipList.toggleClass("disappear");
  });
  
  onlineBtn.on("click", function() {
    onlineList.toggleClass("disappear");
  });
  
  recruitBtn.on("click", function() {
    recruitList.toggleClass("disappear");
  });
});
