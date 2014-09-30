angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('ScrollingCtrl', function($scope) {
  $scope.items = [];
  for (var i = 0; i < 10000; i++) {
    $scope.items.push('Story ' + i);
  }

  $scope.getItemHeight = function(item, index) {
    return 60;
  };
})

.controller('TableEditCtrl', function($scope) {
  // Add content
  $scope.items = [];
  for (var i = 0; i < 5; i++) {
    $scope.items.push('Story ' + i);
  }
  $scope.getItemHeight = function(item, index) {
    return 60;
  };

  // Handle edits
  $scope.edit = function(item) {
    alert('Edit Item: ' + item.id);
  };
  $scope.share = function(item) {
    alert('Share Item: ' + item.id);
  };
  $scope.onItemDelete = function(item) {
    $scope.items.splice($scope.items.indexOf(item), 1);
  };

  // Handle refresh
  $scope.doRefresh = function() {
    setTimeout(function() {
      $scope.items = [];
      for (var i = 0; i < 5; i++) {
        $scope.items.push('Refreshed Story ' + i);
      }
      // Stop the ion-refresher from spinning
       $scope.$broadcast('scroll.refreshComplete');
    }, 2000);
  };
})

.controller('LocalizationCtrl', ['$translate', '$scope', function ($translate, $scope) {

  $scope.translateToEnglish = function(langKey) {
    $translate.use('en');
  };

  $scope.translateToSpanish = function(langKey) {
    $translate.use('es');
  };
}])

.controller('TableReorderingCtrl', function($scope) {
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.items.splice(fromIndex, 1);
    $scope.items.splice(toIndex, 0, item);
  };
  $scope.items = [
    { id: 0 },
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 }
  ];
})




// Master/Detail
.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('PlaylistCtrl', function($scope, $stateParams) {
})
// tabs controllers
.controller('FriendsCtrl', function($scope, Friends) {
  //$scope.friends = Friends.all();
})
.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  //$scope.friend = Friends.get($stateParams.friendId);
});

