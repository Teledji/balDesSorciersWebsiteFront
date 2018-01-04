'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');

app.controller('ContactCtrl', function ($scope,$mdDialog) {
  $scope.email = {
    nom:"",
    email:"",
    message:""
  };

  $scope.emailToSend = function(){
    console.log($scope.email);
  };

  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.querySelector('.container')))
        .clickOutsideToClose(true)
        .title('This is an alert title')
        .textContent('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };
});
