'use strict';

/**
 * @ngdoc overview
 * @name potatoApp
 * @description
 * # potatoApp
 *
 * Main module of the application.
 */
angular
  .module('potatoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .service('sharedProperties', function(){
    var obj;
    return {
        setObject: function(o) {
            console.info("Object set");
            obj = o;
        },
        getObject: function() {
            return obj;
        }
    }
  })
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
