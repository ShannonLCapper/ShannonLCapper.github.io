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