var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .when('/pets', {
      templateUrl: '/views/pets.html',
      controller: "PetController"
    })
    .when('/favorites', {
      templateUrl: '/views/favorites.html',
      controller: "FavoriteController"
    })
    .otherwise({
      redirectTo: 'home'
    });
}]);
