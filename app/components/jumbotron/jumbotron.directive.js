"use strict";

(function() {
	
	angular
		.module("jumbotron")
		.directive("jumbotron", ["detectMobileService", function(detectMobileService) {
      return {
        restrict: "E",
        scope: {},
        replace: true,
        templateUrl: "app/components/jumbotron/jumbotron.html",
        link: function(scope, element, attrs) {
          scope.isMobile = detectMobileService.isMobileTablet();
        }
      };
		}]);

})();