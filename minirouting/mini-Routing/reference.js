// $q example
var app = angular.module('app');
app.service = ('myService', function($http, $q) {


    var deferred = $q.defer();

    $http({
        method: 'GET',
        url: 'http://swapi.co/api/people/1'
    }).then(function (results) {
        deferred.resolve(results.data);

    })
    return deferred.promise
});

// $http example
//return $http({
//    method: 'GET',
//    url: 'http://swapi.co/api/people/1'
//}).then(function(results) {
//    return results.data;
//})

// Shorthand $http example
/*return $http.get('http://swapi.co/api/people/1').then(function(results) {
 return results.data;
 });*/

// Common REST verbs/methods for HTTP
/*GET - gets data
 POST - creates data
 PUT - updates data
 DELETE - deletes data*/
