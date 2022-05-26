var width = $(window).width();
var height = $(window).height();

$('a.smooth-scroll[href*="#"]:not([href="#"])').click(function () {
  if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      let headerOffset = 0;
      // if ( width >=  1024 ) {
      //   headerOffset = 190;
      // } else {
      //   headerOffset = 91;
      // }
      $('html, body').animate({
        scrollTop: (target.offset().top - headerOffset)
      }, 500);
      return false;
    }
  }
});

if ( width < 1024 ) {
  $('.hamburger').click(function() {
    $('body, .hamburger, header, nav').toggleClass('opened');
  });
  $('.open-search').click(function() {
    $('body, .black').toggleClass('opened');
    $('.collapse-nav').slideToggle({
      start: function () {
        $(this).css({
          display: "flex"
        })
      }
    });
    $(this).children('i').toggleClass('icon-close');
  });
  $('nav.menu > ul > li.group').click(function() {
    $(this).children('.open-block').toggleClass('opened');
    $(this).children('.block').slideToggle();
    $(this).siblings('li.group').children('.open-block').removeClass('opened');
    $(this).siblings('li.group').children('.block').slideUp();
  });
}

$('.card-video').click(function() {
  let videoUrl = $(this).attr('data-video');
  let videoTitle = $(this).attr('data-title');
  $('.modal-video iframe.embed-responsive-item').attr('src', `${videoUrl}?rel=0&autoplay=1`);
  $('.modal-video .embed-title').text(videoTitle);
  $('.modal-video').fadeIn();
  $('.black').addClass('opened modal-black');
});
$('.modal-close, .black').click(function() {
  $('.modal-video iframe.embed-responsive-item').attr('src', '');
  $('.modal-book .card-img img').attr('src', '');
  $('.modal').fadeOut();
  $('body').removeClass('opened');
  $('.black').removeClass('opened modal-black');
});

$('.cards-book-master .card-book-master').click(function(e) {
  let img = $(this).data('img');
  $('.modal-book .card-img img').attr('src', img);
  $('.modal-book').fadeIn();
  $('body').addClass('opened');
  $('.black').addClass('opened modal-black');
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
$('.books-page .cards-books').each(function() {
  let itemLength = $(this).children('.card-books').length;
  if ( width >= 1024 && itemLength > 15 ) {
    $(this).addClass('ellipsis-block');
  } else if ( width < 1024 && itemLength > 12 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).addClass('expand-block');
    $(this).removeClass('ellipsis-block');
  }
});
$('.authors-page .cards-authors').each(function() {
  let itemLength = $(this).children('.card-author').length;
  if ( width >= 1024 && itemLength > 15 ) {
    $(this).addClass('ellipsis-block');
  } else if ( width < 1024 && itemLength > 6 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).addClass('expand-block');
    $(this).removeClass('ellipsis-block');
  }
});
$('.articles-page .cards-digest').each(function() {
  let itemLength = $(this).children('.card-digest').length;
  if ( width >= 1024 && itemLength > 15 ) {
    $(this).addClass('ellipsis-block');
  } else if ( width < 1024 && itemLength > 12 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).addClass('expand-block');
    $(this).removeClass('ellipsis-block');
  }
});
$('.search-page .cards-books').each(function() {
  let itemLength = $(this).children('.card-books').length;
  if ( width >= 1024 && itemLength > 10 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).addClass('expand-block');
    $(this).removeClass('ellipsis-block');
  }
});
$('.search-page .cards-author').each(function() {
  let itemLength = $(this).children('.card-author').length;
  if ( width >= 1024 && itemLength > 10 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).addClass('expand-block');
    $(this).removeClass('ellipsis-block');
  }
});
$('.search-page .cards-digest').each(function() {
  let itemLength = $(this).children('.card-digest').length;
  if ( itemLength > 6 ) {
    $(this).addClass('ellipsis-block');
  } else {
    $(this).addClass('expand-block');
    $(this).removeClass('ellipsis-block');
  }
});
$('.author-page .author-intro p').each(function() {
  let introHeight = $(this).height();
  if ( width < 1024 && introHeight > 1.5*6*16 ) {
    $(this).parent().addClass('ellipsis-block');
  } else {
    $(this).parent().removeClass('ellipsis-block');
  }
});

