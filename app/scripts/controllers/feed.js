'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('FeedCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'fooo'
    ];
  });
