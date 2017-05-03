"use strict";

(function() {
	
	angular
		.module("jumbotron")
		.directive("jumbotron", function() {
      return {
        restrict: "E",
        replace: true,
        scope: {},
        templateUrl: "app/components/jumbotron/jumbotron.html",
        link: function(scope, element, attrs) {
          // element.backstretch();
        }
      };
		});

})();