$(function () {

    // ==== connencting form-styler ====

    $('.filter-style').styler();


    // function languageWord () {
    //     let select_value = $('.jq-selectbox__select-text')[0].innerText;
    //     $('.jq-selectbox__select-text')[0].innerText = select_value.slice(0, 2)
    //     console.log(test)
    // }
    // languageWord();

    // $('.language-btn').addEventListener('change', function() {
    //     console.log('111')
    // })


    $('.slider-box').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__btn slider__btn-prev"><img src="./images/arrow-left.svg" alt=""></button>',
        nextArrow: '<button class="slider__btn slider__btn-next"><img src="./images/arrow-right.svg" alt=""></button>',
    })


});