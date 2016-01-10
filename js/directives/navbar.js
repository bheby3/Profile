var app = angular.module('app');

app.directive('navbar', function() {
    return {
        retrict: 'E',
        url: '/home',
        templateUrl: 'js/directives/navBarTmpl.html'
        //link: function(scope, element, attr) {
        //    var startX = 0, startY = 0, x = 0, y = 0;

            //element.css({
            //    position: 'relative',
            //    border: '1px solid red',
            //    backgroundColor: 'white',
            //    cursor: 'pointer'
            //});

    }
});