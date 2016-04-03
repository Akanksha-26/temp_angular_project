var angular=require('angular');

var app=angular.module('mainModule',[require('angular-ui-router')]);

// var tempController=require('./router');

// app.controller('mycontroller',['$scope' ,tempController]);

// app.controller('personCtrl', function($scope) {
//     $scope.firstName = "John";
//     $scope.lastName = "Doe";
   
// });

var routes = require('./router');

app.config(['$stateProvider','$urlRouterProvider',routes]);

