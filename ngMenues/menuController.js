var menuApp = angular.module('menuApp', []);

menuApp.controller('MenuController', ['$scope', function($scope) {
  $scope.appName = 'Menu Test';

  $scope.navLinks = [
    {
      title: 'home',
      linkText: 'Home',
      hover: 'Go to home'
    },
    {
      title: 'about',
      linkText: 'About',
      hover: 'Get more about app'
    },
    {
      title: 'help',
      linkText: 'Help',
      hover: 'F1'
    }
  ];
}]);
