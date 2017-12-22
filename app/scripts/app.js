'use strict';

/**
 * @ngdoc overview
 * @name frontDemoApp
 * @description
 * # frontDemoApp
 *
 * Main module of the application.
 */
var app = angular
  .module('frontDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angular-carousel-3d'
  ]);

app.controller('mainCtrl',function($scope,$http,$route, $routeParams, $location){
  });

app.config(function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/activities', {
        templateUrl: 'views/activities.html',
        controller: 'ActivitiesCtrl',
        controllerAs: 'activities'
      })
      .when('/planning', {
        templateUrl: 'views/planning.html',
        controller: 'PlanningCtrl',
        controllerAs: 'planning'
      })
      .when('/reservation', {
        templateUrl: 'views/reservation.html',
        controller: 'ReservationCtrl',
        controllerAs: 'reservation'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
