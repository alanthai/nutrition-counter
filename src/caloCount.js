'use strict';
angular.module('caloCount', ['ngDraggable', 'ui.bootstrap'])
  .value('ccUserSettings', {
    units: {
      mass: 'g',
      micromass: 'mg',
      energy: 'Cal'
    },
    dailyIntake: {
      calories: 2000, // Cal
      protein: 50, // g
      fat: 65, // g

      'saturated fat': 20, // g
      cholesterol: 300, // mg
      sodium: 2400, // mg
      potassium: 3500, // mg
      carbohydrate: 300, // g
      'dietary fiber': 25, // g
      calcium: 1000, // mg
      iron: 18, // mg
      'vitamin a': 4999, // iu
      'vitamin c': 59, // mg
      'vitamin d': 399, // iu
      'vitamin e': 29, // iu
      'vitamin k': 79, // µg
      'vitamin b6': 1, // mg
      'vitamin b12': 5, // µg
      thiamin: 1.5, // mg
      riboflavin: 1.7, // mg
      niacin: 20, // mg
      folate: 400, // µg
      biotin: 300, // µg
      'pantothenic acid': 10, // mg
      phosphorus: 1000, // mg
      iodine: 150, // µg
      magnesium: 400, // mg
      zinc: 15, // mg
      selenium: 70, // µg
      copper: 2, // mg
      manganese: 2, // mg
      chromium: 120, // µg
      molybdenum: 75, // µg
      chloride: 3400, // mg
    }
  });
