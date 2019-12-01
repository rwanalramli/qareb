$(document).ready(function() {

    // Smooth Scroll To Elements
    $('.navbar li a').click(function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);

    });

    // Add Active Class On Navbar Link and remove from siblings

    $('.navbar li a').click(function() {
        $('.navbar a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function() {


                //Sync Navbar Links With Sections

        $('.block').each(function() {
            if ($(window).scrollTop() > $(this).offset().top) {
                //console.log($(this).attr('id'));
                var blockID = $(this).attr('id');
                $('.navbar a').removeClass('active');
                $('.navbar li a[data-scroll = "' + blockID + '"]').addClass('active');
            }
        });

                        //////  Owl Carousel ///////////
        $('.owl-carousel').owlCarousel({
                loop:true,
                margin:10,
                responsiveClass:true,
                smartSpeed:600,
                responsive:{
                    0:{
                        items:1,
                        nav:true
                    },
                    600:{
                        items:1,
                        nav:false
                    },
                    1000:{
                        items:4,
                        nav:false,
                        loop:true,
                        dots:false
                    }
                }
            })
        //////////////////////////////////////

        // Scroll-to-top button

        var scrollToTop = $('.scroll-to-top');
        if ($(window).scrollTop() > 1100) {
            if (scrollToTop.is(':hidden')) {
                scrollToTop.fadeIn(400);
            }
        } else {
            scrollToTop.fadeOut(400);
        }
    });


    /////// Nice Scroll /////////

    $("html").niceScroll();

    ///////// SCROLL TOP BUTTUN ///////

    var scrollButton = $("#scroll-top");
    $(window).scroll(function() {
        //  console.log($(this).scrollTop());
        if ($(this).scrollTop() >= 800) {

            scrollButton.show();

        } else {
            scrollButton.hide();
        }

    });

    scrollButton.click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

});