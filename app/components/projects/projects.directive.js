"use strict";

(function() {
	
	angular
		.module("projects")
		.directive("projects", function() {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/projects/projects.html",
      };
		});

})();