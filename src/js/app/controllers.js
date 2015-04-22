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

})();