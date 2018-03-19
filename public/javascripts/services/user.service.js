mainApp.factory('UserService', function($http, $log, $q) {
  return {
    download: function() {
      var deferred = $q.defer();
      $http.get('/api/v1/users/download')
        .success(function(res) {
          deferred.resolve(res);
        }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
     return deferred.promise;
    },
    upload: function() {
      var deferred = $q.defer();
      $http.get('/api/v1/users/upload')
        .success(function() {
          deferred.resolve();
        }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
      return deferred.promise;
    },
    // updateUser: function(id, user) {
    //   var deferred = $q.defer();
    //   $http.put('/api/v1/users/' + id, user)
    //     .success(function(user) {
    //       deferred.resolve(user);
    //     }).error(function(msg, code) {
    //       deferred.reject(msg);
    //       $log.error(msg, code);
    //     });
    //   return deferred.promise;
    // },
    // editUser: function(id) {
    //   var deferred = $q.defer();
    //   $http.get('/api/v1/users/' + id)
    //     .success(function(user) {
    //       deferred.resolve(user);
    //     }).error(function(msg, code) {
    //       deferred.reject(msg);
    //       $log.error(msg, code);
    //     });
    //   return deferred.promise;
    // },
    // deleteUser: function(id) {
    //   var deferred = $q.defer();
    //   $http.delete('/api/v1/users/' + id)
    //     .success(function(user) {
    //       deferred.resolve(user);
    //     }).error(function(msg, code) {
    //       deferred.reject(msg);
    //       $log.error(msg, code);
    //     });
    //   return deferred.promise;
    // }
  }
});
