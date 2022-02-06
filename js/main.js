$(function () {

    // ==== connencting form-styler ====

    $('.filter-style').styler();


    // ==== slice  word of language ====

    if ($('.language-btn').length) {


        $('.language-btn').on('change', languageWord)

        function languageWord() {
            let select_value = $('.jq-selectbox__select-text')[0].innerText;
            $('.jq-selectbox__select-text')[0].innerText = select_value.slice(0, 2)
        }


        languageWord();
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


        $(window).on('click', function (e) {
            let targetElem = e.target;
            if (!targetElem.closest('.menu__list') && !targetElem.closest('.menu-burger')) {
                $('.menu__list').removeClass('active');
                $('.menu-burger').removeClass('active')
            }
        });

    })

    // ==== packets modal window ====

    $('.packets__item-btn').on('click', function () {
        $('.packets__modal').addClass('active');

        $("html,body").css("overflow", "hidden");

        $('.packets__modal').on('click', function (e) {
            let elem = e.target;
            if (!elem.classList.value.split(' ').includes('packets__modal-box')) {
                $('.packets__modal').removeClass('active');

                $("html,body").css("overflow", "auto");
            }
        })
    })


    $('.packets__modal-btn').on('click', function () {
        $('.packets__modal').removeClass('active');
        $("html,body").css("overflow", "auto");
    })


    // ==== packets drop-down =====

    $(window).resize(function () {
        if ($(window).width() < 529) {
            $('.packets__item-top').next().slideUp('600')
        } else {
            $('.packets__item-top').next().slideDown('600')
        }
    });

    $('.packets__item-top').on('click', function () {
        if ($(window).width() < 529) {
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

    $(window).resize(function () {
        if ($(window).width() < 769) {
            $('.finance__item-operation').slideUp('600')

            $('.finance__item:not(:first-child)').on('click', function (e) {

                $(this).children('.finance__item-operation').slideDown('600');
                $(this).addClass('active')

            })

            $('.finance__item:not(:first-child)').on('blur', function () {
                console.log('!')
                $('.finance__item-operation').slideUp('600')
                $('.finance__item.active').removeClass('active')
            })
        }
        if ($(window).width() > 768) {

            $('.finance__item-operation').slideDown('600')
            $('.finance__item').off('click blur')
        }

    })


    if ($(window).width() < 769) {

        $('.finance__item:not(:first-child)').on('blur', function () {
            $('.finance__item-operation').slideUp('600')
            $('.finance__item.active').removeClass('active')
        })
        $('.finance__item-operation').slideUp('600')

        $('.finance__item:not(:first-child)').on('click', function (e) {

            $(this).children('.finance__item-operation').slideToggle('600');
            $(this).toggleClass('active')

        })

    }

    // ==== question drop-down ====

    // $('.question__list-drop').slideUp('600')

    $('.question__list-item').on('click', function () {
        $(this).children('.question__list-drop').slideToggle('600');

        if (!$(this).children('.question__list-title')[0].classList.value.split(' ').includes('active')) {
            $(this).children('.question__list-title').addClass('active')
        } else {
            $(this).children('.question__list-title').removeClass('active')
        }
    })


    // ==== marketing ====

    $(window).resize(function () {
        if ($(window).width() < 601) {
            let imageElem = $('.personal__img');
            $('.personal__img').remove();

            $('.personal__levels').append(imageElem)
        } else {

            let imageElem = $('.personal__img');
            $('.personal__img').remove();
            $('.personal__inner').append(imageElem)

        }
    })

    if ($(window).width() < 601) {
        let imageElem = $('.personal__img');
        $('.personal__img').remove();

        $('.personal__levels').append(imageElem)
    }

    // ==== team ====

    $('.team__list-item').children('.team__list').slideUp('300')

    $('.team__list-item').on('click', function (e) {
        $(this).toggleClass('active');
        e.stopPropagation();
        $(this).children('.team__list').slideToggle('600')
    });

    // ==== hover team__list-box ====


    $('.team__list-box').hover(function (e) {
        if (e.target.classList.value.split(' ').includes('team__list-box')) {
            e.target.style.backgroundColor = 'rgba(12, 153, 12, 0.4)'
        }
    }, function (e) {
        $('.team__list-box').css('background-color', '#1b1c21')
    })

    // ==== filters buttons ====

    $('.team__filter-img--show').on('click', function() {
        $('.team__list-item').addClass('active');
        $('.team__list').show()
    })

    $('.team__filter-img--hide').on('click', function() {
        $('.team__list-item').removeClass('active');
        $('.team__list').slice(1).hide()
    })

    // ==== team modal window ====

    $(window).resize(function () {
        if ($(window).width() < 769) {
            $('.team__list-person span').off('click')
            $('.team__list-person span').on('click', function (e) {
                e.stopPropagation()
                let modal = $('<div>', { class: 'team-modal' })[0]
                let modal_btn = $('<button>', { class: 'team-modal__btn' })[0]
                let elem = $(this).parent().parent().clone();
                elem.addClass('modal');
                elem.append(modal_btn)
                modal.append(elem[0])
                $('.header').append(modal)


                modal_btn.onclick = function () {
                    $('.team-modal').remove();

                }
            })
        } else {
            $('.team__list-person span').off('click')
        }
    })


    if ($(window).width() < 769) {
        $('.team__list-person span').on('click', function (e) {
            e.stopPropagation()
            let modal = $('<div>', { class: 'team-modal' })[0]
            let modal_btn = $('<button>', { class: 'team-modal__btn' })[0]
            let elem = $(this).parent().parent().clone();
            elem.addClass('modal');
            elem.append(modal_btn)
            modal.append(elem[0])
            $('.header').append(modal)


            modal_btn.onclick = function () {
                $('.team-modal').remove();
            }
        })
    }

    // ==== count for team__list-item ====


    $('.team__list').each(function (index, list) {

        for (let i = 0; i < list.children.length; i++) {
            list.children[i].append($('<span>', { text: i + 1, class: 'count' })[0])
        }
    })

    // ==== refer-bonus hover ====

    $('.refer-bonus__list-item').hover(function (e) {

        if (e.target.classList[0] === 'refer-bonus__list-item') {
            e.target.style.backgroundColor = 'rgba(12, 153, 12, 0.4)';
            e.stopPropagation()
        }
        if (e.target.classList[0] === 'refer-bonus__list-text') {
            e.target.parentNode.style.backgroundColor = 'rgba(12, 153, 12, 0.4)';
        }

    }, function (e) {
        $('.refer-bonus__list-item').css('background-color', '#1b1c21')
    })


    // ==== refer-bonus list-toggle ====

    $('.refer-bonus__list').slice(1).hide('600')

    $('.refer-bonus__list-item p').on('click', function (e) {

        if (!e.target.parentNode.classList.value.split(' ').includes('active')) {
            e.target.parentNode.classList += (' active')
        } else {
            e.target.parentNode.classList.remove('active')
        }


        if ($(this).next().is(':hidden')) {
            $(this).next().addClass('active')
            $(this).next().show()

        } else {
            $(this).next().hide()
            $(this).next().removeClass('active')

        }
    })

    // ==== team tabs ====

    $('.team__tabs-btn').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('team__tabs-btn--active');
        $('.team__tabs-content--active').removeClass('team__tabs-content--active');

        $(this).addClass('team__tabs-btn--active')
        $($(this).attr('href')).addClass('team__tabs-content--active')
    })



});