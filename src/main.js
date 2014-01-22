/**
 * Created by Brock 2013 on 1/15/14.
 */
var myApp = angular.module('myApp', ["ui.router"]);

myApp.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('list', {
            url: '/',
            templateUrl: 'main.html',
            controller: 'EventListCtrl'
        })
        .state('detail', {
            url: '/events/:eventName',
            templateUrl: 'events/work.html',
            controller: 'EventDetailCtrl'
        })

    $urlRouterProvider.otherwise('/')
})

myApp.factory('DataService', function($http) {
    var DataService = {
        async: function(city,state) {
            var url = 'http://api.wunderground.com/api/640c76b3899d514b/forecast/q/' + state + '/' + city + '.json?callback=JSON_CALLBACK'
            return  $http.jsonp(url)
        }
    };
    return DataService;
});

myApp.filter('activityFilter', function() {
        //first define some helper functions
        return function(input) {
            var out;
            if (input) {
                for (var i in input) {
                    if (input[i] < out || out === undefined || out === null) {
                        out = input[i];
                    }
                }
            }
            return out;
        };
    }
);


myApp.factory('Events', function() {
    var Events = {};
    Events.things = [
        {
            name: "Weather App",
            active: true
        },
        {
            name: "Some Other App",
            active: false
        }
    ];
    return Events;
})

myApp.controller("EventListCtrl", function ($scope, Events) {

    $scope.weather = {}

//    $scope.weather = function() {
//        return wundergroundData;
//    };
    $scope.events = Events;

    $scope.toggleActive = function (s) {
        s.active = !s.active;
    };

});

myApp.controller("EventDetailCtrl", function ($scope, $state, DataService, Events) {

    DataService.async('Minneapolis','MN').success(function(wundergroundData){
        console.log(wundergroundData)
        $scope.weather = wundergroundData

    })

    $scope.getDataForCityAndState = function(city,state){

        DataService.async(city,state).success(function(wundergroundData){
            console.log(wundergroundData)
            $scope.weather = wundergroundData

        })
    }

    $scope.change = function(value){

        DataService.async("minneapolis","mn").success(function(wundergroundData){
            console.log(wundergroundData)
            var something = wundergroundData.forecast.simpleforecast.temperature.high;
        })
    }

    $scope.selectedEvent = {
        name : $state.params.eventName
    }


});