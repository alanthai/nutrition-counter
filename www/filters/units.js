"use strict";

angular.module("caloCount").constant("unitConversions", {
  // default: Cal, g
  energy: {
    Cal: 1,
    cal: 1000,
    J: 4184
  },
  mass: {
    g: 1,
    mg: 1000,
    kg: 0.001,
    oz: 0.035274,
    lbs: 0.00220462
  } }).filter("units", ["unitConversions", function (unitConversions) {
  // uom = unit of measure
  return function (value, unit, fromUom, toUom) {
    var units = unitConversions[unit];
    var fromFactor = units[fromUom];
    var toFactor = units[toUom];
    if (!toUom) {
      fromFactor = 1;
      toFactor = fromFactor;
      toUom = fromUom;
    }
    return value * toFactor / fromFactor + " " + toUom;
  };
}]);