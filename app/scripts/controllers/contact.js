'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');

app.controller('ContactCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
