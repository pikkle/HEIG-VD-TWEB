'use strict';

/**
 * @ngdoc function
 * @name app.route:graphRoute
 * @description
 * # graphRoute
 * Route of the app
 */

angular.module('contact')
	.config(['$stateProvider', function ($stateProvider) {

		$stateProvider
			.state('contact', {
				url:'/contact',
				templateUrl: 'modules/contact/contact.html'
			});


	}]);
