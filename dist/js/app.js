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
	
	angular.module("collapseOnClick", [

	]);

})();
"use strict";

(function() {
	
	angular.module("collapseOnMobileBtn", [
    "toggleActiveOnClick"
	]);

})();
"use strict";

(function() {
	
	angular.module("preventBsStickyClicks", [

	]);

})();
"use strict";

(function() {
	
	angular.module("scrollOnClick", [
        
	]);

})();
"use strict";

(function() {
	
	angular.module("toggleActiveOnClick", [

	]);

})();
"use strict";

(function() {
	
	angular.module("contact", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("education", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("jumbotron", [
		"scrollOnClick",
    "detectMobileService"
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
	
	angular.module("projects", [
    "sectionHeader",
    "toggleActiveOnClick",
    "detectMobileService"
	]);

})();
"use strict";

(function() {
	
	angular.module("profile", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("segment", [

	]);

})();
"use strict";

(function() {
	
	angular.module("sectionHeader", [
	]);

})();
"use strict";

(function() {
	
	angular.module("skills", [
    "sectionHeader"
	]);

})();
"use strict";

(function() {
	
	angular.module("detectMobileService", [

	]);

})();
"use strict";

(function() {
	
	angular.module("workExperience", [
    "collapseOnMobileBtn",
    "sectionHeader"
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
		.module("collapseOnMobileBtn")
		.directive("collapseOnMobileBtn", ["$compile", function($compile) {
      return {
        restrict: "A",
        priority: 1011,
        terminal: true,
        compile: function(element) {
          element.removeAttr("collapse-on-mobile-btn");
          element.removeAttr("toggle-active-on-click");
          element.attr("toggle-active-on-click", "");
          element.addClass("collapse-on-mobile-btn");
          element.attr("aria-expanded", element.hasClass("active"));
          element.attr("data-toggle", "collapse");
          return {
            post: function postLink(scope, element, attrs) {
              $compile(element)(scope);
            }
          };
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
"use strict";

(function() {
	
	angular
		.module("scrollOnClick")
		.directive("scrollOnClick", ["$window", "$document", function($window, $document) {
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
            $("html, body").animate({scrollTop: $target.offset().top}, "slow");

          })
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("toggleActiveOnClick")
		.directive("toggleActiveOnClick", [function($compile) {
      return {
        restrict: "A",
        link: function(scope, element, attrs) {
          element.on("click", function() {
            element.toggleClass("active");
          })
        }
      }
		}]);

})();
"use strict";

(function() {
	
	angular
		.module("contact")
		.directive("contact", function(){
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/contact/contact.html",
      }
			
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
		.directive("jumbotron", ["detectMobileService", function(detectMobileService) {
      return {
        restrict: "E",
        scope: {},
        replace: true,
        templateUrl: "app/components/jumbotron/jumbotron.html",
        link: function(scope, element, attrs) {
          scope.isMobile = detectMobileService.isMobileTablet();
        }
      };
		}]);

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
          var $affixedEl = element.find("nav");

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
            $affixedEl.data("bs.affix").options.offset.top = calculateOffset();
            $affixedEl.affix("checkPosition");
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
          $affixedEl.affix({
            offset: {
              top: calculateOffset()
            }
          })
          angular.element($window).on("resize", onResize);
          scope.$on("$destroy", cleanUp);
        }
      }
		}]);

})();
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
"use strict";

(function() {
	
	angular
		.module("profile")
		.directive("profile", function() {
      return {
        restrict: "E",
        scope: {},
        templateUrl: "app/components/profile/profile.html",
        link: function(scope, element, attrs) {
          scope.calcAge = function calculateAge(birthMonth, birthDay, birthYear) {
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
      };
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
"use strict";

(function() {
	
	angular
		.module("detectMobileService")
		.factory("detectMobileService", [function detectMobileServiceFactory() {
			var mobileCheck = function() {
			  var check = false;
			  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
				  return check;
				};

			var mobileTabletCheck = function() {
			  var check = false;
			  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
			  return check;
			};

			return {
				isMobile: mobileCheck,
				isMobileTablet: mobileTabletCheck
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