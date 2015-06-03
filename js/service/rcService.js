angular.module('rcApp')
.service('rcService', ['$rootScope', function ($rootScope) {
    var rcServiceRef = {};

    rcServiceRef.getRcData = function () {
        if (!localStorage.getItem('rcData')) {
            var rcJSONData = '{"RC": {}}';
            localStorage.setItem('rcData', rcJSONData);
        }
        $rootScope.rcData = angular.fromJson(localStorage.getItem('rcData'));
    };

    rcServiceRef.getRcUserId = function() {
        if (localStorage.getItem('rcUser')) {
            $rootScope.rcUserId = localStorage.getItem('rcUser');
        } else {
            var rcUserId = "rcuser" + Math.floor((Math.random() * 1000) + 1);
            localStorage.setItem('rcUser', rcUserId);
            $rootScope.rcUserId = rcUserId;
        }
    };

    rcServiceRef.getRcUserData = function() {
        if ($rootScope.rcData.RC[$rootScope.rcUserId]) {
            $rootScope.rcUserData = $rootScope.rcData.RC[$rootScope.rcUserId];
        } else {
            $rootScope.rcData.RC[$rootScope.rcUserId] = angular.fromJson('{"TestMyTech":{"1":{"answer": ""},"2": {"answer": ""},"3": {"answer": ""},"4": { "answer": ""},"5": { "answer": ""}, "6": { "answer": ""},"7": { "answer": ""},"8": { "answer": ""}, "testStatus":"started", "currentQuestion":"1" }}');
            rcServiceRef.storeData($rootScope.rcData);
            $rootScope.rcUserData = $rootScope.rcData.RC[$rootScope.rcUserId];
        }
    };

    rcServiceRef.updateTestStatus = function(status, currentQuestion) {
        $rootScope.rcUserData[$rootScope.rcType].testStatus = status;
        $rootScope.rcUserData[$rootScope.rcType].currentQuestion = currentQuestion;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.storeData = function(userData) {
        localStorage.setItem('rcData', angular.toJson(userData));
    };

    rcServiceRef.storePrimaryComputer = function(answer) {
        $rootScope.rcUserData["TestMyTech"]["1"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.getPrimaryComputer = function() {
        return $rootScope.rcUserData["TestMyTech"]["1"].answer;
    };

    rcServiceRef.storeComputerAge = function(answer) {
        $rootScope.rcUserData["TestMyTech"]["2"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.getComputerAge = function() {
        return $rootScope.rcUserData["TestMyTech"]["2"].answer;
    };

    rcServiceRef.storeComputerUsers = function(answer) {
        $rootScope.rcUserData["TestMyTech"]["3"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.getComputerUsers = function() {
        return $rootScope.rcUserData["TestMyTech"]["3"].answer;
    };

    rcServiceRef.storeInternetConnection = function(answer) {
        $rootScope.rcUserData["TestMyTech"]["4"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.getInternetConnection = function() {
        return $rootScope.rcUserData["TestMyTech"]["4"].answer;
    };

    rcServiceRef.storeSoftwareUse = function(answer) {
        $rootScope.rcUserData["TestMyTech"]["5"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.getSoftwareUse = function() {
        return $rootScope.rcUserData["TestMyTech"]["5"].answer;
    };

    rcServiceRef.storeFastType = function(answer) {
        $rootScope.rcUserData["TestMyTech"]["6"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.getFastType = function() {
        return $rootScope.rcUserData["TestMyTech"]["6"].answer;
    };

    rcServiceRef.storeSpendTime = function(answer) {
        $rootScope.rcUserData["TestMyTech"]["7"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    };

    rcServiceRef.getSpendTime = function() {
        return $rootScope.rcUserData["TestMyTech"]["7"].answer;
    };

    rcServiceRef.storeOnlineLearning = function (answer) {
        $rootScope.rcUserData["TestMyTech"]["8"].answer = answer;
        $rootScope.rcData.RC[$rootScope.rcUserId] = $rootScope.rcUserData;
        rcServiceRef.storeData($rootScope.rcData);
    }

    rcServiceRef.getOnlineLearning = function () {
        return $rootScope.rcUserData["TestMyTech"]["8"].answer;
    }

    rcServiceRef.storeAnswer = function (questionId, answer) {
        if (questionId == 1) {
            rcServiceRef.storePrimaryComputer(answer);
            rcServiceRef.updateTestStatus('started', $rootScope.currentQuestion);
        }
        if (questionId == 2) {
            rcServiceRef.storeComputerAge(answer);
            rcServiceRef.updateTestStatus('started', $rootScope.currentQuestion);
        }
        if (questionId == 3) {
            rcServiceRef.storeComputerUsers(answer);
            rcServiceRef.updateTestStatus('started', $rootScope.currentQuestion);
        }
        if (questionId == 4) {
            rcServiceRef.storeInternetConnection(answer);
            rcServiceRef.updateTestStatus('started', $rootScope.currentQuestion);
        }
        if (questionId == 5) {
            rcServiceRef.storeSoftwareUse(answer);
            rcServiceRef.updateTestStatus('started', $rootScope.currentQuestion);
        }
        if (questionId == 6) {
            rcServiceRef.storeFastType(answer);
            rcServiceRef.updateTestStatus('started', $rootScope.currentQuestion);
        }
        if (questionId == 7) {
            rcServiceRef.storeSpendTime(answer);
            rcServiceRef.updateTestStatus('started', $rootScope.currentQuestion);
        }
        if (questionId == 8) {
            rcServiceRef.storeOnlineLearning(answer);
            rcServiceRef.updateTestStatus('completed', $rootScope.currentQuestion);
        }
    };

    return rcServiceRef;
}]);