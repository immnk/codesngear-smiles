factories.factory(SMILES.FACTORIES.OrphanageFactory, OrphanageFactory);

OrphanageFactory.$inject = ['$q', 'utils'];

function OrphanageFactory($q, utils) {
    var service = {}
    service.getAllOrphanages = getAllOrphanages;

    function getAllOrphanages() {
        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".getAllOrphanages : start");
        
        utils.callBackend(SMILES.BACK_END.RequestType.,
                SMILES.BACK_END.MethodName.login, user, null)
            .then(function(response) {
                
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            })

        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".login : end");
        return deferred.promise;
    }

    return service;
}
