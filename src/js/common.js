$(function () {

    var
        slides_container = $('#slides'),
        flag = false;

    slides_container.superslides({
        'animation': 'fade',
        'pagination': false,
        'animation_speed': 'slow'
    });

    var size = slides_container.superslides('size');

    $('.next-image').append('<img src="" alt="">');

    if (size == 1) {
        $('.slides-navigation').css({
            'display': 'none'
        })
    }
    else {
        current_next();
    }

    function replace_src(value, speed) {
        var src = $(value).find('img')[0].src;
        $('.next-image').find('img').fadeOut(speed, function () {
            $('.next-image').find('img').attr('src', src).fadeIn(speed);
        });
    }

    function current_next() {
        var
            current_slide = $('#slides').superslides('current'),
            active_slides = slides_container.find('ul li')[current_slide],
            next_slide = $(active_slides).next()[0],
            prev_slide = $(active_slides).prev()[0];

        if (next_slide !== undefined) {
            if (flag)
                replace_src(next_slide, 300);
            else {
                flag = true;
                replace_src(next_slide, 0);
            }
        }
        else {
            replace_src(prev_slide);
            $('.slides-navigation .next').addClass('deactivation');
        }
        if (prev_slide === undefined)
            $('.slides-navigation .prev').addClass('deactivation');

    }

    $(document).on('animated.slides', function () {
        current_next();
    });

    $(document).on('slides.image_adjusted', function () {
       Waypoint.refreshAll()
    });


    $('a.next').click(function (event) {
        if ($(this).hasClass('deactivation'))
            event.stopPropagation();

        $('.slides-navigation .prev').removeClass('deactivation');

    });

    $('a.prev').click(function (event) {
        if ($(this).hasClass('deactivation')) {
            event.stopPropagation();
        }

        $('.slides-navigation .next').removeClass('deactivation');
    });


    // Tabs about
    $('#a-tabs').tabs({
        'active_number' : 2,
        clickEndTabs: function () {
            $(window).trigger('resize').trigger('scroll');
            Waypoint.refreshAll();
        }
    });

    $('#s-tabs').tabs({
        active_number : 0,
        clickEndTabs: function () {
            $(window).trigger('resize').trigger('scroll');
            Waypoint.refreshAll();
        }
    });

    $('.load-more').click(function () {
        $(window).trigger('resize').trigger('scroll');
        Waypoint.refreshAll();
    });


    // Tabs work
    $('#work-grid').mixItUp({
        animation: {
            duration: 500,
            effects: 'fade',
            easing: 'ease'
        }
    }).on('mixEnd', function () {
        $(window).trigger('resize').trigger('scroll');
        Waypoint.refreshAll();
    });

    $('.w-nav-tabs li').click(function (event) {
        if ($(this).hasClass('active')) {
            event.preventDefault();
        } else {
            $('.w-nav-tabs li').removeClass('active');
            $(this).addClass('active');
        }
    });


    $('.w-popap-init, .n-popap-init').magnificPopup({
        type: 'inline'
    });

    $('.parallax-window').parallax({
        imageSrc: 'img/p-parallax.jpg'
    });

    // Animated
    $("section h1").animated("fadeInUp", "fadeOutDown", '80%', -$(window).height());
    $('.option-animate').animated("fadeIn", "fadeOut", '100%', -$('.option-animate').height());
    $('.slides-navigation').animated("slideInRight", "slideOutRight", '100%', -$(".slides-navigation").height());
    $("span.bg").animated("slideInLeft", "slideOutLeft", '100%', -$("span.bg").height());
    $(".caption-content h2").animated("fadeInDown", "none", '100%', -$('.caption-content').height());
    $(".caption-content h1, .caption-content h3").animated("fadeInUp", "none", '100%', -$('.caption-content').height());
});