$('.book-page .more, .author-page .more').click(function() {
  $(this).parent().removeClass('ellipsis-block');
  $(this).parent().addClass('expand-block');
});
let booksClickCal = 0;
$('.books-page .more').click(function() {
  let itemLength = $(this).parent().children('.card-books').length;
  if ( width >= 768 && itemLength > 15 ) {
    let clickTotal = Math.ceil(itemLength / 15) - 2;
    if ( booksClickCal < clickTotal ) {
      booksClickCal ++;
    } else {
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 15; i++) {
      $(this).parent().children('.card-books').eq(i+(15*booksClickCal)).show();
    }
  } else if ( width < 768 && itemLength > 6 ) {
    let clickTotal = Math.ceil(itemLength / 6) - 2;
    if ( booksClickCal < clickTotal ) {
      booksClickCal ++;
    } else {
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 6; i++) {
      $(this).parent().children('.card-books').eq(i+(6*booksClickCal)).show();
    }
  }
});
let authorsClickCal = 0;
$('.authors-page .more').click(function() {
  let itemLength = $(this).parent().children('.card-author').length;
  if ( width >= 768 && itemLength > 15 ) {
    let clickTotal = Math.ceil(itemLength / 15) - 2;
    if ( authorsClickCal < clickTotal ) {
      authorsClickCal ++;
    } else {
      $(this).parent().addClass('expand-block');
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 15; i++) {
      $(this).parent().children('.card-author').eq(i+(15*authorsClickCal)).show();
    }
  } else if ( width < 768 && itemLength > 12 ) {
    let clickTotal = Math.ceil(itemLength / 12) - 2;
    if ( authorsClickCal < clickTotal ) {
      authorsClickCal ++;
    } else {
      $(this).parent().addClass('expand-block');
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 12; i++) {
      $(this).parent().children('.card-author').eq(i+(12*authorsClickCal)).show();
    }
  }
});
let articlesClickCal = 0;
$('.articles-page .more').click(function() {
  let itemLength = $(this).parent().children('.card-digest').length;
  if ( width >= 768 && itemLength > 15 ) {
    let clickTotal = Math.ceil(itemLength / 15) - 2;
    if ( articlesClickCal < clickTotal ) {
      articlesClickCal ++;
    } else {
      $(this).parent().addClass('expand-block');
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 15; i++) {
      $(this).parent().children('.card-digest').eq(i+(15*articlesClickCal)).show();
    }
  } else if ( width < 768 && itemLength > 6 ) {
    let clickTotal = Math.ceil(itemLength / 6) - 2;
    if ( articlesClickCal < clickTotal ) {
      articlesClickCal ++;
    } else {
      $(this).parent().addClass('expand-block');
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 6; i++) {
      $(this).parent().children('.card-digest').eq(i+(6*articlesClickCal)).show();
    }
  }
});
let resultBookClickCal = 0;
$('.search-page .cards-books .more').click(function() {
  let itemLength = $(this).parent().children('.card-books').length;
  if ( width >= 1024 && itemLength > 10 ) {
    let clickTotal = Math.ceil(itemLength / 10) - 2;
    if ( resultBookClickCal < clickTotal ) {
      resultBookClickCal ++;
    } else {
      $(this).parent().addClass('expand-block');
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 10; i++) {
      $(this).parent().children('.card-books').eq(i+(10*resultBookClickCal)).show();
    }
  }
});
let resultAuthorClickCal = 0;
$('.search-page .cards-author .more').click(function() {
  let itemLength = $(this).parent().children('.card-author').length;
  if ( width >= 1024 && itemLength > 10 ) {
    let clickTotal = Math.ceil(itemLength / 10) - 2;
    if ( resultAuthorClickCal < clickTotal ) {
      resultAuthorClickCal ++;
    } else {
      $(this).parent().addClass('expand-block');
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 10; i++) {
      $(this).parent().children('.card-author').eq(i+(10*resultAuthorClickCal)).show();
    }
  }
});
let resultDigestClickCal = 0;
$('.search-page .cards-digest .more').click(function() {
  let itemLength = $(this).parent().children('.card-digest').length;
  if ( itemLength > 6 ) {
    let clickTotal = Math.ceil(itemLength / 6) - 2;
    if ( resultDigestClickCal < clickTotal ) {
      resultDigestClickCal ++;
    } else {
      $(this).parent().addClass('expand-block');
      $(this).parent().removeClass('ellipsis-block');
    }
    for (let i = 0; i < 6; i++) {
      $(this).parent().children('.card-digest').eq(i+(6*resultDigestClickCal)).show();
    }
  }
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
      activeLink = _document(`nav > ol > li > a[href~="#${section.dataset.id}"]`);
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
  var nowScrollTop = $(this).scrollTop();
  if (nowScrollTop > (height/2)){
    $('body').addClass('scroll');
  } else {
    $('body').removeClass('scroll');
  }
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
