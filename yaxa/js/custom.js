
$(window).load(function () {
    "use strict";
    $(".ip-header").addClass('loading');
    var animdelay = 3000;
    setTimeout(function () {
        $(".ip-header").removeClass('loading').addClass('loaded').fadeOut('slow');
    }, 2000);
    setTimeout(function () {
        $("#head1").css("opacity", "0");
    }, animdelay + 0);
    setTimeout(function () {
        $("#head1").removeClass('bigfont').addClass('smallify').css("opacity", "1");
    }, animdelay + 500);
    setTimeout(function () {
        $("#solnbox").stop(true, true).slideDown(1000).fadeIn({ duration: 1500, queue: false });
    }, animdelay + 1000);
    setTimeout(function () {
        $("#soln1").hide().fadeIn(1000);
    }, animdelay + 2000);
    setTimeout(function () {
        $("#soln2").hide().fadeIn(1000);
    }, animdelay + 3000);
    setTimeout(function () {
        $("#soln3").hide().fadeIn(1000);
    }, animdelay + 4000);
    setTimeout(function () {
        $("#solnbuttons").hide().fadeIn(1000);
    }, animdelay + 5000);
    setTimeout(function () {
        $("#intro").css("height", "auto")
    }, animdelay + 3000);
});





$('.CubeWrapper').on({
    mouseenter: function () {
        $(this).removeClass('show-front');
        $(this).addClass('show-bottom');
    },
    mouseleave: function () {
        $(this).removeClass('show-bottom');
        $(this).addClass('show-front');
    }
});


$(".SearchTrigger").on("click", function () {
    $('.SearchInput').addClass('ActiveSearchInput');
});

$(".SearchCloseTrigger").on("click", function () {
    $('.SearchInput').removeClass('ActiveSearchInput');
});


