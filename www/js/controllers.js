angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope) {
})

.controller('ScrollingCtrl', function($scope) {
  $scope.items = [];
  for (var i = 0; i < 10000; i++) {
    $scope.items.push('Story ' + i);
  }

  $scope.getItemHeight = function(item, index) {
    //Make evenly indexed items be 10px taller, for the sake of example
    //return (index % 2) === 0 ? 50 : 60;
    return 60;
  };
})

.controller('TableEditCtrl', function($scope) {
  $scope.items = [];
  for (var i = 0; i < 5; i++) {
    $scope.items.push('Story ' + i);
  }

  $scope.getItemHeight = function(item, index) {
    return 60;
  };
})




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


