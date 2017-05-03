"use strict";

(function() {
	
	angular
		.module("jumbotron")
		.directive("jumbotron", ["detectMobileService", function(detectMobileService) {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/jumbotron/jumbotron.html",
        link: function(scope, element, attrs) {
          // element.find(".jumbotron").backstretch();
          scope.isMobile = detectMobileService.isMobile()
        }
      };
		}]);

})();