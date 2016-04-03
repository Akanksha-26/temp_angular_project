var angular=require('angular');

var app=angular.module('mainModule',[require('angular-ui-router')]);


var routes = require('./router');

var configs = require('../config/config');

var homeController = require('./controllers/homeController');

app.config(['$stateProvider','$urlRouterProvider',routes]);

app.constant('navbarTabs', configs.navbarTabs);

app.controller('homeCtrl', ['$scope','navbarTabs',homeController]);

