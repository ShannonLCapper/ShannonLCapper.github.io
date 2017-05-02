"use strict";

(function() {
	
	angular
		.module("collapseOnMobileBtn")
		.directive("collapseOnMobileBtn", ["$compile", function($compile) {
      return {
        restrict: "A",
        priority: 1011,
        compile: function(element) {
          element.removeAttr("collapse-on-mobile-btn");
          element.addClass("collapse-on-mobile-btn");
          element.attr("aria-expanded", element.hasClass("active"));
          element.attr("data-toggle", "collapse");
          return function(scope, element) {
            element.on("click", function() {
              element.toggleClass("active");
            })
          };
        }
      }
		}]);

})();