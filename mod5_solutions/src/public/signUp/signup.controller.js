(function () {
  "use strict";

  angular.module("public")
  .controller("SignUpController",SignUpController);

  SignUpController.$inject = ['SignUpService','MenuAvailableService','$scope'];
  function SignUpController(SignUpService,MenuAvailableService,$scope) {
    var signUpCtrl = this;
    var short_name = [];
    var menu_details = [];

    signUpCtrl.isPresent = false;
    signUpCtrl.saveDetails = function (user) {
      var menuAvailable = MenuAvailableService.getAllMenuItems();
      menuAvailable.then(function (response) {
        response.data.menu_items.forEach(function(data){
          if(data.short_name === user.menunumber){
            signUpCtrl.isPresent = true;
            menu_details = data;
          }
        });
        if(signUpCtrl.isPresent){
          SignUpService.saveDetails(user.firstName,user.lastName,user.phoneNumber,user.email,user.menunumber,menu_details);
          signUpCtrl.isPresent = false;
          signUpCtrl.class = "alert alert-success";
          signUpCtrl.message = "Thank You! Your details have been saved.";
        }else{
          signUpCtrl.class = "alert alert-danger";
          signUpCtrl.message = "Change a few things up and try submitting again.";
        }
      }).catch(function (errorResponse) {
        signUpCtrl.alert = false;
      });
    };
  }
})();
