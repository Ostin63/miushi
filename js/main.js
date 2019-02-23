$(function () {
    $(".slide-1").owlCarousel({
        loop: true,
        margin: 10,
        center: false,
        nav: true,
        dots: true,
        dotsEach: true,
        navText:["",""],
        items: 4,
        responsive: {
            '0': {
                items: 1,
                nav: false
            },
            '544': {
                items: 2,
                nav: false
            },
            '992': {
                items: 3,
                nav: true
            },
            '1200': {
                items: 4,
                nav: true
            }
        }
    })
});

$('.arrow-down').on('click', function (evt) {
    var footerMenu = $(evt.currentTarget).parents('.footer-menu');
    footerMenu.find('.arrow-down').addClass('d-none');
    footerMenu.find('.arrow-up').removeClass('d-none');
    footerMenu.find('.down-menu').removeClass('d-none');
});
$('.arrow-up').on('click', function (evt) {
    var footerMenu = $(evt.currentTarget).parents('.footer-menu');
    footerMenu.find('.arrow-up').addClass('d-none');
    footerMenu.find('.arrow-down').removeClass('d-none');
    footerMenu.find('.down-menu').addClass('d-none');
});
$('.company-block__button-all').on('click', function(evt) {
    var mainSite = $(evt.currentTarget).parents('.main-site');
    mainSite.find('.company-block__text').removeClass('d-none');
    mainSite.find('.company-block__button-all').addClass('d-none');
    mainSite.find('.company-block__button-no').removeClass('d-none');
});
$('.company-block__button-no').on('click', function(evt) {
    var mainSite = $(evt.currentTarget).parents('.main-site');
    mainSite.find('.company-block__text').addClass('d-none');
    mainSite.find('.company-block__button-all').removeClass('d-none');
    mainSite.find('.company-block__button-no').addClass('d-none');
});

$('.chinese-sauce').on('change', function (evt) {
    var dataPrice = $(evt.currentTarget).find(':selected').attr('data-price');
    var elementPrice = $(evt.currentTarget).parents('.sauce_select').find('.sauce_price-val ');
    elementPrice.text(dataPrice);
});
$('.button-add').on('click', function (evt) {
    var addBasket = $(evt.currentTarget).find('.button-add').attr('data-id');
    <?php require_once('functions.php'){getParamMenu($con, addBasket)} ?>
    ;
});

