$('.hamburger').on('click', () => {
  $('.hamburger, header, nav, .black').toggleClass('opened');
});

$('.open-block').click(function() {
  $(this).toggleClass('opened');
  $(this).siblings('.block').slideToggle();
  $(this).parent().siblings('li').children('.open-block').removeClass('opened');
  $(this).parent().siblings('li').children('.block').slideUp();
});
