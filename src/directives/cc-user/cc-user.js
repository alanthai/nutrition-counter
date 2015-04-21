'use strict';

angular.module('caloCount')
  .directive('ccUser', function(ccUserSettings) {
    return {
      restrict: 'E',
      templateUrl: 'directives/cc-user/cc-user.html',
      controller: function() {
        this.settings = ccUserSettings;

        this.img = 'img/user.png';

        this.foods = []; // and their nutritional values

        this.upper = function(str) {
          return str[0].toUpperCase() + str.slice(1);
        }

        this.resetChunks = function() {
          this.intakes = {calories: [[]], protein: [[]], fat: [[]]};
          this.intakeTotals = {calories: 0, protein: 0, fat: 0};
        };

        this.chunkIntake = function(nutrition) {
          var chunk = [[]];
          var me = this;
          var daily = ccUserSettings.dailyIntake[nutrition];
          this.foods.forEach(function(food, foodIndex) {
            var foodValue = food[nutrition];
            var totalValue = me.intakeTotals[nutrition] || 0;
            var nextFull = Math.floor((totalValue / daily) + 1) * daily;
            var value = Math.min(foodValue, nextFull - totalValue);

            chunk.slice(-1)[0].push({value: value, foodIndex: foodIndex});

            if (value !== foodValue) {
              value = foodValue　- (nextFull - totalValue);
              chunk.push([{value: value, foodIndex: foodIndex}]);
            }

            me.intakeTotals[nutrition] = totalValue + foodValue;
          });

          return chunk;
        };

        this.resetChunks();

        this.chunkIntakes = function() {
          var me = this;
          ['calories', 'protein', 'fat'].forEach(function(nutrition) {
            me.intakes[nutrition] = me.chunkIntake(nutrition);
          });
        };

        this.addFood = function(data, event) {
          this.foods.push(data);
          this.resetChunks();
          this.chunkIntakes();
        };

        this.removeFood = function(food) {
          var foodIndex = this.foods.indexOf(food);
          if (foodIndex === -1) return;
          this.foods.splice(foodIndex, 1);
          this.resetChunks();
          this.chunkIntakes();
        };
      },
      controllerAs: 'user'
    };
  });
