'use strict';

angular.module('titannicGeneratorApp')
  .controller('NavbarCtrl', function ($scope, $log, $location, $state) {

    $log.debug('NavbarCtrl:NAVIGATION_CONTENT', $state.current.content.NAVIGATION_CONTENT);

    $scope.content = $state.current.content.NAVIGATION_CONTENT;

    $scope.menu = $scope.content.value.navigationBarLinks;

    $scope.isCollapsed = true;

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
