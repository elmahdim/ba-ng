(function() {
  "use strict";
  var app = angular.module('baNgApp', [
    'ngRoute',
    'baNgServices',
    'baNgControllers'
    ]);
  
})();;
(function() {
  "use strict";
  var app = angular.module('baNgControllers', []);
  
  app.controller('homeController', ['$http', '$scope', '$routeParams', 'homeFactory', function($http, $scope, $routeParams, homeFactory){
    
    console.log('@init: homeController');

    function init() {
      homeFactory.home()
      .success(function (data) {
        $scope.home   = data;
        $scope.params = $routeParams;
      })
      .error(function(data) {
        console.log('Unable to retrieve data form home.json');
      });
    }
    init();
  }]);

})();;
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