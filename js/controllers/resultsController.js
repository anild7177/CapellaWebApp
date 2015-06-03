angular.module('rcApp')
.controller('resultsController', ['$scope', '$http', '$route', '$routeParams', '$compile', '$rootScope', function ($scope, $http, $route, $routeParams, $compile, $rootScope) {
    
    var resultsCtrl = this;
    var sliderResult = $rootScope.rcUserData.TestMyTech["5"].answer;
    sliderResult = sliderResult.toString();

    var SpendTimeResult = $rootScope.rcUserData.TestMyTech["7"].answer;
    SpendTimeResult = SpendTimeResult.toString();

    var OnlineLearningResult = $rootScope.rcUserData.TestMyTech["8"].answer;
    OnlineLearningResult = OnlineLearningResult.toString();

    resultsCtrl.primaryComputer = $rootScope.rcUserData.TestMyTech["1"].answer;
    resultsCtrl.computerAge = $rootScope.rcUserData.TestMyTech["2"].answer;
    resultsCtrl.computerUsers = $rootScope.rcUserData.TestMyTech["3"].answer;
    resultsCtrl.internetConnection = $rootScope.rcUserData.TestMyTech["4"].answer;
    resultsCtrl.softwareUse = sliderResult;
    resultsCtrl.fastType = $rootScope.rcUserData.TestMyTech["6"].answer;
    resultsCtrl.spendTime = SpendTimeResult;
    resultsCtrl.onlineLearning = OnlineLearningResult;

}]);