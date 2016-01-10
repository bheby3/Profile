//var app = angular.module('miniRouting');
//
//app.controller('productsCtrl', function($scope, $stateParams, productService) {
//
//    if ($stateParams.id === 'shoes') {
//        $scope.productData = productService.shoeData;
//    }
//    else if ($stateParams.id === 'socks') {
//        $scope.productData = productService.sockData;
//    }
//});
var app = angular.module('miniRouting');

app.controller('productsCtrl', function ($scope, $stateParams, productService) {
    if ($stateParams.id === 'shoes') {
        $scope.productData = productService.shoeData;
    }
    else if ($stateParams.id === 'socks') {
        $scope.productData = productService.sockData;
    }
});



//.then is a method on the promise object that gets created
//})
//
//angular.module('nbaRoutes')
//    .controller('listController', function($scope, $state, friendsService, $stateParams){
////var idx= $stateParams.sweetIdx;
////$scope.sweetName = sweetsService.sweet[idx].name
////$scope.sweetDesc = sweetsService.sweet[idx].desc
//// example only  all of this is driven by the url
