'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');

app.controller("HomeCtrl", function ($scope, $http) {
  $scope.slides = [
    {
      image: '/images/Home/BALDS.jpg'
    },
    {
      image: '/images/Home/homeBack.jpg'
    },
    {
      image: '/images/Home/BALDS.jpg'
    },
    {
        image: '/images/Home/homeBack.jpg'
    }
  ];
});
