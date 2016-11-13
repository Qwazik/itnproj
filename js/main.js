//myPlugins
  ;(function($){
    $.fn.qTabs = function(){
        var global = this;
        global.find('.tabs-content__item').hide();
        global.find('.tabs-content__item.active').show();
        $(this).find('.tabs-nav li').click(function(){
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
            var data = $(this).find('a').attr('href');
            $(global).find('.tabs-content__item').hide().removeClass('active');
            $(global).find('.tabs-content__item' + data + '').fadeIn(300).addClass('active');
            return false;
        })
    }
    $.fn.qToggle = function(){
        var global = this;
        $(this).click(function(e){
            e.preventDefault();
            $(this).addClass('active');
            $(this).siblings().removeClass('active');
        })
    }
    $.fn.equalHeight = function(){
        var global = this,
            maxHeigh = 0,
            tmpHeigh = 0;
        $(this).each(function(){
            tmpHeight = $(this).outerHeight();
            if(tmpHeight > maxHeigh){
                maxHeigh = tmpHeight;
            }
        })

        $(this).each(function(){
            $(this).css('min-height', maxHeigh);
        })
    }
  }(jQuery));


//plugins
$(document).ready(function(){
    $('.fancybox').fancybox({
        padding: 0,
        wrapCSS: 'pupup__callback'
    });
    $('.service-tabs__item').equalHeight(); // выравниваем блоки по высоте

    $('.our-works__info').each(function(){ //выравниваем по центру блок с информацией о проекте
        var marginTop = '-'+($(this).outerHeight() / 2)+'px';
        console.log(marginTop);
        $(this).css({
            top: '50%',
            'margin-top': marginTop
        })
    })

    var carouselProject = $('#carouselProject .our-works__list').owlCarousel({ //слайдер с проектами
        items: 1,
        loop: true
    });

    // навигация для слайдера с проктами
    $('#carouselProject .our-works__navigation a').click(function(){
        if($(this).hasClass('next')){
            carouselProject.trigger('next.owl.carousel');
        }else{
            carouselProject.trigger('prev.owl.carousel');
        }
        return false;
    })


    // отзывы
    var reviewsCarousel = $('#reviewsCarousel .reviews__list').owlCarousel({ //слайдер с проектами
        items: 1,
        loop: true
    });
    // навигация для слайдера с проктами
    $('.reviews__control a').click(function(){
        if($(this).hasClass('next')){
            reviewsCarousel.trigger('next.owl.carousel');
        }else{
            reviewsCarousel.trigger('prev.owl.carousel');
        }
        return false;
    })


    //projects-parent
    $('.projects__navigation li a').click(function(){
        var clickVal = $(this).attr('href');

        if($(this).attr('href') == 'projectsAll'){
            $('.projects__item').each(function(){
                $(this).stop(true,true).fadeIn();
            })
            return false;
        }

        $('.projects__item').each(function(){
            if(!($(this).hasClass(clickVal))){
                $(this).hide().fadeOut();
                console.log('false');
            }else{
                $(this).stop(true,true).fadeIn();
                console.log('true');
            }
        })

        return false;
    })

})

ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [53.3325995711208,34.2977549999996],
            zoom: 17
        }),
        myPlacemark = new ymaps.Placemark([53.3319995711208,34.29778549999996], {
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/maps-mark.png',
            // Размеры метки.
            iconImageSize: [82, 101],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-32, -101]
        });

    myMap.geoObjects.add(myPlacemark);
});