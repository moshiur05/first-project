$(document).ready(function(){

$('.moshiur').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  autoplay:true,
 prevArrow:"<i class='fa fa-angle-left left_icon'></i>",
nextArrow:"<i class='fa fa-angle-right right_icon'></i>",
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});



new WOW().init();


});