(function() {
  "use strict";
  var app = angular.module('baNgServices', []);
  
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller : 'homeController'
    })
    .otherwise({
      redirectTo: '/'
    });

    // check browser support for the html5 history API
    if(window.history && window.history.pushState){

      // enable HTML5 History for pushstate ('#'-less URLs)
      $locationProvider.html5Mode(true);
      // Hashbangs
      $locationProvider.hashPrefix = '!';
    }
  }]);

  app.factory('homeFactory', function ($http) {
      var factory = {};
      factory.home = function () {
          return $http.get('data/home.json');
      };
      return factory;
  });

})();