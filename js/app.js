angular.module('rcApp', ['ngRoute','ui.bootstrap'])
.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/testMyTech/results',
            {
                templateUrl: 'questions/TestMyTech/resluts.html',
                controller: 'resultsController',
                controllerAs: 'resultsCtrl'
            })
        .when('/:name/:page',
            {
                templateUrl: 'questions/blank.html',
                controller: 'routingController'
            })
        
    .otherwise({ redirectTo: 'TestMyTech/1' });
}]);
