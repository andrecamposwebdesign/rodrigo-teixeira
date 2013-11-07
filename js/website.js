angular.module('website', []).
	config(function($routeProvider) {
		$routeProvider.
			when('/home', {template:'templates/home.html'}).
			when('/areas', {template:'templates/areas-template.html'}).
			when('/profile', {template:'templates/profile-template.html'}).
			when('/contact', {template:'templates/contact-template.html'}).
			otherwise({redirectTo:'/home', template:'templates/home.html'});
	});

function MainCtrl($scope, $location) {
	$scope.setRoute = function(route) {
		$location.path(route);
	}
}


