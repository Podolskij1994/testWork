$(document).ready(function () {
  $('.accordeon__item').click(function (e) {
    var $thisBottom = $('.accordeon__bottom', this)
    if ($thisBottom[0].style.display === "block") {
      $thisBottom.slideUp()
    }
    else {
      $('.accordeon__bottom').slideUp();
      $thisBottom.slideDown();
      $thisBottom.classList.add('active')
    }
  });
});