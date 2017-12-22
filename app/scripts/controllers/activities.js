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

  $scope.slides = [
    {
      src: '/images/Home/BALDS.jpg'
    },
    {
      src: '/images/Home/homeBack.jpg'
    },
    {
      src: '/images/Home/BALDS.jpg'
    },
    {
      src: '/images/Home/homeBack.jpg'
    }
  ]

});
