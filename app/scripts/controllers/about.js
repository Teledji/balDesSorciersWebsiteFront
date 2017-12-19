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
  $scope.varTest = myFactoryTest.service1();
});

app.factory("myFactoryTest", function($scope){
  return{
    service1:function(){
      return "My service 1";
    },
    service2:function(){

    },
  }
  
});
