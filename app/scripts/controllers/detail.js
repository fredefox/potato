'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('DetailCtrl',
    ['$scope', '$routeParams', 'sharedProperties',
      function ($scope, $routeParams, sp) {
    console.info(sp.getObject());
    $scope.item = sp.getObject()[$routeParams.id];
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
