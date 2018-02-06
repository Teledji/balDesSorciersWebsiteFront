'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');
var uri = 'http://localhost:8080';

app.controller('ContactCtrl', function ($scope, $mdDialog, $http) {
  $scope.email = {
    name:"",
    address:"",
    content:""
  };

  $scope.sendEmail = function(){
      console.log(JSON.stringify($scope.email));
      //Call the services
      $http.post(uri + '/email', JSON.stringify($scope.email))
      .then(function(response) {
        console.log(JSON.stringify(response.data));
      });
  };

  $scope.testInsertNewUser = function() {
    var user = {
      personid:"456",
      firstName:"Mousta",
      lastName:"Chios" ,
      age:"65",
      address:"25 rue de la boustifaille", 
      houseID: "1"
    };
    console.log(user.personid);
    $http.post(uri + '/customer', JSON.stringify(user))
    .then(function(response) {
      console.log(JSON.stringify(response.data));
    });
  };

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('.container')))
        .clickOutsideToClose(true)
        .title('Message Envoyé !')
        .textContent('Votre message a bien été envoyé ! Nous y répondrons dès que possible :)')
        .ariaLabel('Notification')
        .ok('Valider')
        .targetEvent(ev)
    );
  };
});
