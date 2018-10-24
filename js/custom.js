

$( window ).load(function() {
    "use strict";
    $(".ip-header").addClass('loading');

    setTimeout(function() {
        $(".ip-header").removeClass('loading').addClass('loaded').fadeOut('slow');
    }, 2000 );
});

function getTemplate() {
    //$('#header').load('template.html #header');
    //$('#footer').load('template.html #footer');
}


$('.CubeWrapper').on({
    mouseenter: function () {
        $(this).removeClass( 'show-front' );
        $(this).addClass( 'show-bottom' );
    },
    mouseleave: function () {
        $(this).removeClass( 'show-bottom' );
        $(this).addClass( 'show-front' );
    }
});


$( ".SearchTrigger" ).on( "click", function() {
    $('.SearchInput').addClass('ActiveSearchInput');
});

$( ".SearchCloseTrigger" ).on( "click", function() {
    $('.SearchInput').removeClass('ActiveSearchInput');
});


$(document).ready(function () {

    "use strict";


    $('.nav a.last-child').on('click', function(){
        $('.navbar-collapse').collapse('hide');
    });

    $('.ZoomIn').magnificPopup({
        type: 'image',
        image: {
            verticalFit: true,
            tError: 'The image could not be loaded.'
        },
        gallery: {
            enabled: true, // set to true to enable gallery
            preload: [0, 2], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (<)', // title for left button
            tNext: 'Next (>)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% of %total%</span>' // markup of counter
        },
        mainClass: 'mfp-with-zoom', // this class is for CSS animation below
        closeBtnInside: false
    });


    (function(window){

        // check for touch
        if (Modernizr.touch) {


            //gallery-inner mobile function for hover
            [].slice.call(document.querySelectorAll(".gallery-inner")).forEach(function(el,i){

                // check if the user moves a finger
                var fingerMove = false;
                el.addEventListener("touchmove",function(e){
                    e.stopPropagation();
                    fingerMove = true;
                    classie.remove( el, 'hover' );
                });

                // always reset fingerMove to false on touch start
                el.addEventListener("touchstart",function(e){
                    e.stopPropagation();
                    fingerMove = false;
                    classie.remove( el, 'hover' );
                });

                // add hover class if figure touchend and fingerMove is false
                el.addEventListener("touchend",function(e){
                    e.stopPropagation();
                    if (fingerMove == false) {
                        classie.add( el, 'hover' );
                    }

                });

            });

        }

        else{

            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            /* Stellar  */
            /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
            $(window).stellar({
                responsive: true,
                horizontalOffset: 0,
                horizontalScrolling:false,
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
            $().showUp('.navbar');

        }

    })(window);



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Intro Height  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    function introHeight() {
        var wh = $(window).height();
        $('#intro').css({height: wh});
        $('#intro.HalfBackground').css({height: wh/3*2});
        $('#intro.ThreeQuarters').css({ height: wh / 4 * 3 });
        $('#hci-intro').css({ height: wh });
        $('#hci-intro.HalfBackground').css({ height: wh / 3 * 2 });
        $('#hci-intro.ThreeQuarters').css({ height: wh / 4 * 3 });
    }

    introHeight();

    $(window).bind('resize',function () {
        //Update slider height on resize
        introHeight();
    });



    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* contact form init  */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#contactform').submit(function(){
        var action = $(this).attr('action');
        $("#result").slideUp(300,function() {
            $('#result').hide();
            $('#submit')
                .attr('disabled','disabled');
            $.post(action, {
                    name: $('#name').val(),
                    email: $('#email').val(),
                    phone: $('#phone').val(),
                    comments: $('#comments').val()
                },
                function(data){
                    document.getElementById('result').innerHTML = data;
                    $('#result').slideDown('slow');
                    $('#submit').removeAttr('disabled');
                    if(data.match('success') != null) $('#contactform').slideUp('slow');
                }
            );

        });

        return false;

    });




    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* fitvids */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('.videoWrapper').fitVids();


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* Isotope */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    var $container = $('.gallery').imagesLoaded( function() {
        $container.isotope({
        });
    });


    $('#filters').on( 'click', 'a', function() {
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $container.isotope({
        filter: '*', // IF YOU WANT TO DISPLAY AT FIRST ONLY ONE FILTER, FOR EXAMPLE DESIGNS: SUBSTIUTE '*' WITH '.designs'
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
        navigation: true,
        pagination: true,
        navigationText: [
            "<i class='fa fa-angle-left fa-4x'></i>",
            "<i class='fa fa-angle-right fa-4x'></i>"
        ]
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


    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    /* timers */
    /*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
    $('#charts').waypoint(function() {
        // first timer
        $('.ChartNumber1').countTo({

            from: 0, // the number you want to start
            to: 22, // the number you want to reach
            speed: 1500,
            refreshInterval: 10

        });

        // second timer
        $('.ChartNumber2').countTo({

            from: 0,// the number you want to start
            to: 24,// the number you want to reach
            speed: 1500,
            refreshInterval: 10

        });


        // third timer
        $('.ChartNumber3').countTo({

            from: 0,// the number you want to start
            to: 7,// the number you want to reach
            speed: 1500,
            refreshInterval: 10
        });



    }, { offset: 500 });




});





