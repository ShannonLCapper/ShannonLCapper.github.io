"use strict";

(function() {
	
	angular.module("interactiveResume", [
		"jumbotron",
        "navigation",
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
	
	angular.module("collapseOnClick", [

	]);

})();
"use strict";

(function() {
	
	angular.module("scrollOnClick", [
        
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
	
	angular.module("navigation", [
    "scrollOnClick",
    "collapseOnClick" 
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
		.module("collapseOnClick")
		.directive("collapseOnClick", [function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var selectorToCollapse = attrs.collapseThis;
          element.on("click", function() {
            var $target;
            if (selectorToCollapse) {
              $target = $(selectorToCollapse);
            } else {
              $target = element;
            }
            if ($target.data("bs.collapse")) {
              $target.collapse("hide");
            }
          })
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("scrollOnClick")
		.directive("scrollOnClick", [function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var idToScroll = attrs.href || attrs.ngHref;
          element.on("click", function() {
            var $target;
            if (idToScroll) {
              $target = $(idToScroll);
            } else {
              $target = element;
            }
            $("body").animate({scrollTop: $target.offset().top}, "slow");
          })
        }
      }
		}]);

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
		.module("navigation")
		.directive("navLink", [function() {
      return {
        restrict: "E",
        scope: {
          label: "@",
          goesTo: "@"
        },
        //template needs <li> portion to make scrollspy work
        template: "<li><a ng-href='{{goesTo}}' scroll-on-click collapse-on-click collapse-this='.navbar-collapse'>{{label}}</a></li>",
        link: function(scope, element, attrs, parentCtrl) {
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("navigation")
		.directive("navigation", [ "$window", function($window) {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/navigation/navigation.html",
        link: function(scope, element, attrs) {
          function calculateOffset() {
            var windowHeight = $window.innerHeight;
            var navTop = parseInt(getCSS("top", ["navbar", "affix"]));
            return windowHeight - navTop;
          }

          function getCSS (prop, withClasses) {
            var inspector = $("<div>").css("display", "none")
            withClasses.forEach(function(klass) {
              inspector.addClass(klass);  
            });
            $("body").append(inspector);
            try {
              return inspector.css(prop);
            } finally {
              inspector.remove();
            }
          }

          function onResize() {
            scope.offset = calculateOffset();
            var $dataSpyEl = element.find( "[data-spy='affix']" );
            if (!$dataSpyEl.length) return;
            $dataSpyEl.data("bs.affix").options.offset.top = scope.offset;
            $dataSpyEl.affix("checkPosition");
            scope.$digest();
          }

          function cleanUp() {
            angular.element($window).off("resize", onResize);
          }

          scope.offset = calculateOffset();
          angular.element($window).on("resize", onResize);
          scope.$on("$destroy", cleanUp);
        }
      }
		}]);

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