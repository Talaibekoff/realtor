$(function() {

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

  $('.feedback__inner').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: $('.feedback__arrows-prev'),
    nextArrow: $('.feedback__arrows-next'),
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

  $('.partners__inner').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow: $('.arrows-prev'),
    nextArrow: $('.arrows-next'),
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

  var show = $('#moreDetails');
  var details = $('.services__item:nth-child(3)');
  
  show.on('click', function () {
    details.css("display", "block");
  });
  
  var readMore = $('#readMore');
  var fullText = $('#fullText');
  var after = $('#after');


  readMore.on('click', function () {
    after.removeClass("read-more__content");
    fullText.css("display", "inline-block");
    readMore.css("display", "none");
  });

});