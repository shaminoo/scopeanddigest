var myApp = angular.module("myApp", []);
myApp.controller('mainController', function($scope) {
    var vm = this;
    this.force = 30;
    this.forceInUSD = this.force * 10;
    this.resetForce = function() {
        this.force = 0;
    }
    var times = 0;
    $scope.$watch(function() {
        console.log('watcher was called', times);
        times++;
        return 0;
    }, function() {});

    // $scope.$watch('vm.force', function() {
    //     vm.forceInUSD = vm.force * 10;
    // })
});
myApp.controller('internalController', function($scope) {
    //$scope.intrnl = this;
    this.main = $scope.$parent.vm;
    this.secret = "secret" + $scope.$parent.vm.force;
});