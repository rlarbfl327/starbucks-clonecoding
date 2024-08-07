// "use strict";

$(document).ready(function() {
  const badge = $('.badge');
  const badgeClose = $('.close__badge');

  badgeClose.on('click', function() {
    badge.css('opacity', '0');
  });
});
