"use strict";

(function() {
	
	angular
		.module("navigation")
		.directive("navigation", [ "$window", function($window) {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/navigation/navigation.html",
        link: function(scope, element, attrs) {
          var $affixedEl = element.find("nav");

          function calculateOffset() {
            var windowHeight = $window.innerHeight;
            var navTop = parseInt(getCSS("top", ["navbar", "affix"]));
            return windowHeight - navTop;
          }

          function getCSS (prop, withClasses) {
            var inspector = $("<div>").css("display", "none")
            withClasses.forEach(function(klass) {
              inspector.addClass(klass);  
            });
            $("body").append(inspector);
            try {
              return inspector.css(prop);
            } finally {
              inspector.remove();
            }
          }

          function onResize() {
            $affixedEl.data("bs.affix").options.offset.top = calculateOffset();
            $affixedEl.affix("checkPosition");
            scope.$digest();
          }

          function cleanUp() {
            angular.element($window).off("resize", onResize);
            $("body").removeData("bs.scrollspy");
          }

          var scrollSpySelector = ".navbar-collapse"

          $("body").scrollspy({
            target: scrollSpySelector,
            offset: 50
          });
          $affixedEl.affix({
            offset: {
              top: calculateOffset()
            }
          })
          angular.element($window).on("resize", onResize);
          scope.$on("$destroy", cleanUp);
        }
      }
		}]);

})();