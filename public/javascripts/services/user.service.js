mainApp.factory('UserService', function($http, $log, $q) {
  var downloadedFiles = [];
  var pickList = [];
  var editItemId = -1;
  var changelist= [];
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
      $http.post('/api/v1/users/upload', changelist)
        .success(function(data, status) {
          console.log('Data send successfully');
        });
    },
    setDownloadedFiles: function(data) {
      downloadedFiles = data;
    },
    getDownloadedFiles: function() {
      return downloadedFiles;
    },
    getPickCode: function() {
      var deferred = $q.defer();
      $http.get('/api/v1/users/getpickcode')
        .success(function(res) {
          deferred.resolve(res);
        }).error(function(msg, code) {
          deferred.reject(msg);
          $log.error(msg, code);
        });
     return deferred.promise;
    },

    setPickList: function(data) {
      pickList = data;
    },
    getPickList: function() {
      return pickList;
    },
    setEditItemId: function(data) {
      editItemId = data;
    },
    getEditableItem: function() {
      if (editItemId == 1) {
        return "routing error";
      }
      return downloadedFiles[editItemId];
    },
    updateItem: function(data) {
      downloadedFiles[editItemId]['Pick Zone'] = data;
      var changeData = {'id': editItemId, 'data':data};
      changelist.push(changeData);
    }
  }
});
