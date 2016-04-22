factories.factory(SMILES.FACTORIES.PeopleFactory, PeopleFactory);

PeopleFactory.$inject = ['$q', 'utils'];

function PeopleFactory($q, utils) {
    var service = {}
    service.login = login;
    service.getAllUsers = getAllUsers;

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

    function getAllUsers() {
        utils.Logger.debug(SMILES.FACTORIES.PeopleFactory + ".getAllUsers : start");

        var deferred = $q.defer();
        utils.callBackend(SMILES.BACK_END.RequestType.GET,
                SMILES.BACK_END.MethodName.getAllUserDetails, {}, null)
            .then(function(response) {
                if (response.length > 0) {
                    var users = [];
                    for (i = 0; i < response.length; i++) {
                        var user = {};
                        var tempUser = response[i];

                        user.userName = tempUser.USER_NAME;
                        user.userId = tempUser.USER_ID;
                        user.email = tempUser.USER_EMAIL;
                        user.role = tempUser.USER_ROLE;
                        user.phone = tempUser.USER_PHONE;
                        user.address = tempUser.USER_ADDR;
                        user.picture = tempUser.USER_PHOTO;

                        users.push(user);
                    }
                    deferred.resolve(users);
                } else {
                    deferred.resolve(response);
                }

            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            });

        utils.Logger.debug(SMILES.FACTORIES.PeopleFactory + ".getAllUsers : end");
        return deferred.promise;
    }

    return service;
}
