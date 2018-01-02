'use strict';

/**
 * @ngdoc function
 * @name frontDemoApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the frontDemoApp
 */
var app = angular.module('frontDemoApp');

app.controller('IndexCtrl', function ($scope, $location) {
    $scope.isActive = function (viewLocation) { 
        return viewLocation === $location.path();
    };
});
