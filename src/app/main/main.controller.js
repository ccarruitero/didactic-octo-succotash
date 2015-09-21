(function() {
  'use strict';

  angular
    .module('buildList')
    .filter('buildFilter', buildFilter)
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, buildData) {

    this.builds = [];
    this.unopenStates = ['rejected', 'running'];
    var self = this;

    getBuildData();

    function getBuildData() {
      self.builds = buildData.getData();
    }

    $scope.openDetails = function(build) {
      var lastOpenedBuild = $scope.lastBuild;
      if (build !== lastOpenedBuild) {
        hideDetails(lastOpenedBuild);
        $scope.lastBuild = build;
      }
      if (self.unopenStates.indexOf(build.state) === -1) {
        build.opened = (build.opened ? false : true);
      }
    };

    function hideDetails(build) {
      if (build !== undefined) {
        build.opened = false;
      }
    }

    $scope.disabledDetails = function(state) {
      return (self.unopenStates.indexOf(state) !== -1);
    };
  }

  function buildFilter() {
    return function(builds) {
      var filtered = [];
      angular.forEach(builds, function(build) {
        if (build.state !== 'fail') {
          filtered.push(build);
        }
      });
      return filtered;
    };
  }
})();
