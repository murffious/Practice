angular.module("myPracticeApp")
.controller('mainCtrl', function ($scope, mainService) {
// $scope.count = 0;

$scope.current = 0;        
 $scope.Next = function() {
             $scope.current = ($scope.current + 1) % $scope.starships.length;
 }
 $scope.Prev = function() {
             $scope.current = ($scope.current - 1) % $scope.starships.length;
 }
$scope.getStarships = function () {
    mainService.getStarships()
    .then(function (response){     
       
        //      $scope.count += 1
        // $scope.count -= 1
        console.log(response)
        $scope.starships = response.data.results
        console.log(starships)

    })
}
$scope.getStarships();
  
})