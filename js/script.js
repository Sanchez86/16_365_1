/*кнопка на верх*/
$(document).ready(function () {
var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
var delay = 1000; // Задержка прокрутки

    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
        /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
        /* Плавная прокрутка наверх */
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });
    /* конец кнопка на верх*/

    $('.ct').on('mouseenter', function () {

        color = $(this).children().css('background-color');
        $(this).children('.color').css({
            'color': color,
            'background-color': '#fff',
            'transition': 'all 0.5s'
        });
       
    }).on('mouseleave', function () {
        color = $(this).children().css('border-color');
        $(this).children('.color').css({
            'color': '#fff',
            'background-color': color,
            'transition': 'all 0.5s'
        })
    });
    /*colorIcon1*/
    $('.ct').on('mouseenter', function () {
        $(this).children('.colorIcon1').toggleClass('colorIcon1Active');
    });
    $('.ct').on('mouseleave', function () {
        $(this).children('.colorIcon1').toggleClass('colorIcon1Active');
    });
    /*end colorIcon1*/

    /*colorIcon2*/
    $('.ct').on('mouseenter', function () {
        $(this).children('.colorIcon2').toggleClass('colorIcon2Active');
    });
    $('.ct').on('mouseleave', function () {
        $(this).children('.colorIcon2').toggleClass('colorIcon2Active');
    });
    /*end colorIcon2*/

    /*colorIcon3*/
    $('.ct').on('mouseenter', function () {
        $(this).children('.colorIcon3').toggleClass('colorIcon3Active');
    });
    $('.ct').on('mouseleave', function () {
        $(this).children('.colorIcon3').toggleClass('colorIcon3Active');
    });
    /*end colorIcon3*/

    /*colorIcon4*/
    $('.ct').on('mouseenter', function () {
        $(this).children('.colorIcon4').toggleClass('colorIcon4Active');
    });
    $('.ct').on('mouseleave', function () {
        $(this).children('.colorIcon4').toggleClass('colorIcon4Active');
    });
    /*end colorIcon4*/

    /*colorIcon5*/
    $('.ct').on('mouseenter', function () {
        $(this).children('.colorIcon5').toggleClass('colorIcon5Active');
    });
    $('.ct').on('mouseleave', function () {
        $(this).children('.colorIcon5').toggleClass('colorIcon5Active');
    });
    /*end colorIcon5*/
    $('video').on('click', function () { (this.paused)? this.play() :  this.pause() })
});

formHide = window.innerWidth;
if (formHide < 1025) {
    console.log(formHide);
    $('.blockForm .form').removeClass('flipInX');
    $('.blockForm .form').addClass('fadeIn');
}















