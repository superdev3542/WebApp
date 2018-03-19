
(function () {
  'use strict';

  angular
    .module('mainApp')
    .config(routeConfig);

  routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$httpProvider'];

  function routeConfig($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '/javascripts/views/home.template.html',
        controller: 'UserController'
      })
      .state('search_result', {
        url: '/search_result',
        templateUrl: '/javascripts/views/search_result.template.html',
        controller: 'UserController'
      })
      .state('edit', {
        url: '/edit',
        templateUrl: '/javascripts/views/edit.template.html',
        controller: 'UserController'
      })
      .state('search', {
        url: '/search',
        templateUrl: '/javascripts/views/search.template.html',
        controller: 'UserController'
      });
  }
}());