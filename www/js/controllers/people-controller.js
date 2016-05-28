controllers.controller(SMILES.CONTROLLERS.RegistrationController, RegistrationController);
controllers.controller(SMILES.CONTROLLERS.LoginController, LoginController);

RegistrationController.inject = ['$scope', '$state', 'utils', 'PeopleFactory'];
LoginController.inject = ['$scope', '$rootScope', '$state', 'utils', 'PeopleFactory'];

function RegistrationController($scope, $state, utils, PeopleFactory) {

}

function LoginController($scope, $rootScope, $state, utils, PeopleFactory) {
    $scope.loginFormObject = {
        username: '',
        password: ''
    }

    $scope.loginFormSubmit = loginFormSubmit;
    $scope.navigateRegister = navigate;

    function loginFormSubmit(loginForm) {
        utils.Logger.debug(SMILES.CONTROLLERS.LoginController + " - loginFormSubmit: start");

        if (loginForm.$valid) {
            utils.showSpinner();
            PeopleFactory.login($scope.loginFormObject).then(function(user) {
                $rootScope.user = user;
                utils.localStorage.setObject(SMILES.LOCAL_STORAGE.KEYS.USER, user);
                $state.go(SMILES.STATES.DASHBOARD.name);
                utils.hideSpinner();
            }, function(message) {
                utils.Logger.error(message);
                utils.hideSpinner();
                if (message.incorrect) {
                    utils.showAlert(utils.SMILES_MESSAGES.FAIL_TITLE, 
                        utils.SMILES_MESSAGES.FAIL_MESSAGE);
                } else {
                    utils.showAlert(utils.SMILES_MESSAGES.ERROR_TITLE, message);
                }
            });
        }

        utils.Logger.debug(SMILES.CONTROLLERS.LoginController + " - loginFormSubmit: end");
    }

    function navigate() {
        utils.Logger.debug(SMILES.CONTROLLERS.LoginController + " - navigate: start");

        $state.go("register");

        utils.Logger.debug(SMILES.CONTROLLERS.LoginController + " - navigate: end");
    }
}
