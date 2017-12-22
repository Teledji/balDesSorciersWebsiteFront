'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:ActivitiesCtrl
 * @description
 * # ActivitiesCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');

app.controller('ActivitiesCtrl', function ($scope) {
  $scope.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  $scope.active = 0;
  $scope.images = [
    '/images/Home/BALDS.jpg',
    '/images/Home/homeBack.jpg',
    '/images/Home/BALDS2.jpg'
  ];

  $scope.pLen = $scope.images.length;
  
  $scope.position = function(key) {
    return {
      left: key < $scope.active,
      right: key > $scope.active,
      hide: Math.abs($scope.active-key) > 1
    }
  };
  
  $scope.next = function () {
    if ($scope.active < $scope.pLen-1) {
      $scope.active += 1;
    }
    else{
      $scope.active = 0;
    }
  }
  
  $scope.prev = function () {
    if ($scope.active > 0) {
      $scope.active -= 1;
    }
    else{
      $scope.active = $scope.pLen-1;
    }
  };

});
