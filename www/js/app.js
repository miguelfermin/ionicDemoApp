// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
var app = angular.module('starter', ['ionic', 'starter.controllers', 'pascalprecht.translate']);

app.run(function($ionicPlatform) {
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
});

app.config(['$stateProvider','$urlRouterProvider', '$translateProvider', function($stateProvider, $urlRouterProvider, $translateProvider) {
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
    // Translations and Localization
    .state('app.localization', {
      url: "/localization",
      views: {
        'menuContent' :{
          templateUrl: "templates/localization.html"
          //controller: "ScrollingCtrl"
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

  // Internationalization and Localization with 'angular-translation' framework //
  $translateProvider.translations('en', translations_en);
  $translateProvider.translations('es', translations_es);
  $translateProvider.preferredLanguage('en');
}]);

/* Translation table */
var translations_en = {
  title: 'Cars Kill More Teens than Computers and Cell Phones Combined',
  story: 'Prevalence estimates vary according to definition and measurement, but do not appear to be rising substantially with increasing access to mobile and online technologies, possibly because these technologies pose no additional risk to offline behaviour, or because any risks are offset by a commensurate growth in safety awareness and initiatives!',
  author: 'Justin W Patchin',
  date: 'Published on {{date}}'
};

var translations_es = {
  title: 'Coches matan a más adolescentes que las computadoras y los teléfonos celulares combinados',
  story: 'Las estimaciones de prevalencia varían según la definición y medición, pero no parecen estar aumentando sustancialmente con el aumento del acceso a las tecnologías móviles y en línea, posiblemente porque estas tecnologías no representan un riesgo adicional a la conducta fuera de línea, o porque los riesgos se ven compensados ​​por un crecimiento proporcional en la seguridad sensibilización e iniciativas!',
  author: 'Justin W Patchin',
  date: 'Publicado el {{date}}'
};


