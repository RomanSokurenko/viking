$(function(){

   $('[data-fancybox]').fancybox({
    youtube : {
        controls : 0,
        showinfo : 0
    },
   
   });
   
    $('.heroes__slider-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.heroes__slider-text',
       prevArrow: '<button class="slick-btn slick-prev"><img src="./images/arrow-l.png" alt="prev"></button>'
  
});
$('.heroes__slider-text').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
   asNavFor: '.heroes__slider-img',
  fade: true,
});
});