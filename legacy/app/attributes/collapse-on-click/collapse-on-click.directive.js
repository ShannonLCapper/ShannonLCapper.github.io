"use strict";

(function() {
	
	angular
		.module("collapseOnClick")
		.directive("collapseOnClick", [function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var selectorToCollapse = attrs.collapseThis;
          element.on("click", function() {
            var $target;
            if (selectorToCollapse) {
              $target = $(selectorToCollapse);
            } else {
              $target = element;
            }
            if ($target.data("bs.collapse")) {
              $target.collapse("hide");
            }
          })
        }
      }
		}]);

})();