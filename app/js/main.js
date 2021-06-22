$(function () {

  $('.menu__btn').on('click', function(){
    $('.header__inner').toggleClass('header__inner--active');
  });

  $('.filter__btn').on('click', function(){
    $('.shop__filter').slideToggle();
  });

  $(".details-tabs__top-item").on('click', function(e){
    e.preventDefault();
    $(".details-tabs__top-item").removeClass("details-tabs__top-item--active");
    $(this).addClass("details-tabs__top-item--active");

    $(".details-tabs__content-item").removeClass("details-tabs__content-item--active");
    $($(this).attr('href')).addClass("details-tabs__content-item--active");
  });

  $(".details-slide__thumb").slick({
    asNavFor: ".details-slide__big",
    focusOnSelect: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    vertical: true,
    draggable: false,
    fade: true,
    arrows: false
  });
  $(".details-slide__big").slick({
    asNavFor: ".details-slide__thumb",
    draggable: false,
    arrows: false,
    responsive: [
    {
      breakpoint: 1101,
      settings: {
        draggable: true,
      }
    }
    ]
  });

  $(".details-slider__items").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    prevArrow:
      '<button class="slick-prev slick-arrow" type="button" style=""><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path fill="#436372" d="M1547.3,2629.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1547.3,2629.47Z" transform="translate(-1547 -2624)"/></svg></button>',
    nextArrow:
      '<button class="slick-next slick-arrow" type="button" style=""><svg xmlns="http://www.w3.org/2000/svg" width="22" height="9" viewBox="0 0 22 9"><path fill="#436372" d="M1547.3,2629.47h16.94l-0.1,2.86a0.3,0.3,0,0,0-.08.2,0.323,0.323,0,0,0,.08.21l0.18,0.17a0.267,0.267,0,0,0,.4,0l4.2-4.21a0.3,0.3,0,0,0,.08-0.2,0.323,0.323,0,0,0-.08-0.21l-4.2-4.21a0.29,0.29,0,0,0-.4,0l-0.18.17a0.323,0.323,0,0,0-.08.21,0.318,0.318,0,0,0,.08.2l0.12,2.86h-16.97a0.3,0.3,0,0,0-.29.3v1.37A0.291,0.291,0,0,0,1547.3,2629.47Z" transform="translate(-1547 -2624)"/></svg></button>',
      responsive: [
    {
      breakpoint: 1101,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 970,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 850,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
  });

  $(".details__content-input").styler();

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
    onChange: function (data) {
      $(".filter-price__from").text(data.from);
      $(".filter-price__to").text(data.to);
    },
  });

  $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".details__content-star").rateYo({
    starWidth: "18px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true,
  });

  $(".top-slider__inner").slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  var mixer = mixitup(".products__content");

  var mixer = mixitup(".design-content");
});
