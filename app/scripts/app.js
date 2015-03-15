'use strict';

/**
 * @ngdoc overview
 * @name potatoApp
 * @description
 * # potatoApp
 *
 * Main module of the application.
 */

// Very sad to place this in the global scope.
var jsonFlickrFeed;
angular
  .module('potatoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .service('flickr-feed', ['$http', function($http) {
    var host, href, qs;
    host = 'https://api.flickr.com',
    href = '/services/feeds/photos_public.gne',
    qs = '?tags=potato&tagmode=all&format=json';
    var feed;
    jsonFlickrFeed = function(f) {
      feed = f;
      $(document).trigger('feed-loaded');
    }
    // TODO: Refactor this out to the shared property
    // so that it can ensure that we only get the feed
    // exactly once.
    $http.jsonp(host + href + qs);
    return {
        getObject: function(cb) {
            if(feed) {
                cb(feed);
                return;
            }
            $(document).on('feed-loaded', function() {
                cb(feed);
            });
        }
    }
}])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/feed.html',
        controller: 'FeedCtrl'
      })
      .when('/detail/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
