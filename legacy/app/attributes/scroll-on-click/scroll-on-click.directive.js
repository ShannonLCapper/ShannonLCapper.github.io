"use strict";

(function() {
	
	angular
		.module("scrollOnClick")
		.directive("scrollOnClick", ["$window", "$document", function($window, $document) {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var idToScroll = attrs.href || attrs.ngHref;
          element.on("click", function(e) {
            e.preventDefault();
            var $target;
            if (idToScroll) {
              $target = $(idToScroll);
            } else {
              $target = element;
            }
            $("html, body").animate({scrollTop: $target.offset().top}, "slow");

          })
        }
      }
		}]);

})();