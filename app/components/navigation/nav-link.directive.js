"use strict";

(function() {
	
	angular
		.module("navigation")
		.directive("navLink", [function() {
      return {
        restrict: "E",
        scope: {
          label: "@",
          goesTo: "@"
        },
        //template needs <li> portion to make scrollspy work
        template: "<li><a ng-href='{{goesTo}}' scroll-on-click collapse-on-click collapse-this='.navbar-collapse'>{{label}}</a></li>",
        link: function(scope, element, attrs, parentCtrl) {
        }
      }
		}]);

})();