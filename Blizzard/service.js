angular.module("blizzardApp").service('mainService', function ($http){

    this.getBlizz = function () {
        return $http.get('https://us.api.battle.net/wow/boss/?locale=en_US&apikey=7rgumhe4y72ab4ztgrn564qf9gced92n')
    }
    
})