$(document).ready(() => {
    $('.anchor').click(function(e) {
        let target = $($(this).attr('href'));
        e.preventDefault();

        if(target.length) {
          $('body, html').animate({scrollTop: `${target.offset().top}px`}, 500);
        }
    });
});