'use strict';

angular.module('caloCount')
  .directive('foodCard', function() {
    return {
      restrict: 'E',
      templateUrl: 'directives/food-card/food-card.html',
      controller: function(ccUserSettings) {
        this.userSettings = ccUserSettings;
      },
      controllerAs: 'card'
    };
  });
