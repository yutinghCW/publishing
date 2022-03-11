$('.hamburger').click(function() {
  $('.hamburger, header, nav, .black').toggleClass('opened');
});

$('.open-search').click(function() {
  $('.collapse-nav').slideToggle({
    start: function () {
      $(this).css({
        display: "flex"
      })
    }
  });
  $(this).children('i').toggleClass('icon-close');
});

$('.open-block').click(function() {
  $(this).toggleClass('opened');
  $(this).siblings('.block').slideToggle();
  $(this).parent().siblings('li').children('.open-block').removeClass('opened');
  $(this).parent().siblings('li').children('.block').slideUp();
});
