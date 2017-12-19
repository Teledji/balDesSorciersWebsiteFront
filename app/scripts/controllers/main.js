'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');
var uri = 'http://localhost:8080';

angular.module('app', ['uiGmapgoogle-maps'])
.config(['uiGmapGoogleMapApiProvider', function(uiGmapGoogleMapApiProvider) {
	uiGmapGoogleMapApiProvider.configure({
		key: "key", //Clé pour utiliser l'API
		v: '3.17', //Par défaut la version la plus récente disponible
		libraries: 'geometry,visualization' //Librairies supplémentaires
	});
}]) ;

app.controller("MainCtrl", function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.personName = "Zéro";
    $scope.hello = function(){
      return "Je te déteste ";
    } 

    $scope.greetingService = function(){
      $http.get(uri + '/greeting?name=axel').
        then(function(response){
          $scope.geeting = response.data;
        })
    };

    $scope.ageService = function(){
      $http.get(uri + '/customer/age/' + $scope.id).
        then(function(response){
          if(response.data != -1){
            $scope.age = response.data;
          }
          else{
            $scope.age = "L'age n'est pas renseigné";
          }
        })
    };

    $scope.person = null;

    $scope.customerService = function(){
      $http.get(uri + '/customer/' + $scope.id).
        then(function(response){
          console.log(response.data);
          if(response.data != "" && response.data != null){
            $scope.person = response.data;
            $scope.showAgeWebService = false;
          } 
        })
    }

    $scope.callServices = function(){
      $scope.greetingService();
      $scope.ageService();
      $scope.customerService();
    }

    $scope.showAgeWebService = false;
    $scope.textInputChange = function(){
      $scope.showAgeWebService = true;
    }

    $scope.insertNewCustomer = function (personId, personFirstName, personLastName, personAge, personAddress) {
      var person = {
        personid: personId,
        firstName: personFirstName,
        lastName: personLastName,
        age: personAge,
        address: personAddress
      };
      console.log(JSON.stringify(person));
      //Call the services
      $http.post(uri + '/customer', JSON.stringify(person))
      .then(function(response) {
        console.log(JSON.stringify(response.data));
      });
    };

    $scope.insertCustomer = false;
    $scope.showInsertCustomer = function(){
      $scope.insertCustomer = !$scope.insertCustomer;
    }

    //Initialisation des variables
    $scope.map = {
      center: {
    latitude: 46.5132, //Position initial de la carte
    longitude: 0.1033
      },
      zoom: 11 // de 0 à 19, 0 étant la valeur de zoom la plus forte
    };

    $scope.markers = [{
      coord: {
        latitude: 44.93, //Coordonnées où placer le point
        longitude: 4.89
      },
      email: "netapsys@netapsys.fr", //Propriété métier, pour les afficher à l'utilisateur lorsqu'il sélectionne le point par exemple
      icon: "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi.png", //Icone personnalisée
      id: 412
    },{
      coord: {
        latitude: 46.5132,
        longitude: 0.1033
      },
      email: "netapsys@netapsys.fr",
      icon: "//developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png", //Icone personnalisée
      id: 413
    }];

    $scope.clickMarker = function(marker) {
      alert(marker.email); //Affichera l'email du point sur lequel on a cliqué
    };
    
});


  

