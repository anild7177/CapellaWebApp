angular.module('rcApp')
    .controller('rcController', ['$scope', '$rootScope', '$location', 'rcService', '$modal', function ($scope, $rootScope, $location, rcService, $modal) {
        $rootScope.Questions = page.split('###'); //makes the array of URLs for questions
        //$rootScope.currentQuestion = 1; //Default current question is 1
        $rootScope.totalQuestions = $rootScope.Questions.length; //clculate total questions for questions array
        $rootScope.answer = ""; //Default answer is null

        //on page load
        $scope.init = function () {
            rcService.getRcData();
            rcService.getRcUserId();
            rcService.getRcUserData();

            $rootScope.rcType = "TestMyTech";
            $scope.started = $rootScope.rcUserData[$rootScope.rcType].testStatus == "started";
            $scope.completed = $rootScope.rcUserData[$rootScope.rcType].testStatus == "completed";
            $rootScope.currentQuestion = parseInt($rootScope.rcUserData[$rootScope.rcType].currentQuestion);
        };

        //send the answer to service and navigate to next question
        $scope.next = function () {
            rcService.storeAnswer($rootScope.currentQuestion, $rootScope.answer);
            $rootScope.currentQuestion = $rootScope.currentQuestion + 1;
            $location.path('/testMyTech/' + $rootScope.currentQuestion);
        }

        //navigate to previous question
        $scope.previous = function () {
            $rootScope.currentQuestion = $rootScope.currentQuestion - 1;
            $location.path('/testMyTech/' + $rootScope.currentQuestion);
        };

        //submit answers question
        $scope.submit = function () {
            rcService.storeAnswer($rootScope.currentQuestion, $rootScope.answer);
            $location.path('/testMyTech/results');
        };
        $scope.items = ['item1', 'item2', 'item3'];
        $scope.open = function () {
            var modalInstance = $modal.open({
                animation: $scope.animationsEnabled,
                templateUrl: 'myModalContent.html',
                resolve: {
                    items: function () {
                        return $scope.items;
                    }
                }
            });
        };
    }
]);