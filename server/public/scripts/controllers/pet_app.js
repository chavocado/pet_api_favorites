myApp.controller('PetController', ['$scope', '$http', function($scope, $http) {
  console.log('pet controller running');
  //api key
  var key = '7a407777e9ad874499e799cacb8a61ac';
  var baseURL = 'http://api.petfinder.com/';
  // $scope.breed = '';
  $scope.hidden = false;
  $scope.favs = [];
  getFavorites();

  $scope.changeAnimal = function() {
        console.log($scope.animal);
        if($scope.animal !== '') {
            $scope.getRandomPet();
        }
    };

  $scope.getRandomPet = function() {
      var baseURL = 'http://api.petfinder.com/';
      var query = 'pet.getRandom';
      query += '?key=' + key;
      query += '&animal=' + $scope.animal;
      query += '&output=basic';
      query += '&format=json';

      var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
      console.log(request);

      $http.jsonp(request).then(
          function(response) {
              $scope.pet = response.data.petfinder.pet;
              console.log($scope.pet);
          }
      );
  };

  $scope.submitFavorite = function () {
          $scope.favData = {
            petID: $scope.pet.id.$t,
            name: $scope.pet.name.$t,
            image: $scope.pet.media.photos.photo[2].$t,
            description: $scope.pet.description.$t.substring(0, 99),
            // description: $scope.pet.description.$t,
            city: $scope.pet.contact.city.$t,
            state: $scope.pet.contact.state.$t
          };
          var data = $scope.favData;
          console.log(data);
          $http.post('/favorite', data)
            .then(function () {
              console.log(1, 'POST /favorite');
              getFavorites();
            });
        };

  function getFavorites() {
    $http.get('/favorite')
    .then(function (response) {
     $scope.favs = response.data;
    console.log('GET /favorite ', response.data);

    });
    }



}]);
