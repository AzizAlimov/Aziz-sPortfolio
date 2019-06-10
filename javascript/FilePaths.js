// creates module named scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

//configure routes
scotchApp.config(function($routeProvider) {
	$routeProvider

	// route for home page
	.when('/', {
		templateUrl: '../index.html',
		controller: 'mainController'
	})

	// route for about pages
	.when('/about2018', {
		templateUrl: '../AboutPages/About2018.html',
		controller: 'about2018Controller'
	})

	.when('/about2019', {
		templateUrl: '../AboutPages/About2019.html',
		controller: 'about2019Controller'
	})

	.when('/about2020', {
		templateUrl: '../AboutPages/About2020.html',
		controller: 'about2020Controller'
	});
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
	$scope.message = 'An Angular Controller injects this message using $scope.';

});

scotchApp.controller('about2018Controller', function($scope) {
	$scope.message = '';
});

scotchApp.controller('about2019Controller', function($scope) {
	$scope.message = '';
});

scotchApp.controller('about2020Controller', function($scope) {
	$scope.message = '';
});