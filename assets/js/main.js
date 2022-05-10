var width = $(window).width();

$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      let headerOffset = 91;
      if ( width >=  1024 ) {
        headerOffset = 190;
      } else {
        headerOffset = 91;
      }
      $('html, body').animate({
        scrollTop: (target.offset().top - headerOffset)
      }, 1000);
      return false;
    }
  }
});

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

$('.book-page .content').each(function() {
  let contentHeight = $(this).height();
  if ( width >= 1024 && contentHeight > 365 ) {
    $(this).parent().addClass('ellipsis-block');
  } else if ( width < 1024 && contentHeight > 470 ) {
    $(this).parent().addClass('ellipsis-block');
  } else {
    $(this).parent().removeClass('ellipsis-block');
  }
});
$('.book-page .table-of-content').each(function() {
  let contentHeight = $(this).height();
  if ( width >= 1024 && contentHeight > 240 ) {
    $(this).parent().addClass('ellipsis-block');
  } else if ( width < 1024 && contentHeight > 300 ) {
    $(this).parent().addClass('ellipsis-block');
  } else {
    $(this).parent().removeClass('ellipsis-block');
  }
});
$('.book-page .cards-author-intro').each(function() {
  let itemLength = $(this).children('.card-item').length;
  if ( width >= 1024 && itemLength > 2 ) {
    $(this).addClass('ellipsis-block');
  } else if ( width < 1024 && itemLength > 1 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).removeClass('ellipsis-block');
  }
});
$('.book-page .cards-digest, .author-page .cards-digest').each(function() {
  let itemLength = $(this).children('.card-digest').length;
  if ( itemLength > 4 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).removeClass('ellipsis-block');
  }
});
$('.book-page .cards-video, .author-page .cards-video').each(function() {
  let itemLength = $(this).children('.card-video').length;
  if ( width >= 1024 && itemLength > 3 ) {
    $(this).addClass('ellipsis-block');
  } else if ( width < 1024 && itemLength > 2 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).removeClass('ellipsis-block');
  }
});
$('.author-page .author-intro p').each(function() {
  let introHeight = $(this).height();
  console.log(introHeight);
  if ( width < 1024 && introHeight > 1.5*6*16 ) {
    $(this).parent().addClass('ellipsis-block');
  } else {
    $(this).parent().removeClass('ellipsis-block');
  }
});

$('.more').click(function() {
  $(this).parent().removeClass('ellipsis-block');
  $(this).parent().addClass('expand-block');
});
$('.collapse').click(function() {
  $(this).parent().removeClass('expand-block');
  $(this).parent().addClass('ellipsis-block');
});

const _document = document.querySelector.bind(document);
const _documents = document.querySelectorAll.bind(document);
let activeLink = null;
window.addEventListener("scroll", () => {
  _documents(".unit-section").forEach(section => {
    const { y } = section.getBoundingClientRect();
    if ((y - 220) <= 0) {
      if (activeLink != null) {
        activeLink.classList.remove("active");
      }
      activeLink = _document(`nav > ol > li > a[href~="#${section.id}"]`);
      activeLink.classList.add("active");
    }
  });
});

let displayFixedNavState = 0;

function displayFixedNav(state) {
  if ( width < 1024 ) {
    if ( state > 1 ) {
      $('aside').fadeIn();
    } else {
      $('aside').fadeOut();
    }
  }
}

var lastScrollTop = 0, delta = 5;
$(window).scroll(function(){
  displayFixedNavState = 0;
  displayFixedNav(displayFixedNavState);
  // var nowScrollTop = $(this).scrollTop();
  // if(Math.abs(lastScrollTop - nowScrollTop) >= delta){
  //   if (nowScrollTop > lastScrollTop){
  //     // SCROLLING DOWN
  //   } else {
  //     // SCROLLING UP
  //   }
  //   lastScrollTop = nowScrollTop;
  // }
});

// 0.3秒沒動作後移除顯示
setInterval(() => {
  displayFixedNavState++;
  displayFixedNav(displayFixedNavState);
}, 300);
