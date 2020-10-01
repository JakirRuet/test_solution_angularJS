(function (){
'use strict'

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',FoundItemsDirective);

function FoundItemsDirective(){
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      items: '<',
      onRemove: '&'
    },
    controller: FoundItemsDirectiveController,
    controllerAs: 'list',
    bindToController: true
  };
  return ddo;
}

function FoundItemsDirectiveController() {
  var list = this;
  list.checkFoundList = function () {
    return typeof list.items !== 'undefined' && list.items.length === 0
  };
}


NarrowItDownController.$inject =['MenuSearchService']
function NarrowItDownController(MenuSearchService){
  var menu = this;
  menu.NarrowItDown = function(searchedItem){
    if(searchedItem){
      var promise = MenuSearchService.getMatchedMenuItems(searchedItem);
      promise.then(function(response){
        menu.list = response;
      })
      .catch(function(error){
        console.log("Something went worng no data found!!" + error);
      });
    }else{
      menu.list=[];
    }
  };
  menu.removeItem = function (itemIndex){
    //this.lastRemoved = "Last item removed was "+ menu.list[itemIndex].name;
    menu.list.splice(itemIndex,1);
  };
}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http){
  var service = this;
  service.getMatchedMenuItems = function (searchedItem){
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (response) {
      // process result and only keep items that match
      var foundItems = []
      for(var i=0; i<response.data.menu_items.length; i++){
        var item = response.data.menu_items[i];
        if(item.description.indexOf(searchedItem) !== -1){
          foundItems.push(item);
        }
      };
      // return processed items
      return foundItems;
    });
  };
}

})();
