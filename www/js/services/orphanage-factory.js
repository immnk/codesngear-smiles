factories.factory(SMILES.FACTORIES.OrphanageFactory, OrphanageFactory);

OrphanageFactory.$inject = ['$q', 'utils'];

function OrphanageFactory($q, utils) {
    var service = {}
    service.getAllOrphanages = getAllOrphanages;

    function getAllOrphanages() {
        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".getAllOrphanages : start");
        
        var deferred = $q.defer();

        utils.callBackend(SMILES.BACK_END.RequestType.GET,
                SMILES.BACK_END.MethodName.viewOrphanages, {}, null)
            .then(function(response) {
                var orphanages = [];
                for(i=0; i <response.length; i++){
                    var tempOrphanage = response[i];
                    var orphanage = {};
                    
                    orphanage.id = tempOrphanage.ORPHANAGE_ID;
                    orphanage.name = tempOrphanage.ORPHANAGE_NAME;
                    orphanage.phone = tempOrphanage.ORPHANAGE_PHONE;
                    orphanage.address = tempOrphanage.ORPHANGE_ADDRESS;
                    orphanage.email = tempOrphanage.ORPHANAGE_EMAIL;
                    orphanage.description = tempOrphanage.ORPHANAGE_DESCRIPTION;
                    orphanage.img = tempOrphanage.ORPHANAGE_IMG;

                    orphanages.push(orphanage);
                }
                deferred.resolve(orphanages);
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            })

        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".login : end");
        return deferred.promise;
    }

    return service;
}
