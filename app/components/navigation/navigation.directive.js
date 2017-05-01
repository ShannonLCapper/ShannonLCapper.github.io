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
          function calculateOffset() {
            var windowHeight = $window.innerHeight;
            console.log("window height: " + windowHeight);
            var navTop = parseInt(getCSS("top", ["navbar", "affix"]));
            console.log("nav top: " + navTop);
            console.log("new offset: " + (windowHeight - navTop));
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
            console.log("window resized");
            scope.offset = calculateOffset();
            var dataSpyEl = element.find( "[data-spy='affix']" )
            dataSpyEl.data("bs.affix").options.offsetTop = scope.offset;
            dataSpyEl.affix("checkPosition");
            scope.$digest();
          }

          function cleanUp() {
            angular.element($window).off("resize", onResize);
          }

          scope.offset = calculateOffset();
          angular.element($window).on("resize", onResize);
          scope.$on("$destroy", cleanUp);
        }
      }
		}]);

})();