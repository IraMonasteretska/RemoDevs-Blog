
$(document).ready(function () {

    // change header on scroll -------------------- //
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.header').addClass('change-bg');
        } else {
            $('.header').removeClass('change-bg');
        }
    });
    // mobile menu -------- //
    $('.burger').click(function () {
        $(this).toggleClass('open');
        $('.header__nav').toggleClass('open');
        $('.header').toggleClass('white');
    });


    // post category tabs -------- //
    $('.categories__tab').on('click', function () {
        var dataClass = $(this).attr('data-tab');
        $('.categories__window').removeClass('active-window').hide();
        $('.categories__tab').removeClass('active');
        $(this).addClass('active');
        $('.' + dataClass).addClass('active-window').fadeIn(500);
        return false;
    });

});