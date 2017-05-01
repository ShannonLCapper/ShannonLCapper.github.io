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
            var $target = $(selectorToCollapse);
            if ($target.data("bs.collapse")) {
              $target.collapse("hide");
            }
          })
        }
      }
		}]);

})();