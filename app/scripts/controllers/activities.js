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

  $scope.images = [
    '/images/Home/BALDS.jpg',
    '/images/Home/BALDS2.jpg',
    '/images/Home/homeBack.jpg',
    '/images/Home/BALDS3.jpg'
  ];

  $scope.activitieTextToInclude = [
    'act1.html',
    'act2.html',
    'act3.html',
    'act4.html'
  ]

  $scope.pLen = $scope.images.length;
  $scope.active = 0;
  $scope.previousInclude = $scope.pLen-1;
  $scope.nextInclude = 1;

  $scope.positionForElement = function(key){
    if(key > $scope.active){
      if($scope.active == 0){
        if(key == $scope.pLen-1){
          // Case of not first picture and previous aren't 4
          return '/views/activitiesToInclude/' + $scope.activitieTextToInclude[$scope.pLen-1];
        }
      }
      return '/views/activitiesToInclude/' + $scope.activitieTextToInclude[$scope.nextInclude];
    }
    else if (key < $scope.active){
      if($scope.active == $scope.pLen-1){
        if(key == 0){
          // Case of not first picture and previous aren't 4
          return '/views/activitiesToInclude/' + $scope.activitieTextToInclude[0];
        }
      }
      return '/views/activitiesToInclude/' + $scope.activitieTextToInclude[$scope.previousInclude];
    }
    else{
      return '/views/activitiesToInclude/' + $scope.activitieTextToInclude[$scope.active];
    }
  }
  
  $scope.position = function(key) {
    if($scope.active == 0){
      if(key == ($scope.pLen -1)){
        return {
          left: true,
          right: false,
          hide: false
        } 
      } else{
        return {
          left: key < $scope.active,
          right: key > $scope.active,
          hide: Math.abs($scope.active-key) > 1
        }  
      }   
    } else if($scope.active == ($scope.pLen -1)){
        if(key == 0){
          return {
            left: false,
            right: true,
            hide: false
          } 
        } else {
          return {
            left: key < $scope.active,
            right: key > $scope.active,
            hide: Math.abs($scope.active-key) > 1
          }  
        }
    } else{
      return {
        left: key < $scope.active,
        right: key > $scope.active,
        hide: Math.abs($scope.active-key) > 1
      }  
    }
    
  };
  
  $scope.next = function () {
    if ($scope.active < $scope.pLen-1) {
      console.log("---------------------------------------------------------------");
      console.log("next 1");
      console.log("---------------------------------------------------------------");
      $scope.previousInclude = $scope.active;
      
      if($scope.active == $scope.pLen-2){
        $scope.nextInclude = 0;
      }
      else{
        $scope.nextInclude = $scope.active + 2;
      }
      $scope.active += 1;
      console.log("previous 1: " + $scope.previousInclude);
      console.log("active 1: "+ $scope.active);
      console.log("next 1: " + $scope.nextInclude);
    }
    else{
      console.log("---------------------------------------------------------------");
      console.log("next 2");
      console.log("---------------------------------------------------------------");
      $scope.previousInclude = $scope.pLen-1;
      $scope.active = 0;
      $scope.nextInclude = $scope.active + 1;
      console.log("previous 2: " + $scope.previousInclude);
      console.log("active 2: "+$scope.active);
      console.log("next 2: " + $scope.nextInclude);
    }
    $scope.activitieText = '/views/activitiesToInclude/' + $scope.activitieTextToInclude[$scope.active];
  }
  
  $scope.prev = function () {
    if ($scope.active > 0) {
      console.log("---------------------------------------------------------------");
      console.log("previous 1");
      console.log("---------------------------------------------------------------");
      $scope.nextInclude = $scope.active;
      $scope.active -= 1;  
      $scope.previousInclude = $scope.active -1; 
      console.log("previous 1: " + $scope.previousInclude);
      console.log("active 1: "+$scope.active);
      console.log("next 1: " + $scope.nextInclude);
    }
    else if($scope.active == 0){
      console.log("---------------------------------------------------------------");
      console.log("previous 2");
      console.log("---------------------------------------------------------------");
      $scope.previousInclude = $scope.pLen-2;
      $scope.nextInclude = $scope.active;
      $scope.active = $scope.pLen-1;    
      console.log("previous 2: " + $scope.previousInclude);
      console.log("active 2: "+$scope.active);
      console.log("next 2: " + $scope.nextInclude);
    }
    $scope.activitieText = '/views/activitiesToInclude/' + $scope.activitieTextToInclude[$scope.active];
  };

});
