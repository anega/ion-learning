angular.module('starter.controllers', [])

  .controller('allTodosCtrl', function ($scope) {
  })

  .controller('newTodoCtrl', function ($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function (chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

  .controller('settingsCtrl', function ($scope, Storage) {
    $scope.sidebarPos = {
      model: {value: 'left', name: 'Left'},
      options: [
        {value: 'left', name: 'Left'},
        {value: 'right', name: 'Right'}
      ],
      setSide: function () {
        Storage.put('menu-position', $scope.sidebarPos.model);
      }
    };
  });
