var common = angular.module('common', []);
common.directive('rlHeader', function () {
    return {
        restrict: 'E'
        , controller: function ($scope, $rootScope) {}
        , templateUrl: 'rl-header.html'
    };
});
common.directive('rlFooter', function () {
    return {
        restrict: 'E'
        , controller: function ($scope, $rootScope) {}
        , templateUrl: 'rl-footer.html'
    };
});
//Initialize wow.js
new WOW().init();