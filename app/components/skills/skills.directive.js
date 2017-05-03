"use strict";

(function() {
	
	angular
		.module("skills")
		.directive("skills", function() {
      var skillGroups = [
        {
          title: "Web Technologies",
          lis: [
            {
              name: "HTML5",
              symbol: "fa fa-html5"
            },
            {
              name: "CSS3",
              symbol: "fa fa-css3"
            },
            {
              name: "JavaScript",
            },
            {
              name: "jQuery",
            },
            {
              name: "AngularJS",
            },
            {
              name: "Bootstrap",
            },
            {
              name: "Sass",
            },
            {
              name: "Sinatra",
            },
            {
              name: "AJAX",
            },
            {
              name: "JSON",
            },
          ]
        },
        {
          title: "Programming Languages",
          lis: [
            {
              name: "Ruby",
            },
            {
              name: "JavaScript",
            }
          ]
        },
        {
          title: "Databases",
          lis: [
            {
              name: "SQL",
            },
            {
              name: "MongoDB",
            },
            {
              name: "DynamoDB",
            },
            {
              name: "Redis",
            }
          ]
        },
        {
          title: "Tools",
          lis: [
            {
              name: "Git",
              symbol: "fa fa-github"
            },
            {
              name: "Adobe Photoshop",
            },
            {
              name: "Adobe Illustrator",
            },
            {
              name: "Gulp",
            }
          ]
        }
      ]
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/skills/skills.html",
        link: function(scope, element, attrs) {
          scope.skillGroups = skillGroups;
          skillGroups.forEach(function(skillGroup) {
            var len = skillGroup.lis.length;
            var mid = len / 2 + .5; // the .5 is to make the left column have the spare if there is an odd number
            skillGroup.left = skillGroup.lis.slice(0, mid);
            skillGroup.right = skillGroup.lis.slice(mid, len);
          });
        }
      }
			
		});

})();