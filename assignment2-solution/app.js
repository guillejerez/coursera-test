(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tobuy = this;
  tobuy.list = ShoppingListCheckOffService.getToBuyList();

  tobuy.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buy(itemIndex);
  }

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var bought = this;
  bought.list = ShoppingListCheckOffService.getBoughtList();

}

function ShoppingListCheckOffService() {
  var service = this;
  var tobuyList = [{name: 'cookies',
                    quantity: 10},
                    {name: 'sodas',
                    quantity: 5}];
  var boughtList = [];

  service.getToBuyList = function () {
    return tobuyList;
  };

  service.getBoughtList = function () {
    return boughtList;
  };

  service.buy = function (itemIndex) {
    boughtList.push(tobuyList[itemIndex]);
    tobuyList.splice(itemIndex, 1);
  }

}

})();
