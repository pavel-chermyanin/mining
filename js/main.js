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

    if ($('.slider-box').length) {
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
    }

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

    if ($(window).width() < 529) {
        $('.packets__item-top').next().slideUp('600')
    }

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



    // if team__list-item does not have ol,then to remove arrow

    $('.team__list-item').each((i, item) => {
        if (!item.children[1]) {
            item.classList.add('without-arrow')
        }
    })


    $('.team__list-item').on('click', function (e) {

        $(this).toggleClass('active');
        e.stopPropagation();
        $(this).children('.team__list').slideToggle('600')
    });

    // ==== hover team__list-box ====

    let currentColor = '';

    $('.team__list-box').hover(function (e) {
        let currentColor = e.target.style.backgroundColor;
        if (e.target.classList.value.split(' ').includes('team__list-box')) {
            e.target.style.backgroundColor = 'rgba(12, 153, 12, 0.4)'
        }
    }, function (e) {
        $('.team__list-box').css('background-color', currentColor)
    })

    // ==== filters buttons ====

    $('.team__filter-img--show').on('click', function () {
        $('.team__list-item').addClass('active');
        $('.team__list').show()
    })

    $('.team__filter-img--hide').on('click', function () {
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
                elem.css('background-color', 'transparent');
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
            elem.css('background-color', 'transparent')
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



    // ==== refer-bonus list-toggle ====

    $('.refer-bonus__list').slice(1).hide()

    $('.refer-bonus__list-item--first').on('click', function (e) {

        $(this).each((i, item) => {
            if (!item.classList.value.split(' ').includes('active')) {
                $('.refer-bonus__list-item--first').removeClass('active');
                $('.grid-box > .refer-bonus__list--second').remove()
                $('.grid-box > .refer-bonus__list--third').remove()
                $('.grid-box > .refer-bonus__list--fourth').remove()
                $(this).addClass('active');
            } else {
                $('.grid-box > .refer-bonus__list--second').remove()
                $('.grid-box > .refer-bonus__list--third').remove()
                $('.grid-box > .refer-bonus__list--fourth').remove()

                $('.refer-bonus__list-item--first').removeClass('active');
                $(this).addClass('active')
            }
        })

        let secondList = $(this).children('.refer-bonus__list--second').clone();
        $('.grid-box').append(secondList.show())


        $('.refer-bonus__list-item--second').on('click', function (e) {
            $('.accent-line').remove()
            $('.accent-line-second').remove()
            $('.accent-line-third').remove()

            let heightElem = parseInt($(this).css('height')) + 5;
            let indexPrevElem = $('.refer-bonus__list-item--first.active').index();
            let indexCurrentElem = $(this).index();
            let differentBeetwenElems = Math.abs(indexCurrentElem - indexPrevElem);
            let accent_line = $('<div>', { class: 'accent-line' });
            $(this).append(accent_line)

            if (indexPrevElem > indexCurrentElem) {
                $('.accent-line').css('top', '50%')
                $('.accent-line').addClass('top')
            } else {
                $('.accent-line').css('bottom', '50%');
                $('.accent-line').addClass('bottom')
            }

            if (differentBeetwenElems) {
                $('.accent-line').css('height', `${heightElem * differentBeetwenElems}px`)
            } else {
                $('.accent-line').removeClass('bottom')
                $('.accent-line').css('transform', 'rotate(90deg)')
                $('.accent-line').css('bottom', '36%')
            }




            $(this).each((i, item) => {
                if (!item.classList.value.split(' ').includes('active')) {
                    $('.refer-bonus__list-item--second').removeClass('active');
                    $('.grid-box > .refer-bonus__list--third').remove()
                    $('.grid-box > .refer-bonus__list--fourth').remove()

                    $(this).addClass('active');
                } else {
                    $('.grid-box > .refer-bonus__list--third').remove()
                    $('.grid-box > .refer-bonus__list--fourth').remove()

                    $('.refer-bonus__list-item--second').removeClass('active');
                    $(this).addClass('active')
                }
            })

            let secondList = $(this).children('.refer-bonus__list--third').clone();
            $('.grid-box').append(secondList.show())


            $('.refer-bonus__list-item--third').on('click', function (e) {
                $('.accent-line-second').remove()
                $('.accent-line-third').remove()

                let heightElem = parseInt($(this).css('height')) + 5;
                let indexPrevElem = $('.refer-bonus__list-item--second.active').index();
                let indexCurrentElem = $(this).index();
                let differentBeetwenElems = Math.abs(indexCurrentElem - indexPrevElem);
                let accent_line = $('<div>', { class: 'accent-line-second' });
                $(this).append(accent_line)

                if (indexPrevElem > indexCurrentElem) {
                    $('.accent-line-second').css('top', '50%')
                    $('.accent-line-second').addClass('top')
                } else {
                    $('.accent-line-second').css('bottom', '50%');
                    $('.accent-line-second').addClass('bottom')
                }

                if (differentBeetwenElems) {
                    $('.accent-line-second').css('height', `${heightElem * differentBeetwenElems}px`)
                } else {
                    $('.accent-line-second').removeClass('bottom')
                    $('.accent-line-second').css('transform', 'rotate(90deg)')
                    $('.accent-line-second').css('bottom', '36%')
                }




                $(this).each((i, item) => {
                    if (!item.classList.value.split(' ').includes('active')) {
                        $('.refer-bonus__list-item--third').removeClass('active');
                        $('.grid-box > .refer-bonus__list--fourth').remove()
                        $(this).addClass('active');
                    } else {
                        $('.grid-box > .refer-bonus__list--fourth').remove()
                        $('.refer-bonus__list-item--third').removeClass('active');
                        $(this).addClass('active')
                    }
                })

                let secondList = $(this).children('.refer-bonus__list--fourth').clone();
                $('.grid-box').append(secondList.show())


                $('.refer-bonus__list-item--fourth').on('click', function () {
                    $('.accent-line-third').remove()

                    let heightElem = parseInt($(this).css('height')) + 5;
                    let indexPrevElem = $('.refer-bonus__list-item--third.active').index();
                    let indexCurrentElem = $(this).index();
                    let differentBeetwenElems = Math.abs(indexCurrentElem - indexPrevElem);
                    let accent_line = $('<div>', { class: 'accent-line-third' });
                    $(this).append(accent_line)

                    if (indexPrevElem > indexCurrentElem) {
                        $('.accent-line-third').css('top', '50%')
                        $('.accent-line-third').addClass('top')
                    } else {
                        $('.accent-line-third').css('bottom', '50%');
                        $('.accent-line-third').addClass('bottom')
                    }

                    if (differentBeetwenElems) {
                        $('.accent-line-third').css('height', `${heightElem * differentBeetwenElems}px`)
                    } else {
                        $('.accent-line-third').removeClass('bottom')
                        $('.accent-line-third').css('transform', 'rotate(90deg)')
                        $('.accent-line-third').css('bottom', '36%')
                    }




                    $(this).each((i, item) => {
                        if (!item.classList.value.split(' ').includes('active')) {
                            $('.refer-bonus__list-item--fourth').removeClass('active');
                            $(this).addClass('active');
                        } else {
                            $('.refer-bonus__list-item--fourth').removeClass('active');
                            $(this).addClass('active');
                        }
                    })
                })
            })

        })

    })





    //     if (!e.target.parentNode.classList.value.split(' ').includes('active')) {
    //         e.target.parentNode.classList += (' active')
    //     } else {
    //         e.target.parentNode.classList.remove('active')
    //     }


    //     if ($(this).next().is(':hidden')) {
    //         $(this).next().addClass('active')
    //         $(this).next().show()

    //     } else {
    //         $(this).next().hide()
    //         $(this).next().removeClass('active')

    //     }
    // })

    // ==== team tabs ====

    $('.team__tabs-btn').on('click', function (e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('team__tabs-btn--active');
        $('.team__tabs-content--active').removeClass('team__tabs-content--active');

        $(this).addClass('team__tabs-btn--active')
        $($(this).attr('href')).addClass('team__tabs-content--active')
    })



    // ==== sun ====
    let countSun = +$('.sun-wrapper').attr('data-count');
    let int = Math.trunc(countSun / 100 * 24) + 1
    let float = Math.trunc(((countSun / 100 * 24).toFixed(2).slice(-2) / 100 * 33))


    console.log(float)
    let childrenSun = $('.sun-box__wrapper').children()
    for (let i = 0; i < int; i++) {

        setTimeout(() => {
            let spanLength = childrenSun[i]?.children;
            if (!spanLength) return
            for (let k = 0; k < spanLength.length; k++) {


                setTimeout(() => {
                    if (int - 1 === i && float === k) {
                        console.log('!')
                        spanLength[k].style.backgroundColor = 'red';
                    }

                    else if (int - 1 === i && k > float) {
                        spanLength[k].style.backgroundColor = 'rgb(107, 104, 104)';
                    } else {
                        spanLength[k].style.backgroundColor = 'green';
                    }
                    
                    
                }, k * 50)

            }
        }, i * 400)
        // console.log(spanLength.length)
    }




});