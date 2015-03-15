'use strict';

/**
 * @ngdoc function
 * @name potatoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the potatoApp
 */
// Very sad to place this in the global scope.
var $gScope;
var jsonFlickrFeed = function(feed) {
  $gScope.feed = feed;
}
angular.module('potatoApp')
  .controller('FeedCtrl', function ($scope, $http) {
    $gScope = $scope;
    var host, href, qs;
    host = 'https://api.flickr.com',
    href = '/services/feeds/photos_public.gne',
    qs = '?tags=potato&tagmode=all&format=json';
    $http.jsonp(host + href + qs).success(function(d) {
        console.info("success");
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'fooo'
    ];
  });
