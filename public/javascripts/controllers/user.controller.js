'use strict';

mainApp.controller('UserController', ['$scope', '$http', '$stateParams', '$state', '$window', '$log', 'UserService', function($scope, $http, $stateParams, $state, $window, $log, UserService) {
  // variables

  $scope.download = function() {
	UserService.download().then(function(res) {
		UserService.setDownloadedFiles(res);
		UserService.getPickCode().then(function(res) {
			UserService.setPickList(res);
			$state.go('search');
		}, function(err) {
		});
	}, function(err) {
	});
	
	
  }
  $scope.upload = function() {
  	UserService.upload();	
  }
}]);

