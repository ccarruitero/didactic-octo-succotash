(function() {
  'use strict';

  describe('controllers', function(){
    var scope, controller;

    beforeEach(function() {
      module('buildList');
    });

    it('should get builds array', inject(function($controller, $rootScope) {
      scope = $rootScope.$new();
      controller = $controller('MainController', {
        $scope: scope
      });

      expect(angular.isArray(controller.builds)).toBeTruthy();
      expect(controller.builds.length).toBe(3);
    }));
  });
})();
