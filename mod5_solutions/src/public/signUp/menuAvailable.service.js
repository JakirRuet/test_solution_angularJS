(function () {
  "use strict";

  angular.module('public')
  .service('MenuAvailableService',MenuAvailableService);

  MenuAvailableService.$inject = ['$http','ApiPath'];
  function MenuAvailableService($http,ApiPath) {
    var service = this;

    service.getAllMenuItems = function (){
      return $http({
        method: "GET",
        url: (ApiPath + "/menu_items.json")
      });
    }
  }
})();
