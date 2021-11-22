"use strict";

(function() {
	
	angular
		.module("toggleActiveOnClick")
		.directive("toggleActiveOnClick", [function($compile) {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          element.on("click", function() {
            element.toggleClass("active");
          })
        }
      }
		}]);

})();