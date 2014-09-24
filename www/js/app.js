// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html"
      //controller: 'AppCtrl'
    })

    // Scrolling demo
    .state('app.scrolling', {
      url: "/scrolling",
      views: {
        'menuContent' :{
          templateUrl: "templates/scrolling.html",
          controller: "ScrollingCtrl"
        }
      }
    })

    // Navigation demo
    .state('app.navigation', {
      url: "/navigation",
      views: {
        'menuContent' :{
          templateUrl: "templates/navigation.html"
        }
      }
    })

    // Table Editing demo
    .state('app.tbediting', {
      url: "/tbediting",
      views: {
        'menuContent' :{
          templateUrl: "templates/tbediting.html",
          controller: "TableEditCtrl"
        }
      }
    })
    // Table Re-ordering demo
    .state('app.tbreordering', {
      url: "/tbreordering",
      views: {
        'menuContent' :{
          templateUrl: "templates/tbreordering.html"
        }
      }
    })
    // Table Sticky headers demo
    .state('app.tbheaders', {
      url: "/tbheaders",
      views: {
        'menuContent' :{
          templateUrl: "templates/tbheaders.html"
        }
      }
    })
    // Theming demo
    .state('app.theming', {
      url: "/theming",
      views: {
        'menuContent' :{
          templateUrl: "templates/theming.html"
        }
      }
    })




/*
// setup an abstract state for the tabs directive
    .state('tab', {
      url: "/tab",
      abstract: true,
      templateUrl: "templates/navigation.html"
    })

// Each tab has its own nav history stack:
    .state('tab.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html'
        }
      }
    })
    .state('tab.friends', {
      url: '/friends',
      views: {
        'tab-friends': {
          templateUrl: 'templates/tab-friends.html',
          controller: 'FriendsCtrl'
        }
      }
    })
    .state('tab.friend-detail', {
      url: '/friend/:friendId',
      views: {
        'tab-friends': {
          templateUrl: 'templates/friend-detail.html',
          controller: 'FriendDetailCtrl'
        }
      }
    })
    .state('tab.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html'
        }
      }
    })*/


    // List and Detail
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })
    .state('app.single', {
      url: "/playlists/:playlistId",
      views: {
        'menuContent' :{
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/scrolling');
});

