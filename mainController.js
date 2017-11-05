var myApp = angular.module("myApp", []);
myApp.controller('mainController', function($scope) {
    var vm = this;
    this.force = 30;
    this.resetForce = function() {
        this.force = 0;
    }
    $scope.$watch('vm.force', function(newVal, oldVal) {
        document.getElementById('bindMe').innerHTML = newVal;
    });
});
myApp.controller('internalController', function($scope) {
    //$scope.intrnl = this;
    this.main = $scope.$parent.vm;
    this.secret = "secret" + $scope.$parent.vm.force;
});