factories.factory(SMILES.FACTORIES.ManagementFactory, ManagementFactory);

ManagementFactory.$inject = ['$q', 'utils'];

function ManagementFactory($q, utils) {
    var service = {}
    service.getUserClaimedItemDetails = getUserClaimedItemDetails;

    function getUserClaimedItemDetails(user_id) {
        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".getUserClaimedItemDetails : start");

        var deferred = $q.defer();
        var params = {
            'userId': user_id
        };

        utils.callBackend(SMILES.BACK_END.RequestType.GET,
                SMILES.BACK_END.MethodName.getUserClaimedItemDetails, params, null)
            .then(function(response) {
                var transactions = [];

                for (i = 0; i < response.length; i++) {
                    var temp = response[i];
                    var transaction = {};

                    transaction.itemName = temp.ITEM_NAME;
                    transaction.donorUserId = temp.donor_user_id;
                    transaction.itemId = temp.ITEM_ID;
                    transaction.itemDesc = temp.ITEM_DESCRIPTION;
                    transaction.qty = temp.QUANTITY;
                    transaction.wishlistId = temp.WISHLIST_ID;
                    
                    transactions.push(transaction);
                }
                deferred.resolve(transactions);
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            });

        utils.Logger.debug(SMILES.FACTORIES.OrphanageFactory + ".getUserClaimedItemDetails : end");
        return deferred.promise;
    }

    return service;
}
