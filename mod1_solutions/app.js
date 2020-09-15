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
    if(dishes.length > 5){
      document.getElementById('msg').innerHTML = dishes.length + " dishes are listed that's too much.";
    }else{
        document.getElementById('msg').innerHTML = dishes.length + " dishes are listed.";
    }
  };
}
})();
