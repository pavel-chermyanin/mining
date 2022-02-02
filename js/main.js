$(function () {

    // ==== connencting form-styler ====

    $('.filter-style').styler();


    // ==== slice  word of language ====

    languageWord();

    $('.language-btn').on('change', languageWord)

    function languageWord () {
        let select_value = $('.jq-selectbox__select-text')[0].innerText;
        $('.jq-selectbox__select-text')[0].innerText = select_value.slice(0, 2)
    }

    // ==== header-slider ====

    $('.slider-box').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        prevArrow: '<button class="slider__btn slider__btn-prev"><svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 1L1 13.5L13.5 26" stroke="white" stroke opacity="0.33" stroke  width="2" stroke linecap="round" stroke linejoin="round"/></svg></button>',
        nextArrow: '<button class="slider__btn slider__btn-next"><svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 26L13.5 13.5L1 0.999999" stroke="white" stroke opacity="0.33" stroke width="2" stroke linecap="round" stroke linejoin="round" /></svg ></button>',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },

        ]
    })

    // ==== menu-burger ====

    $('.menu-burger').on('click', function () {
        $('.menu__list').toggleClass('active');
        $(this).toggleClass('active');
    })



});