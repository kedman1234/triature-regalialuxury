var app = angular.module("slider-app", ['common']);

app.controller("SliderCtrl", ["$scope", "$http", "$window", "$location", "$anchorScroll", "$timeout", function ($scope, $http, $window, $location, $anchorScroll, $timeout) {

    //Init the carousel
    initSlider();

    function initSlider() {
        $(".owl-carousel").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            dots: false,
            onInitialized: startProgressBar,
            onTranslate: resetProgressBar,
            onTranslated: startProgressBar
        });
    }

    function startProgressBar() {
        // apply keyframe animation
        $(".slide-progress").css({
            width: "100%",
            transition: "width 5000ms"
        });
    }

    function resetProgressBar() {
        $(".slide-progress").css({
            width: 0,
            transition: "width 0s"
        });
    }


}]);