angular.module('rcApp')
.controller('routingController', ['$scope', '$http', '$route', '$routeParams', '$compile', '$rootScope', function ($scope, $http, $route, $routeParams, $compile, $rootScope) {
    var routeUrl = $rootScope.Questions[$routeParams.page - 1];
    $route.current.templateUrl = routeUrl;
    var multiSelectArray = [];
    $scope.checkSelectionArray = [];
    $http.get($route.current.templateUrl).then(function (msg) {
        angular.element("#views").html($compile(msg.data)($scope));
    });

    //for radio list
    $scope.updateAnswerSelection = function (value) {
        $rootScope.answer = value;
    }

    //for multi radio list
    $scope.updateAnswerMultiSelection = function (value, idx) {
        multiSelectArray[idx] = value;
        $rootScope.answer = multiSelectArray;
    }

    //for checkbox list
    $scope.updateAnswerCheckSelection = function (itemName) {
        var idx = $scope.checkSelectionArray.indexOf(itemName);
        // is currently selected
        if (idx > -1) {
            $scope.checkSelectionArray.splice(idx, 1);
        }

        // is newly selected
        else {
            $scope.checkSelectionArray.push(itemName);
            $rootScope.answer = $scope.checkSelectionArray;
        }
    }

}]);