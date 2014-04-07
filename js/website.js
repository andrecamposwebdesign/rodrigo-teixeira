angular.module('website', []).
	config(function($routeProvider) {

		$routeProvider.
			when('/home', {templateUrl:'templates/home.html'}).
			when('/areas', {templateUrl:'templates/areas-template.html'}).
			when('/profile', {templateUrl:'templates/profile-template.html'}).
			when('/contact', {templateUrl:'templates/contact-template.html'}).
			otherwise({redirectTo:'/home', templateUrl:'templates/home.html'});
	});


function MainCtrl($scope, $location) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
}


