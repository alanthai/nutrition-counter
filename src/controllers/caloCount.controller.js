'use strict';

angular.module('caloCount')
  .controller('caloCountCtrl', function($http) {
    var categories = this.categories = [];
    var arrayPush = Array.prototype.push;

    function addCategories(data) {
      arrayPush.apply(categories, data);
    }

    $http.get('data/subway/subway-breads-toppings.json').success(addCategories);
    $http.get('data/subway/subway-breakfast.json').success(addCategories);
    $http.get('data/subway/subway-salads.json').success(addCategories);
    $http.get('data/subway/subway-sandwiches.json').success(addCategories);
    $http.get('data/subway/subway-soups-extras.json').success(addCategories);
  });