(function(){
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.menuList = ""; //avoids undefined error

    $scope.doCalculate = function () {

      if($scope.menuList.length>0){
          var dishes = $scope.menuList.split(',');
          if(dishes.length > 3){
            $scope.message = 'Too much!';
          }
          else{
            $scope.message = 'Enjoy!';
          }
      }
      else {
        $scope.message = 'Please enter data first';
      }

  }//end doCalculate

  }//end LunchCheckController


})();
