factories.factory(SMILES.FACTORIES.PeopleFactory, PeopleFactory);

PeopleFactory.$inject = ['$q', 'utils'];

function PeopleFactory($q, utils) {
    var service = {}
    service.login = login;

    function login(loginFormObject) {
        utils.Logger.debug(SMILES.FACTORIES.PeopleFactory + ".login : start");

        var deferred = $q.defer();
        var user = {
            'userName': loginFormObject.username,
            'password': loginFormObject.password
        }

        utils.callBackend(SMILES.BACK_END.RequestType.POST,
                SMILES.BACK_END.MethodName.login, user, null)
            .then(function(response) {
                if (response.length == 1) {
                    var user = {};

                    user.userName = response[0].USER_NAME;
                    user.userId = response[0].USER_ID;
                    user.email = response[0].USER_EMAIL;
                    user.role = response[0].USER_ROLE;
                    user.phone = response[0].USER_PHONE;
                    user.address = response[0].USER_ADDR;
                    user.picture = response[0].USER_PHOTO;

                    deferred.resolve(user);
                } else {
                    deferred.reject(response);
                }
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            })

        utils.Logger.debug(SMILES.FACTORIES.PeopleFactory + ".login : end");
        return deferred.promise;
    }

    return service;
}
