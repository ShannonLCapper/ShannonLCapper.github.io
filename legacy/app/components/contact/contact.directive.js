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