$(function () {

    // ==== connencting form-styler ====

    $('.filter-style').styler();


    // ==== slice  word of language ====

    languageWord();

    $('.language-btn').on('change', languageWord)

    function languageWord() {
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
            {
                breakpoint: 719,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 570,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 450,
                settings: {
                    slidesToShow: 2,
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

    // ==== packets modal window ====

    $('.packets__item-btn').on('click', function () {
        $('.packets__modal').addClass('active');

        $('.packets__modal').on('click', function (e) {
            let elem = e.target;
            if (!elem.classList.value.split(' ').includes('packets__modal-box')) {
                $('.packets__modal').removeClass('active');
            }
        })
    })


    $('.packets__modal-btn').on('click', function () {
        $('.packets__modal').removeClass('active');
    })


    // ==== packets drop-down =====

    $(window).resize(function () {
        if ($(window).width() < 549) {
            $('.packets__item-top').next().slideUp('600')
        } else {
            $('.packets__item-top').next().slideDown('600')
        }
    });

    $('.packets__item-top').on('click', function () {
        if ($(window).width() < 549) {
            $(this).next().slideToggle('600')
        }
    })


    // ==== copy from input to clipboard ====

    $('.finance__grid-copy').on('click', function () {
        $('.finance__grid-input').focus().select();
        document.execCommand('copy');

        $('.copy-finish').addClass('active');
        setTimeout(function () {
            $('.copy-finish').removeClass('active')
        }, 2000)
    })



    // ==== history operation drop down ====

    if ($(window).width() < 879) {
        $('.finance__item-operation').slideUp('600')
    }

    $(window).resize(function () {
        if ($(window).width() < 879) {
            $('.finance__item-operation').slideUp('600')
        } else {
            $('.finance__item-operation').slideDown('600')
        }
    });

    $('.finance__item-date, .finance__item-category, .finance__item-sum').on('click', function () {
        if ($(window).width() < 879) {
            let currentItem = $($(this).parent().children('.finance__item-operation'));
            currentItem.slideToggle('600');
            $($(this).parent().toggleClass('active'));
        }

        $($(this).parent()).on('blur',  () => {
            $($(this).parent().removeClass('active'));
            $($(this).parent().children('.finance__item-operation').slideUp('600'));
        })


    })



});