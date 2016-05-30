myApp.controller('FavoriteController', ['$scope', '$http', function ($scope, $http) {
  console.log('favorite controller running');
   $scope.favs = [];
   getFavorites();
   function getFavorites() {
   $http.get('/favorite')
   .then(function (response) {
    $scope.favs = response.data;
     console.log('GET /favorite ', response.data);

   });
 }


}]);
