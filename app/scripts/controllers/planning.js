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

app.controller('PlanningCtrl', function ($scope) {
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

  $scope.activitiesSamedi= [
    {
      name: "Acceuil",
      description: "Bievenue au bal des sorciers ! Discours de Magical Event",
      room: "Salle du trône",
      time: "9h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "10h00",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "10h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "11h00",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "11h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "12h00",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "12h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "13h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "14h00",
      money: "10€",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "14h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "15h00",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "15h30",
      money: "1€",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "16h00",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "16h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "17h00",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "17h30",
      money: "2€",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "18h00",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "18h30",
      money: "/",
    },
    {
      name: "Duel de sorcier",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "19h00",
      money: "/",
    },
    {
      name: "Banquet",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "20h00",
      money: "5€",
    },
    {
      name: "Ouverture du bal",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "22h00",
      money: "/",
    },
    {
      name: "Clôture du bal",
      description: "Venez confronter vos amis dans d'impitoyables duels !",
      room: "Salle du trône",
      time: "03h00",
      money: "/",
    }
  ];

  $scope.activitiesDimanche= [
    {
      name: "Acceuil",
      description: "Bievenue au bal des sorciers ! Discours de Magical Event",
      room: "Salle du trône",
      time: "9h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "10h00",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "10h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "11h00",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "11h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "12h00",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "12h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "13h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "14h00",
      money: "10€",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "14h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "15h00",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "15h30",
      money: "1€",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "16h00",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "16h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "17h00",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "17h30",
      money: "2€",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "18h00",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "18h30",
      money: "/",
    },
    {
      name: "Escape Game",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "19h00",
      money: "/",
    },
    {
      name: "Banquet",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "20h00",
      money: "5€",
    },
    {
      name: "Ouverture du bal",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "22h00",
      money: "/",
    },
    {
      name: "Clôture du bal",
      description: "tentez de vous échapper de la salle !",
      room: "Salle du trône",
      time: "03h00",
      money: "/",
    }
  ];
});
