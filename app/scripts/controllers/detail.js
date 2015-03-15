'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('DetailCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
