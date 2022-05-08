var width = $(window).width();

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

$('.card-video').click(function() {
  let videoUrl = $(this).attr('data-video');
  $('.modal iframe.embed-responsive-item').attr('src', `${videoUrl}?rel=0&autoplay=1`);
  $('.modal').fadeIn();
  $('.black').addClass('opened modal-black');
});
$('.modal-close').click(function() {
  $('.modal iframe.embed-responsive-item').attr('src', '');
  $('.modal').fadeOut();
  $('.black').removeClass('opened modal-black');
});

$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      let headerOffset = 71;
      if ( width >=  1024 ) {
        headerOffset = 170;
      } else {
        headerOffset = 71;
      }
      $('html, body').animate({
        scrollTop: (target.offset().top - headerOffset)
      }, 1000);
      return false;
    }
  }
});
