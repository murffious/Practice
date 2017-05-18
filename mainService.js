angular.module("myPracticeApp")
.service('mainService', function ($http) {

this.getStarships= function (){
    return $http({
        method: "GET",
        url: "http://swapi.co/api/starships/"
    }).then(function (response){
        console.log(response)
        return response
        
    })
}

})