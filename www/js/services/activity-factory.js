factories.factory(SMILES.FACTORIES.ActivityFactory, ActivityFactory);

ActivityFactory.$inject = ['$q', 'utils'];

function ActivityFactory($q, utils) {
    var service = {}
    service.getActivitiesList = getActivitiesList;

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
                    activity.visit = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();

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

    return service;
}
