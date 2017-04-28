"use strict";

(function() {
	
	angular.module("interactiveResume", [
		"jumbotron",
    "segment",
    "profile",
    "projects",
    "skills",
    "education",
    "workExperience",
    "contact"
	]);

})();
"use strict";

(function() {
	
	angular.module("contact", [
	]);

})();
"use strict";

(function() {
	
	angular.module("education", [
	]);

})();
"use strict";

(function() {
	
	angular.module("jumbotron", [
		
	]);

})();
"use strict";

(function() {
	
	angular.module("profile", [
	]);

})();
"use strict";

(function() {
	
	angular.module("projects", [
	]);

})();
"use strict";

(function() {
	
	angular.module("segment", [

	]);

})();
"use strict";

(function() {
	
	angular.module("skills", [
	]);

})();
"use strict";

(function() {
	
	angular.module("workExperience", [
	]);

})();
"use strict";

(function() {
	
	angular
		.module("contact")
		.component("contact", {
			templateUrl: "app/components/contact/contact.html",
		});

})();
"use strict";

(function() {
	
	angular
		.module("education")
		.component("education", {
			templateUrl: "app/components/education/education.html",
		});

})();
"use strict";

(function() {
	
	angular
		.module("jumbotron")
		.component("jumbotron", {
			templateUrl: "app/components/jumbotron/jumbotron.html",
		});

})();
"use strict";

(function() {
	
	angular
		.module("profile")
		.component("profile", {
			templateUrl: "app/components/profile/profile.html",
      controller: function profileCtrl() {
        this.calcAge = function calculateAge(birthMonth, birthDay, birthYear) {
          var todayDate = new Date();
          var todayYear = todayDate.getFullYear();
          var todayMonth = todayDate.getMonth();
          var todayDay = todayDate.getDate();
          var age = todayYear - birthYear; 

          if (todayMonth < birthMonth - 1) age--;
          if (birthMonth - 1 == todayMonth && todayDay < birthDay) age--;
          
          return age;
        }
      }
		});

})();
"use strict";

(function() {
	
	angular
		.module("projects")
		.component("projects", {
			templateUrl: "app/components/projects/projects.html",
		});

})();
"use strict";

(function() {
	
	angular
		.module("segment")
		.directive("segment", function() {
      return {
        restrict: "E",
        transclude: true,
        scope: {},
        template: "<section><div class='wrapper'><ng-transclude></ng-transclude></div></section>"
      }
		});

})();
"use strict";

(function() {
	
	angular
		.module("skills")
		.component("skills", {
			templateUrl: "app/components/skills/skills.html",
		});

})();
"use strict";

(function() {
	
	angular
		.module("workExperience")
		.component("workExperience", {
			templateUrl: "app/components/work-experience/work-experience.html",
		});

})();