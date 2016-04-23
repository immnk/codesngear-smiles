factories.factory(SMILES.FACTORIES.ActivityFactory, ActivityFactory);

ActivityFactory.$inject = ['$q', 'utils'];

function ActivityFactory($q, utils) {
    var service = {}
    service.getActivitiesList = getActivitiesList;
    service.getWishListItems = getWishListItems;
    service.getWishListTotalValue = getWishListTotalValue;
    service.getWishlistItemsReceivedCost = getWishlistItemsReceivedCost;

    function getActivitiesList() {
        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getActivitiesList : start");

        var deferred = $q.defer();

        utils.callBackend(SMILES.BACK_END.RequestType.GET,
                SMILES.BACK_END.MethodName.getActivitiesList, {}, null)
            .then(function(response) {
                var activities = [];

                for (i = 0; i < response.length; i++) {
                    var temp = response[i];
                    var activity = {};

                    activity.wishlistId = temp.WISHLIST_ID;
                    activity.activityName = temp.ACTIVITY_NAME;
                    activity.orphanageId = temp.ORPHANAGE_ID;
                    activity.orphanageName = temp.ORPHANAGE_NAME;
                    activity.img = temp.IMAGE;
                    activity.contributed = 7700;
                    activity.total = 11500;

                    activity.percentageDone = Math.floor(activity.contributed / activity.total * 100) + '%';
                    activity.percentageRemaining = Math.floor(100 - (activity.contributed / activity.total * 100)) + '%';

                    var date = new Date(temp.VISIT_DATE);
                    activity.visit = date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();

                    activities.push(activity);
                }
                deferred.resolve(activities);
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            });

        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getActivitiesList : end");
        return deferred.promise;
    }

    function getWishListItems(activityId) {
        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getWishListItems : start");
        var deferred = $q.defer();
        var params = {
            'wishlistId': activityId
        };

        utils.callBackend(SMILES.BACK_END.RequestType.GET,
                SMILES.BACK_END.MethodName.getWishListItems, params, null)
            .then(function(response) {
                var items = [];
                for (i = 0; i < response.length; i++) {
                    var temp = response[i];
                    var item = {};

                    item.itemId = temp.ITEM_ID;
                    item.itemName = temp.ITEM_NAME;
                    item.description = temp.ITEM_DESCRIPTION;
                    item.qty = temp.ITEM_QTY;
                    item.apprPrice = temp.APPROXIMATE_PRICE;
                    item.itemRecv = temp.ITEMS_RECEIVED;
                    item.itemImg = "http://www.cricketershop.com/product_images/uploaded_images/full-cricket-kit-packs.-buy-online-for-boys-juniors-and-men.jpg";

                    items.push(item);
                }
                deferred.resolve(items);
            }, function(error) {
                var message = utils.handleError(error);
                deferred.reject(message);
            })

        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getWishListItems : end");
        return deferred.promise;
    }

    function getWishListTotalValue(activityId) {
        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getWishListTotalValue : start");
        var deferred = $q.defer();

        utils.callBackend(SMILES.BACK_END.RequestType.GET,
            SMILES.BACK_END.MethodName.getWishListTotalValue, { 'wishlistId': activityId },
            null
        ).then(function(response) {
            var activity = {};
            activity.total = response[0].TOTAL_PRICE;

            deferred.resolve(activity);
        }, function(error) {
            var message = utils.handleError(error);
            deferred.reject(message);
        })

        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getWishListTotalValue : end");
        return deferred.promise;
    }

    function getWishlistItemsReceivedCost(activityId) {
        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getWishlistItemsReceivedCost : start");

        var deferred = $q.defer();
        utils.callBackend(SMILES.BACK_END.RequestType.GET,
            SMILES.BACK_END.MethodName.getWishlistItemsReceivedCost, { 'wishlistId': activityId },
            null
        ).then(function(response) {
            var activity = {};
            activity.contributed = response.itemWorthReceived;

            deferred.resolve(activity);
        }, function(error) {
            var message = utils.handleError(error);
            deferred.reject(message);
        })

        utils.Logger.debug(SMILES.FACTORIES.ActivityFactory + ".getWishlistItemsReceivedCost : end");
        return deferred.promise;
    }

    return service;
}
