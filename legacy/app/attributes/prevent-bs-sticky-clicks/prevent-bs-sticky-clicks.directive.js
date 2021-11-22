"use strict";

(function() {
	
	angular
		.module("preventBsStickyClicks")
		.directive("preventBsStickyClicks", [function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var elIsBody = (element[0] === $("body")[0]);
          if (elIsBody) {
            element.on("mouseup", "button, a[data-trigger!='focus'], input[type='submit'], input[type='reset']", function() {
              $(this).blur();
            });
          } else {
            element.on("mouseup", function() {
              element.blur();
            })
          }
        }
      }
		}]);

})();