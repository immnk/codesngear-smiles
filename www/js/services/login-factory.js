factories.factory(SMILES.FACTORIES.LoginFactory, LoginFactory);

LoginFactory.$inject = ['$q', 'utils'];

function LoginFactory($q, utils) {
    var service = {}
    service.login = login;

    function login(loginFormObject) {
        utils.Logger.debug(SMILES.STATES.LOGIN.factory + ".login : start");

        var deferred = $q.defer();

        deferred.resolve(true);

        utils.Logger.debug(SMILES.STATES.LOGIN.factory + ".login : end");
        return deferred.promise;
    }

    return service;
}
