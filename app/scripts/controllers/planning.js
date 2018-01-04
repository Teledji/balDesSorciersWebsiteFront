'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:PlanningCtrl
 * @description
 * # PlanningCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');
var prefix = '/views/dayPlanning/';

app.controller('PlanningCtrl', function ($scope, $http) {
  $scope.isDimancheActive = false;
  $scope.isSamediActive = true;

  $scope.setActive = function(day){
    if(day === 1){
      $scope.isSamediActive = true;
      $scope.isDimancheActive = false;
    }else{
      $scope.isDimancheActive = true;
      $scope.isSamediActive = false;
    }
  }

  $scope.getContentBySelectedDay = function(){
    var url;
    if($scope.isSamediActive){
      url = 'samedi.html';
    } 
    else{
      url = 'dimanche.html';
    }
    return prefix + url;
  }

  $scope.parseSamedi = function(){
    $http.get('/scripts/json/planningSamedi.json').then(function(parsedFile){
      $scope.activitiesSamedi = angular.fromJson(parsedFile.data.activities);
    });
  };

  $scope.parseDimanche = function(){
    $http.get('/scripts/json/planningDimanche.json').then(function(parsedFile){
      $scope.activitiesDimanche = angular.fromJson(parsedFile.data.activities);
    });
  };

  $scope.parseSamedi();
  $scope.parseDimanche();
});
