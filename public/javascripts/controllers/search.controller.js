'use strict';

mainApp.controller('SearchController', ['$scope', '$http', '$stateParams', '$state', '$window', '$log', 'UserService', function($scope, $http, $stateParams, $state, $window, $log, UserService) {
  // variables
  $scope.downloadedFiles = UserService.getDownloadedFiles();
  $scope.edit = function(id) {
	UserService.setEditItemId(id);
	$state.go('edit'); 	
  }
  $scope.back = function() {
  	$state.go('home');
  }
}]);

