(function() {
  'use strict';

  angular
      .module('buildList')
      .service('buildData', buildData);

  /** @ngInject */
  function buildData() {
    var data = [
      {
        'name': '432462',
        'type': 'build',
        'state': 'running',
        'timeStarted': Date.now() - 20000
      },
      {
        'name': '432461',
        'type': 'build',
        'state': 'running',
        'timeStarted': Date.now() - 30000
      },
      {
        'name': '432460',
        'type': 'firewall',
        'state': 'rejected',
        'timeStarted': Date.now() - 345000
      }
    ];

    this.getData = getData;

    function getData() {
      return data;
    }
  }

})();
