'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');

app.controller('AboutCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
