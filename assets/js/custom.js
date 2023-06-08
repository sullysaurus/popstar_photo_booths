"use strict";

// Main banner
    
if ($('#main_banner').length) {
    $('#main_banner').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    animateIn: 'fadeIn', 
    animateOut: 'fadeOut',
    autoplay:true,
    responsive:{
            0:{
                items:1
            },
            760:{
                items:1
            },
            1170:{
                items:1
            }
        }
    })
}


// testimonial carousel

if ($('#testimonial_owl_id').length) {

    $('#testimonial_owl_id').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    animateIn: 'fadeIn', 
    animateOut: 'fadeOut',
    responsive:{
            0:{
                items:1
            },
            760:{
                items:1
            },
            1170:{
                items:1
            }
        }
    })
}

// blog carousel

if ($('#blog_owl_id').length) {

    $('#blog_owl_id').owlCarousel({
    loop:true,
    margin:50,
    nav:true,
    dots:false,
    responsive:{
            0:{
                items:1
            },
            760:{
                items:1
            },
            1170:{
                items:3
            }
        }
    })
}


// about carousel


$(window).load(function(){

    if ($('#about_owl_id').length) {

        $('#about_owl_id').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        dots:false,
        responsive:{
                0:{
                    items:1
                },
                760:{
                    items:1
                },
                1170:{
                    items:1
                }
            }
        })

    }
});



if ($('#p-booth_list').length) {
    $('#p-booth_list').owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        slideTransition: 'linear',
        autoplayTimeout: 0,
        autoplaySpeed: 3000,
        autoplayHoverPause: false,
        responsive:{
            0:{
                items:1
            },
            760:{
                items:3
            },
            1170:{
                items:6
            }
        }
    });
}



// fixed header

if ($('#mainNav').length) {

    $(document).on("scroll",function(){

        var header_scroll = $(this).scrollTop();
        
        var body_width = $('body').width();

        if( body_width > 991 ){

            if ( header_scroll > 450 ) {
                $("#mainNav").addClass("fixed_header");
            }else {
                $("#mainNav").removeClass("fixed_header");
            }

        }else{
            $("#mainNav").removeClass("fixed_header");
        }

        $(".header_cover").attr("data-aos","");
    });
}


// Gallery 

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});


// gallery light box close system


$(".gallery_close_btn").on("click",function(){
    $(".ekko-lightbox").trigger('click');
});

$(".gallery_close_btn").on("click",function(){
    $(this).fadeOut();
});

$(".gallery_box img").on("click",function(){
    $(".gallery_close_btn").fadeIn();
});


// scroll hover (aos)
AOS.init();


// sub menu code

if ($('.submenu_box').length) {
    $(".submenu_box").append('<span class="drop_down_btn"><span class="down_btn_icon"></span></span>');
    $(".submenu_box").on('click',function(){
        $(this).closest(".submenu_box").children(".submenu_box_inner").toggle();
    });
}


// testimonials masonry code

if( $('.grid').length ){
    $('.grid').masonry({
      itemSelector: '.grid-item'
    });
}

// font awesome css ( after / before )

window.FontAwesomeConfig = {
    searchPseudoElements: true
}


// landing parallex 

if( $('.landing_container').length ){
    $(document).mousemove( function( e ) {
        $('.landing_container .row > div:nth-child(1n)').parallax(-30, e);
        $('.landing_container .row > div:nth-child(2n)').parallax(-40, e);
        $('.landing_container .row > div:nth-child(3n)').parallax(-30, e);
    });
}