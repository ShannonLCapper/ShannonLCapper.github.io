"use strict";

(function() {
	
	angular
		.module("collapseOnMobileBtn")
		.directive("collapseOnMobileBtn", ["$compile", function($compile) {
      return {
        restrict: "A",
        priority: 1011,
        terminal: true,
        compile: function(element) {
          element.removeAttr("collapse-on-mobile-btn");
          element.removeAttr("toggle-active-on-click");
          element.attr("toggle-active-on-click", "");
          element.addClass("collapse-on-mobile-btn");
          element.attr("aria-expanded", element.hasClass("active"));
          element.attr("data-toggle", "collapse");
          return {
            post: function postLink(scope, element, attrs) {
              $compile(element)(scope);
            }
          };
        }
      }
		}]);

})();