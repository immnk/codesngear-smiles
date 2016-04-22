factories.factory(SMILES.FACTORIES.ManagementFactory, ManagementFactory);

ManagementFactory.$inject = ['$q', 'utils'];

function ManagementFactory($q, utils) {
    var service = {}
    service.getUserDonatedItemDetails = getUserDonatedItemDetails;

    function getUserDonatedItemDetails(user_id) {
        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".getUserDonatedItemDetails : start");
        
        var deferred = $q.defer();
        var params = {
            'userId': user_id
        };

        utils.callBackend(SMILES.BACK_END.RequestType.GET,
                SMILES.BACK_END.MethodName.getUserDonatedItemDetails, params, null)
            .then(function(transactions) {
                deferred.resolve(transactions);
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            })

        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".getUserDonatedItemDetails : end");
        return deferred.promise;
    }

    return service;
}
