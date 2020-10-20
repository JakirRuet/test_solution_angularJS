(function () {
  "use strict";

  angular.module('public')
  .service('SignUpService',SignUpService);

  SignUpService.$inject = [];
  function SignUpService() {
      var service = this;
      var details = [];
      var menu_Details = [];

      service.saveDetails = function (firstName,lastName,phoneNumber,email,menuNumber,menu_details) {
          var detail = {};
          detail.firstName = firstName;
          detail.lastName = lastName;
          detail.phoneNumber = phoneNumber;
          detail.email = email;
          detail.menuNumber = menuNumber;
          details.push(detail);
          menu_Details.push(menu_details);
      };

      service.getDetails = function (){
        return details;
      };
      service.getMenuItemInfo = function () {
        return menu_Details;
      }
  }
})();
