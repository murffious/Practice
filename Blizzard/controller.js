angular.module("blizzardApp").controller('mainCtrl', function ($scope, mainService){


    $scope.getBlizz = function () {
        mainService.getBlizz().then(function (response){
            $scope.bosses = response.data.bosses
            console.log($scope.bosses)
        })
    }
    $scope.getBlizz()
})