$(document).ready(function () {

    "use strict";

    $('.nav a.last-child').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });


    (function (window) {

        // check for touch
        if (Modernizr.touch) {


            //gallery-inner mobile function for hover
            [].slice.call(document.querySelectorAll(".gallery-inner")).forEach(function (el, i) {

                // check if the user moves a finger
                var fingerMove = false;
                el.addEventListener("touchmove", function (e) {
                    e.stopPropagation();
                    fingerMove = true;
                    classie.remove(el, 'hover');
                });

                // always reset fingerMove to false on touch start
                el.addEventListener("touchstart", function (e) {
                    e.stopPropagation();
                    fingerMove = false;
                    classie.remove(el, 'hover');
                });

                // add hover class if figure touchend and fingerMove is false
                el.addEventListener("touchend", function (e) {
                    e.stopPropagation();
                    if (fingerMove == false) {
                        classie.add(el, 'hover');
                    }

                });

            });

        }

        else {

            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            /* Stellar  */
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $(window).stellar({
                responsive: true,
                horizontalOffset: 0,
                horizontalScrolling: false,
                positionProperty: 'transform',
                hideDistantElements: false
            });



            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            /* scrollreveal */
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            window.scrollReveal = new scrollReveal();



            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            /* navbar hide */
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $().showUp('.navbar:not(.noShowUp)');



        }

    })(window);



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function introHeight() {
        var wh = $(window).height();
        $('#intro').css({ 'min-height': wh });
        $('#intro.HalfBackground').css({ height: wh / 3 * 2 });
        $('#intro.ThreeQuarters').css({ height: wh / 4 * 3 });

        if ($(window).width() < 768) {
            $('.TopMenuWrapperforSize').css({ width: $('.NavbarEcommerceTop').width() });
        }



    }

    introHeight();

    $(window).bind('resize', function () {
        //Update slider height on resize
        introHeight();
    });




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* contact form init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#contactform').submit(function () {
        var action = $(this).attr('action');
        $("#result").slideUp(300, function () {
            $('#result').hide();
            $('#submit')
                .attr('disabled', 'disabled');
            $.post(action, {
                name: $('#name').val(),
                email: $('#email').val(),
                phone: $('#phone').val(),
                captcha: $('#g-recaptcha-response').val(),
                comments: $('#comments').val()
            },
                function (data) {
                    document.getElementById('result').innerHTML = data;
                    $('#result').slideDown('slow');
                    $('#submit').removeAttr('disabled');
                    if (data.match('success') != null) $('#contactform').slideUp('slow');
                }
            );

        });
        return false;
    });




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* fitvids */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('.videoWrapper').fitVids();

    $('.swal2-close').on('click', function () { swal.close(); })


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Isotope */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var $container = $('.gallery').imagesLoaded(function () {
        $container.isotope({
            // options
        });
    });


    $('#filters').on('click', 'a', function () {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $container.isotope({
        filter: '*' // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs'
    });




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* smoothscroll */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    smoothScroll.init({
        speed: 1000,
        offset: 70
    });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* owl-carousels */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $("#owl-team").owlCarousel({
        singleItem: false,
        items: 2,
        itemsDesktop: [1199, 2],
        itemsDesktopSmall: [980, 2],
        itemsTablet: [768, 2],
        itemsMobile: [479, 1],
        autoPlay: false,
        navigation: true,
        pagination: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-4x'></i>",
            "<i class='fa fa-angle-right fa-4x'></i>"
        ]
    });



    $("#owl-testimonials").owlCarousel({
        singleItem: true,
        autoPlay: true,
        navigation: false,
        pagination: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-4x'></i>",
            "<i class='fa fa-angle-right fa-4x'></i>"
        ]
    });


    var carouselFreelance = $(".owl-freelancer");

    carouselFreelance.owlCarousel({
        singleItem: true,
        autoPlay: false,
        navigation: false,
        pagination: true

    });


    $('.ServiceWrapperB').click(function () {
        carouselFreelance.trigger('owl.goTo', 0)
    });

    $('.ServiceWrapperC').click(function () {
        carouselFreelance.trigger('owl.goTo', 1)
    });
    $('.ServiceWrapperE').click(function () {
        carouselFreelance.trigger('owl.goTo', 2)
    });

    $('.ServiceWrapperP').click(function () {
        carouselFreelance.trigger('owl.goTo', 3)
    });

    $("#owl-testimonials2").owlCarousel({
        singleItem: true,
        autoPlay: true,
        navigation: false,
        pagination: true
    });

    $('.owl-blog').owlCarousel({
        singleItem: true,
        items: 1,
        navigation: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-2x'></i>",
            "<i class='fa fa-angle-right fa-2x'></i>"
        ],
        pagination: true
    });


    var owl = $("#owlcarouseltoprated");
    owl.owlCarousel({
        singleItem: true,
        items: 1,
        pagination: true
    });
    // Custom Navigation Events
    $(".customNavigationRated .next").click(function () {
        owl.trigger('owl.next');
    });
    $(".customNavigationRated .prev").click(function () {
        owl.trigger('owl.prev');
    });



    var owl2 = $("#owlcarouselspecial");
    owl2.owlCarousel({
        singleItem: true,
        items: 1,
        pagination: true
    });
    // Custom Navigation Events
    $(".customNavigationSpecial .next").click(function () {
        owl2.trigger('owl.next');
    });
    $(".customNavigationSpecial .prev").click(function () {
        owl2.trigger('owl.prev');
    });

    var owl3 = $("#owlcarouselnewin");
    owl3.owlCarousel({
        singleItem: true,
        items: 1,
        pagination: true
    });
    // Custom Navigation Events
    $(".customNavigationNew .next").click(function () {
        owl3.trigger('owl.next');
    });
    $(".customNavigationNew .prev").click(function () {
        owl3.trigger('owl.prev');
    });




    $('.owl-blog2').owlCarousel({
        singleItem: false,
        items: 3,
        navigation: false,
    });

    $('#owl-insta').owlCarousel({
        singleItem: false,
        items: 5,
        navigation: false,
    });

    $('.owl-ecommerce').owlCarousel({
        singleItem: false,
        items: 4,
        navigation: false
    });

    $('.owl-ecommerce2').owlCarousel({
        singleItem: false,
        items: 4,
        navigation: false
    });


    $('.owl-ecommerce3').owlCarousel({
        singleItem: false,
        items: 4,
        navigation: false
    });


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* timers */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#charts').waypoint(function () {
        // first timer
        $('.ChartNumber1').countTo({

            from: 0, // the number you want to start
            to: 4000000000, // the number you want to reach
            speed: 2000,
            refreshInterval: 10

        });

        // second timer
        $('.ChartNumber2').countTo({

            from: 0,// the number you want to start
            to: 10000,// the number you want to reach
            speed: 2000,
            refreshInterval: 50

        });


        // third timer
        $('.ChartNumber3').countTo({

            from: 0,// the number you want to start
            to: 50,// the number you want to reach
            speed: 2500,
            refreshInterval: 10
        });
    }, { offset: 500 });


    var filtertextholder = $('.FilterPositionAboslute .textholder');
    $("#filters .btn").click(function () {
        var Text = $(this).text();
        filtertextholder.text(Text);
    });


});