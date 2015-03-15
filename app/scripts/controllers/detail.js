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
    ['$scope', '$routeParams', 'flickr-feed',
      function ($scope, $routeParams, sp) {
    sp.getObject(function(feed) {
        $scope.item = feed.items[$routeParams.id];
        console.info(feed);
    })
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);
