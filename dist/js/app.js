"use strict";

(function() {
	
	angular.module("interactiveResume", [
        "preventBsStickyClicks",
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
		"scrollOnClick"
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
	
	angular.module("collapseOnClick", [

	]);

})();
"use strict";

(function() {
	
	angular.module("workExperience", [
    "collapseOnMobileBtn"
	]);

})();
"use strict";

(function() {
	
	angular.module("collapseOnMobileBtn", [

	]);

})();
"use strict";

(function() {
	
	angular.module("scrollOnClick", [
        
	]);

})();
"use strict";

(function() {
	
	angular.module("preventBsStickyClicks", [

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
        replace: true,
        scope: {
          goesTo: "@"
        },
        transclude: true,
        //template needs <li> portion to make scrollspy work
        template: "<a ng-href='{{goesTo}}' scroll-on-click collapse-on-click collapse-this='.navbar-collapse'><ng-transclude></a>",
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
            var $affixEl = element.find( "[data-spy='affix']" );
            if (!$affixEl.length) return;
            $affixEl.data("bs.affix").options.offset.top = scope.offset;
            $affixEl.affix("checkPosition");
            scope.$digest();
          }

          function cleanUp() {
            angular.element($window).off("resize", onResize);
            $("body").removeData("bs.scrollspy");
          }

          var scrollSpySelector = ".navbar-collapse"

          $("body").scrollspy({
            target: scrollSpySelector,
            offset: 50
          });
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
"use strict";

(function() {
	
	angular
		.module("collapseOnMobileBtn")
		.directive("collapseOnMobileBtn", ["$compile", function($compile) {
      return {
        restrict: "A",
        priority: 1011,
        compile: function(element) {
          element.removeAttr("collapse-on-mobile-btn");
          element.addClass("collapse-on-mobile-btn");
          element.attr("aria-expanded", element.hasClass("active"));
          element.attr("data-toggle", "collapse");
          return function(scope, element) {
            element.on("click", function() {
              element.toggleClass("active");
            })
          };
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
          element.on("click", function(e) {
            e.preventDefault();
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
		.module("preventBsStickyClicks")
		.directive("preventBsStickyClicks", [function() {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          var elIsBody = (element[0] === $("body")[0]);
          if (elIsBody) {
            element.on("mouseup", "button, a[data-trigger!='focus'], input[type='submit'], input[type='reset']", function() {
              $(this).blur();
            });
          } else {
            element.on("mouseup", function() {
              element.blur();
            })
          }
        }
      }
		}]);

})();