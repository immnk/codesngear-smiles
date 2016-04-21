factories.factory(SMILES.FACTORIES.PeopleFactory, PeopleFactory);

PeopleFactory.$inject = ['$q', 'utils'];

function PeopleFactory($q, utils) {
    var service = {}
    service.login = login;

    function login(loginFormObject) {
        utils.Logger.debug(SMILES.STATES.LOGIN.factory + ".login : start");

        var deferred = $q.defer();
        var user = {
            'userName': loginFormObject.username,
            'password': loginFormObject.password
        }

        utils.callBackend(SMILES.BACK_END.RequestType.GET, login, user, null)
            .then(function(response) {
                if (response.userid) {
                    deferred.resolve(response);
                } else {
                    deferred.reject();
                }
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            })

        utils.Logger.debug(SMILES.STATES.LOGIN.factory + ".login : end");
        return deferred.promise;
    }

    return service;
}
