$(function() {

  // Скрипт для фиксации header__bottom
  var headerBottom = $('#headerBottom');
  var scrollOffset = $(window).scrollTop();;

  checkScroll(scrollOffset);

  $(window).on('scroll', function () {
    
    scrollOffset = $(this).scrollTop();

    checkScroll(scrollOffset);
    
  });


  // К header-bottom добавляется класс __fixed
  function checkScroll(scrollOffset) {
    if (scrollOffset >= headerNav) {
      headerBottom.addClass("header-bottom__fixed");
    } else {
      headerBottom.removeClass("header-bottom__fixed");
    }
  };

  
  // Скрипт для вызова меню по кнопке burger
  var burgerButton = $('#burgerButton');
  var headerNav = $('#headerTopNav').innerHeight();
  var closeButton = $('#closeButton');
  var body = $('body');

  // Открыть меню
  burgerButton.on('click', function () {
    headerBottom.addClass("active");
    body.addClass("active");
  });

  // Закрыть меню
  closeButton.on('click', function () {
    headerBottom.removeClass("active");
    body.removeClass("active");
  });


  // Smooth scroll
  $('[data-scroll]').on('click', function(event) {
    event.preventDefault();
    headerBottom.removeClass("active");
    body.removeClass("active");

    var blockId = $(this).data('scroll');
    var blockOffset = $(blockId).offset().top;

    $('html, body').animate({
      scrollTop: blockOffset
    }, 500);
  });


  // Кнопка для вызова блока .services__item-3
  var show = $('#moreDetails');
  var details = $('.services__item:nth-child(3)');
  
  show.on('click', function () {
    details.css("display", "block");
  });

  
  //Кнопка "Читать больше"
  var readMore = $('#readMore');
  var fullText = $('#fullText');
  var after = $('#after');

  //Скрывается псевдоэлемент :after у блока "Читать больше"
  readMore.on('click', function () {
    after.removeClass("read-more__content");
    fullText.css("display", "inline-block");
    readMore.css("display", "none");
  });


  // Скрипты для слайдеров

  $('.features__inner').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.why__inner').slick({
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.package__inner').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.prorerty__content').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.feedback__inner').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.arrows-prev'),
    nextArrow: $('.arrows-next'),
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });

  $('.partners__inner').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 567,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });

});