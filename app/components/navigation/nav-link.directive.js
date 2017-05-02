"use strict";

(function() {
	
	angular
		.module("navigation")
		.directive("navLink", [function() {
      return {
        restrict: "E",
        replace: true,
        scope: {
          goesTo: "@"
        },
        transclude: true,
        //template needs <li> portion to make scrollspy work
        template: "<a ng-href='{{goesTo}}' scroll-on-click collapse-on-click collapse-this='.navbar-collapse'><ng-transclude></a>",
        link: function(scope, element, attrs, parentCtrl) {
        }
      }
		}]);

})();