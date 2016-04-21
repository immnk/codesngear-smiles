controllers.controller(SMILES.CONTROLLERS.RegistrationController, RegistrationController);

RegistrationController.inject = ['$scope', '$state', 'utils', 'PeopleFactory'];

function RegistrationController($scope, $state, utils, PeopleFactory){
  
}

controllers.controller(SMILES.CONTROLLERS.LoginController, LoginController);

LoginController.inject = ['$scope', '$state', 'utils', 'PeopleFactory'];

function LoginController($scope, $state, utils, PeopleFactory){
 	$scope.loginFormObject = {
        username: '',
        password: ''
    }

    $scope.loginFormSubmit = loginFormSubmit;

    function loginFormSubmit(loginForm) {
        utils.Logger.debug(SMILES.CONTROLLERS.LoginController + " - loginFormSubmit: start");
        utils.Logger.debug(SMILES.CONTROLLERS.LoginController + " - loginform - " +loginForm);

        if (loginForm.$valid) {
            utils.showSpinner();
            PeopleFactory.login($scope.loginFormObject).then(function(user) {
                $state.go(SMILES.STATES.DASHBOARD.name);
                utils.hideSpinner();
            }, function(message) {
                utils.hideSpinner();
                utils.showAlert(utils.SMILES_MESSAGES.ERROR_TITLE, message);
            });
        }

        utils.Logger.debug(SMILES.CONTROLLERS.LoginController + " - loginFormSubmit: end");
    } 
}