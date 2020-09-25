(function (){
'use strict';

var tobuy = [{name: "Milk",quantity: "5"},
              {name: "Donuts",quantity: "100"},
              {name: "Cookies",quantity: "60"},
              {name: "Chocolate",quantity: "5"},
              {name: "Peanut Butter",quantity: "5 bag"}];

var bought = [];

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

//List #1 -controller
ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var list1 = this;
  list1.items = ShoppingListCheckOffService.getItems("buy");

  list1.removeItem = function (itemIndex){
    ShoppingListCheckOffService.addItem(itemIndex);
    ShoppingListCheckOffService.removeItem(itemIndex);
    if(list1.items.length==0){
      list1.errorMessage = "Empty";
    }
  };
}

//List #2 -controller
AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
  var list2 = this;
  list2.items = ShoppingListCheckOffService.getItems("bought");
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = tobuy;

  service.addItem = function (itemIndex) {
    bought.push(items[itemIndex]);
  };

  service.removeItem = function (itemIndex) {
    items.splice(itemIndex, 1);
  };

  service.getItems = function (checktype) {
    if(checktype=="buy"){
      return items;
    }
    else if (checktype=="bought") {
      return bought;
    }
  };
}
})();
