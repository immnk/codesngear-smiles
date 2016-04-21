factories.factory(SMILES.FACTORIES.PeopleFactory, PeopleFactory);

PeopleFactory.$inject = ['$q', 'utils'];

function PeopleFactory($q, utils) {
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
