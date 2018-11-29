var scrollposition = $(document).scrollTop();
var window_width = $(window).width();
var selectedProduct = '';
var localStorage = window['localStorage'];

// Changin class name when scroll position achieved
$(document).ready(function(){
  var prevScrollPosition = $(document).scrollTop();
  $(window).scroll(function(){ 
    var scrollposition  = $(document).scrollTop();
    // console.log(scrollposition)
  if (scrollposition > 300) {
  // $( "ul li:nth-child(3)" ).addClass( "active" );
  $('#navbar').addClass("nav-bg")
  }else{
    $('#navbar').removeClass("nav-bg");
  }

    // //parallax effect
    // if(scrollposition>3000){
    //   $('#distribution').css("background-attachment","scroll");
    // }else{
    //   $('#distribution').css("background-attachment","fixed");
    // }
  });
});

$("#navbar ul li a[href^='#']").on('click', function(e) {

  // prevent default anchor click behavior
  e.preventDefault();

  // store hash
  var hash = this.hash;

  // animate
  $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 300, function(){

      // when done, add hash to url
      // (default click behaviour)
      window.location.hash = hash;
    });

});

//hiding navbar

if(window_width<600){
  $(document).ready(function () {
  
    'use strict';
    
     var c, currentScrollTop = 0,
         navbar = $('#navbar');
  
     $(window).scroll(function () {
        var a = $(window).scrollTop();
        var b = navbar.height();
       
        currentScrollTop = a;
       
        if (c < currentScrollTop && a > b + b ) {
          navbar.addClass("scrollUp");
        } else if (c > currentScrollTop && !(a <= b)) {
          navbar.removeClass("scrollUp");
        }
        c = currentScrollTop;
    });
    
  });

  //collapse navbar when link clicked
  $('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});
}

$(document).ready(function(){

  $('.product-btn').on('click',function(){
    var id = $(this).attr('id');
    selectedProduct = id;
    localStorage.setItem('selectedProduct',id);
    
  })

})


// carousel code
var $item = $('.carousel-item'); 
var $wHeight = $(window).height();
$item.eq(0).addClass('active');
$item.height($wHeight); 
$item.addClass('full-screen');

$('.carousel img').each(function() {
  var $src = $(this).attr('src');
  var $color = $(this).attr('data-color');
  $(this).parent().css({
    'background-image' : 'url(' + $src + ')',
    'background-color' : $color
  });
  $(this).remove();
});

$(window).on('resize', function (){
  $wHeight = $(window).height();
  $item.height($wHeight);
});

$('.carousel').carousel({
  interval: 6000,
  pause: "false"
});



// Testimonials 
var flkty = new Flickity( '.main-gallery', {
  cellAlign: 'left',
  contain: true,
  wrapAround: true,
  prevNextButtons: false,
  autoPlay: 5000
});

// Sending Form
var $form = $('#dst-form'),
    $feedback_form = $('#feedback-form'),
    dist_url = 'https://script.google.com/macros/s/AKfycbzNBmwLsMO3de2y8rM-nWWld0DH_-NExOwjqdmhjUm2wIkB2Ag/exec',
    feedback_url = 'https://script.google.com/macros/s/AKfycbwUYXjZ4zuvO-RRlynmFT2TkQRpTfF00ob9Fts74YSpoQPMoPuo/exec';

$('#dst-form').submit( function(e) {
  e.preventDefault();

  var jqxhr = $.ajax({
    url: dist_url,
    method: "GET",
    dataType: "json",
    data: $form.serialize()
  }).then((data)=>{
    if(data.result == 'success'){
      $('#contact-modal').modal().show();
      $form.get(0).reset();
     
    }
  })
})

$feedback_form.submit(function(e){
  e.preventDefault();

  var jqxhr = $.ajax({
    url:feedback_url,
    method: "GET",
    dataType: "json",
    data: $feedback_form.serialize()
  }).then((data)=>{
    if(data.result == 'success'){
      $('#contact-modal').modal().show();
      $form.get(0).reset();
  
    }
  })

})
