// SMOOTH SCROLLING SECTIONS
$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});

$(document).ready(function() {
    var one = $("#one");
    var two = $("#two");
    one.owlCarousel({
        loop: true,
        margin: 20,
        nav: false,
        autoplay: true,
        slideTransition: 'linear',
        autoplaySpeed: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }

        }
    });
    // NAVIGATION FOR OWL CAROUSEL
    var owl = one;
    owl.owlCarousel();
    $('#customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('#customPrevBtn').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    });

    //Init the carousel

    two.owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        dots: false,
        slideTransition: 'linear',
        autoplaySpeed: 1500,
        onInitialized: startProgressBar,
        onTranslate: resetProgressBar,
        onTranslated: startProgressBar
    });

    function startProgressBar() {
        $(".slide-progress").css({
            width: "100%",
            transition: "width 3000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }
});

//SIMPLE PARLLAX
var second = document.getElementsByClassName('secondthumbnail');
new simpleParallax(second, {
    overflow: true,
    transition: 'cubic-bezier(0,0,0,1)'
});
var second2 = document.getElementsByClassName('secondthumnailone');
new simpleParallax(second2, {
    overflow: true,
    orientation: 'left',
    transition: 'cubic-bezier(0,0,0,1)'
});
var fifth0 = document.getElementsByClassName('fifth_thumbnail0');
new simpleParallax(fifth0, {
    overflow: true,
       orientation: 'right',
    transition: 'cubic-bezier(0,0,0,1)'
});
var fifth1 = document.getElementsByClassName('fifth_thumbnail1');
new simpleParallax(fifth1, {
    overflow: true,
    orientation: 'up',
    transition: 'cubic-bezier(0,0,0,1)'
});
var fifth2 = document.getElementsByClassName('fifth_thumbnail2');
new simpleParallax(fifth2, {
    overflow: true,
       orientation: 'left',
    transition: 'cubic-bezier(0,0,0,1)'
});