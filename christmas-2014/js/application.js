$(function() {

  var center = $('.center');

  if ( window.jQuery && window.jQuery.easing ) {
    center.animate({ top: '+=320px' }, 1200, 'easeOutBounce');
  } else {
    center.css('margin', '40px auto');
  }

});