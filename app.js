(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LCController);

function LCController ($scope) {
  $scope.listOfFoods = "";
  $scope.msg = "";
  $scope.msgColor = "";
  $scope.borderColor = "";
  $scope.checkLunch = function(){
      if($scope.listOfFoods == ""){
          $scope.msg = "Please enter data first";
          $scope.msgColor = "red";
          $scope.borderColor = "red";
      }
      else{
          $scope.foods = $scope.listOfFoods.split(",");
          if($scope.foods.length <= 3){
              $scope.msg = "Enjoy";
              $scope.msgColor = "green";
              $scope.borderColor = "green";
          }
          else{
              $scope.msg = "Too Much!";
              $scope.msgColor = "green";
              $scope.borderColor = "green";
          }
      }
  }
}
})();