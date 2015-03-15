'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoApp
 */
angular.module('potatoApp')
  .controller('FeedCtrl', ['$scope', '$http', 'flickr-feed', function ($scope, $http, feed) {
    feed.getObject(function(feed) {
      console.info("feed: " + feed);
      $.extend($scope, feed);
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'fooo'
    ];
  }]);
