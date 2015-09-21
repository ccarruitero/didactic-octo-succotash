(function() {
  'use strict';

  angular
    .module('buildList')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, buildData, $scope) {

    this.builds = [];
    var self = this;

    getBuildData();

    function getBuildData() {
      self.builds = buildData.getData();
    }

    $scope.openDetails = function(build) {
      var lastOpenedBuild = $scope.lastBuild;
      hideDetails(lastOpenedBuild);
      $scope.lastBuild = build;
      if (build.state !== 'rejected') {
        build.opened = true;
      }
    };

    function hideDetails(build) {
      if (build !== undefined) {
        build.opened = false;
      }
    }
  }
})();
