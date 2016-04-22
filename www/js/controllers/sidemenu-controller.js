controllers.controller(SMILES.CONTROLLERS.SideMenuController, SideMenuController);

SideMenuController.inject = ['$scope', '$rootScope', '$state',
    'utils', '$ionicHistory', '$ionicSideMenuDelegate', '$timeout'
];

function SideMenuController($scope, $rootScope, $state,
    utils, $ionicHistory, $ionicSideMenuDelegate, $timeout) {
    $scope.logout = logout;

    function logout() {
        $ionicSideMenuDelegate.toggleLeft();
        $rootScope.user = null;
        utils.localStorage.removeItem(SMILES.LOCAL_STORAGE.KEYS.USER);
        $timeout(function() {
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
            $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
            $state.go(SMILES.STATES.LOGIN.name);
        }, 30);
    }
}
