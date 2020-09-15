(function (){
'use strict';

angular.module('LunchCheck',[])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope){
  $scope.LunchMenu = "";
  var dishes=[];
  $scope.Checklist = function(){
    dishes = $scope.LunchMenu.split(",");
    if($scope.LunchMenu == ""){
      $scope.msg = "Please enter data first";
    }
    else if(dishes.length > 3){
      $scope.msg = "Too much!";
    }
    else if(dishes.length >= 1 & dishes.length <= 3){
      $scope.msg = "Enjoy!";
    }
  };
}
})();
