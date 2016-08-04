angular.module('comission', [])
	.config(comissionRouter);

function comissionRouter ($routeProvider) {
	$routeProvider
		.when('/', {templateUrl: 'partials/main.html'})
		.when('/resume', {templateUrl: 'partials/resume.html'})
		.when('/contacts', {templateUrl: 'partials/contacts.html'})
		.when('/progress', {templateUrl: 'partials/progress.html'})
		.when('/skills', {templateUrl: 'partials/skills.html'})
		.when('/price', {templateUrl: 'partials/price.html'});
}