"use strict";

(function() {
	
	angular
		.module("jumbotron")
		.directive("jumbotron", [function() {
			return {
				restrict: "E",
				templateUrl: "app/components/jumbotron/jumbotron.html",
				scope: {},
				link: function(scope, element, attrs) {
					
				}
			}
		}]);

})();