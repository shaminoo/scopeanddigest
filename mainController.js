var myApp = angular.module("myApp", []);
myApp.controller('mainController', function($scope, $rootScope) {
   $scope.myText = "myText";
   $scope.helloWorld = "hello";
   $scope.$watch('helloWorld', function(newValue, oldValue) {
        console.log("helloWorld newValue" + oldValue);
        console.log("helloWorld oldValue" + newValue);
    });
   $scope.$watch('myText', function() {
       console.log("myText changed");
       $scope.helloWorld = "helloWorld";
       console.log("helloWorld changed");
   });
   $rootScope.$watch(function() {
       console.log("digest running");
   });
});