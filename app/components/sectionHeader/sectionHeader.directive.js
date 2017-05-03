"use strict";

(function() {
	
	angular
		.module("sectionHeader")
		.directive("sectionHeader", function() {
      return {
        restrict: "E",
        scope: {},
        transclude: {
          title: "sectionTitle",
          subtitle: "sectionSubtitle"
        },
        template: [
          "<h2 ng-transclude='title'></h2>",
          "<p class='lead with-separator' ng-transclude='subtitle'></p>"
        ].join('')
      }
		});

})();