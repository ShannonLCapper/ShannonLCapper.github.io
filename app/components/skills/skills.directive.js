"use strict";

(function() {
	
	angular
		.module("skills")
		.directive("skills", function() {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/skills/skills.html",
      }
			
		});

})();