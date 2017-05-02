"use strict";

(function() {
	
	angular
		.module("education")
		.directive("education", [function() {
      var educationLis = [
        {
          school: "California Polytechnic State University",
          location: "San Luis Obispo, CA",
          dateStart: new Date(2011, 8),
          dateEnd: new Date(2015, 2),
          educationType: "Bachelor of Science",
          subject: "Biological Sciences",
          description: [
            "Cumulative GPA: 4.0",
            "Graduated as the top-ranked student in the College of Science and Math"
          ]
        }
      ];

      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/education/education.html",
        link: function(scope, element, attrs) {
          scope.educationLis = educationLis;
        }
      }
		}]);

})();