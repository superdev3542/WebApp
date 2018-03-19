'use strict';

mainApp.controller('UserController', ['$scope', '$http', '$stateParams', '$state', '$window', '$log', 'UserService', function($scope, $http, $stateParams, $state, $window, $log, UserService) {
  // variables

  $scope.download = function() {
	UserService.download().then(function(success) {
		
	}, function(err) {

	});
  }
  $scope.upload = function() {
  	UserService.upload().then(function(success) {

	}, function(err) {

	});	
  }
}]);

