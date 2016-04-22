controllers.controller(SMILES.CONTROLLERS.DashboardController, DashboardController);

DashboardController.inject = ['$scope', '$http', '$state', 'ActivityFactory'];

function DashboardController($scope, $http, $state, ActivityFactory) {
    $scope.data = {};
    $scope.error = {
        'error': false
    }
    
    $scope.data.initialize = function() {
    	ActivityFactory.getActivitiesList()
            .then(function(response) {
                $scope.data.activities = response;
            }, function(err) {
                $scope.error = {
                    'error': true,
                    'errMsg': error
                }
            });
    }

    $scope.data.initialize();

}
