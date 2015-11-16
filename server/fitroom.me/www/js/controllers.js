angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $http) {
  $scope.outfit = {
    title: 'AKIRA Pleated Bomber Moto Jacket with Foldover Collar',
    imageUrl: 'http://ecx.images-amazon.com/images/I/71wzofS2UCL._UY879_.jpg',
    id: '93992cbd-b2c8-11e4-b70f-d89d6716e964'
  }

  $scope.photo = {
    url: 'testurl.com'
  } 

  $scope.uploadPhoto = function(form){
    alert('you are uploading: ' + $scope.photo.url);
    //send http POST request to 'https://flow.built.io/run/10QlK8z5Fi?sync=true'
    $http.post('https://flow.built.io/run/10QlK8z5Fi?sync=true', $scope.photo).done(function(res){
      alert('uploaded photo successfully');
      // console.log(res);
    });

  }


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});

// .controller('OutfitsCtrl', function($scope) {
//   $scope.outfit = {
//     title: 'shirt'
//   }
// });
