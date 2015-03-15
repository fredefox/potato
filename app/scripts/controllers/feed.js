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
  $.extend($gScope, feed);
}
angular.module('potatoApp')
  .controller('FeedCtrl', ['$scope', '$http', 'sharedProperties', function ($scope, $http, sp) {
    $gScope = $scope;
    var host, href, qs;
    host = 'https://api.flickr.com',
    href = '/services/feeds/photos_public.gne',
    qs = '?tags=potato&tagmode=all&format=json';
    jsonFlickrFeed = function(feed) {
        $.extend($gScope, feed);
        sp.setObject(feed);
    }
    // TODO: Refactor this out to the shared property
    // so that it can ensure that we only get the feed
    // exactly once.
    $http.jsonp(host + href + qs).success(function(d) {
        console.info("success");
    });
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'fooo'
    ];
  }]);
