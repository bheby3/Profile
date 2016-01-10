//var app = angular.module('miniRouting', ['ui.router']);
//
//app.config(function($stateProvider, $urlRouterProvider) {
//
//    $stateProvider
//        .state('home', {
//            templateUrl: '/js/home/homeTmpl.html',
//            url: '/', //default go to home page
//            controller: 'homeCtrl'
//        })
//        .state('settings', {
//            url: '/settings', //must have the slash
//            templateUrl: '/js/settings/settingsTmpl.html',
//            controller: 'settingsCtrl'
//        })
//        .state('products', {
//            templateUrl: '/js/products/productsTmpl.html',
//            url: '/products/:id', //single products page but take in id of the product we're looking at.
//            controller: 'productsCtrl'
//        });
//
//    $urlRouterProvider
//        .otherwise('/'); //otherwise redirect to homepage.
//});

var app = angular.module('miniRouting', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', { //this is the name that ui-sref is based on ex : ui-sref="home"
            url: '/',
            templateUrl: 'js/home/homeTmpl.html',
            controller: 'homeCtrl'
        })
        .state('settings', {
            url: '/settings',
            templateUrl: 'js/settings/settingsTmpl.html',
            controller: 'settingsCtrl'
        })
        .state('products', {
            url: '/products/:id',
            templateUrl: 'js/products/productsTmpl.html',
            controller: 'productsCtrl'
        });

    $urlRouterProvider
        .otherwise('/');
});