(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['SignUpService','MenuAvailableService'];
function InfoController(SignUpService,MenuAvailableService) {
  var infoCtrl = this;
  infoCtrl.getDetails = SignUpService.getDetails();
  infoCtrl.MenuItemInfo = SignUpService.getMenuItemInfo();
}

})();
