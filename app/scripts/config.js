// put your config code here
/**
 * @ngdoc function
 * @name app.config:hash#route
 * @description
 * # Config
 * Config for the router
 */
 var app.config = angular.module('app',['ngRoute']);
 app.config(['$routeProvider','$localProvider', function($routeProvider,$localProvider){
	 #localProvider.html5Mode({
		 enabled:true,
		 requireBase:false
		 })
 }]);