'use strict';

mainApp.controller('EditController', ['$scope', '$http', '$stateParams', '$state', '$window', '$log', 'UserService', function($scope, $http, $stateParams, $state, $window, $log, UserService) {
  // variables
  $scope.editableItem = UserService.getEditableItem();
  $scope.picklist = UserService.getPickList();
  $scope.editedValue = "";
  $scope.save = function() {
  	console.log($scope.editedValue);
  	UserService.updateItem($scope.editedValue);
  	$state.go('search');
  }
  $scope.Update = function(item) {
  	console.log(item);
  	$scope.editedValue = item;
  }
  $scope.back = function() {
  	$state.go('search');
  }
}]);

