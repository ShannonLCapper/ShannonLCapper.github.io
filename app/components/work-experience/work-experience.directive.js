"use strict";

(function() {
	
	angular
		.module("workExperience")
		.directive("workExperience", [function() {
      var jobs = [
        {
          title: "Graphic Artist",
          dateStart: new Date(2011, 0),
          dateEnd: null,
          company: "Freelance work for various businesses and individuals",
          description: [
            "Used Adobe Photoshop and Adobe Illustrator to design business logos, tattoos, and posters"
          ],
          location: null
        },
        {
          title: "Exercise Technician",
          dateStart: new Date(2015, 6),
          dateEnd: new Date(2016, 6),
          company: "G2 Sports + Physical Therapy",
          description: [
            "Instructed and oversaw patient exercises in an outpatient clinic",
            "Performed modalities on patients, including electrical stimulation, ultrasound therapy, and traction"
          ],
          location: "Sammamish, WA"
        },
        {
          title: "Library Student Assistant",
          dateStart: new Date(2012, 8),
          dateEnd: new Date(2015, 2),
          company: "Cal Poly Kennedy Library PolyConnect Desk",
          description: [
            "Checked out laptops and AV equipment to students and staff",
            "Assisted users with basic software and computer troubleshooting"
          ],
          location: "San Luis Obispo, CA"
        },
        {
          title: "Anatomy Lab Teaching Assistant",
          dateStart: new Date(2014, 8),
          dateEnd: new Date(2015, 2),
          company: "Allan Hancock Community College",
          description: [
            "Oversaw weekly open lab sessions, addressing anatomy-related inquiries and guiding student studies"
          ],
          location: "Santa Maria, CA"
        },
        {
          title: "Biology Student Assistant",
          dateStart: new Date(2014, 8),
          dateEnd: new Date(2015, 2),
          company: "Cal Poly Biological Sciences Department",
          description: [
            "Graded assignments for Principles of Physiology and Vertebrate Anatomy/Physiology courses"
          ],
          location: "San Luis Obispo, CA"
        },
        {
          title: "Physical Therapy Aide",
          dateStart: new Date(2013, 3),
          dateEnd: new Date(2014, 5),
          company: "San Luis Sports Therapy and Orthopedic Rehabilitation",
          description: [
            "Instructed and oversaw patient exercises in an outpatient clinic and performed patient modalities",
            "Fulfilled office managerial duties, and assisted therapists in writing of medical paperwork"
          ],
          location: "Morro Bay, CA"
        }
      ];

      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/work-experience/work-experience.html",
        link: function(scope, element, attrs) {
          scope.jobs = jobs;
        }
      }
		}]);

})();