"use strict";

(function() {
	
	angular
		.module("projects")
		.directive("projects", ["detectMobileService", function(detectMobileService) {
      var projects = [
        {
          name: "The Legend of Zorkda",
          url: "zorkda.herokuapp.com",
          github: "github.com/ShannonLCapper/zorkda",
          image: {
            src: "app/images/projects/zorkda-screenshot.jpg",
            alt: "Screenshot from zorkda project"
          },
          summary: "Text-based web game that allows users to play, create accounts, and save games",
          description: [
            "Mobile-first front end built using AngularJS and Bootstrap, with support from Gulp during development",
            "Back end runs on Sinatra/Ruby, with Redis used to cache active game sessions",
            "Game and user data stored in DynamoDB"
          ],
          technologies: ["HTML5/CSS3", "JavaScript", "AngularJS", "Bootstrap", "Ruby", "Sinatra", "DynamoDB", "Redis", "AJAX", "Gulp" ]
        },
        {
          name: "Sudoku Solver",
          url: "sudoku-solver-sc.herokuapp.com",
          github: "github.com/ShannonLCapper/sudoku-solver",
          image: {
            src: "app/images/projects/sudoku-solver-screenshot.jpg",
            alt: "Screenshot from sudoku solver project"
          },
          summary: "Single-page web app which solves any inputted Sudoku",
          description: [
            "Uses custom algorithm written in Ruby",
            "jQuery library provides page functionality",
            "AJAX calls communicate with backend Sinatra server"
          ],
          technologies: ["HTML5/CSS3", "JavaScript", "jQuery", "AJAX", "Ruby", "Sinatra"]
        }
      ];

      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/projects/projects.html",
        link: function(scope, element, attrs) {
          scope.projects = projects;
          scope.isMobile = detectMobileService.isMobileTablet();
        }
      };
		}]);

})();