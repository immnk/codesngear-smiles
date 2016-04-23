controllers.controller(SMILES.CONTROLLERS.ActivityController, ActivityController);

ActivityController.inject = ['$scope', '$stateParams', 'ActivityFactory'];

function ActivityController($scope, $stateParams, ActivityFactory) {
    $scope.activityId = '';
    $scope.error = {
        'error': false
    }
    init();

    function init() {
        $scope.activityId = $stateParams.activityId;
        ActivityFactory.getWishListItems($scope.activityId).then(function(response) {
        	$scope.items = response;
        }, function(error) {
            $scope.error = {
                'error': true,
                'errMsg': error
            }
        })
    }
}

controllers.controller(SMILES.CONTROLLERS.WishListDetailController, WishListDetailController);

WishListDetailController.inject = ['$scope', '$state', '$stateParams'];

function WishListDetailController($scope, $state, $stateParams) {

}

controllers.controller(SMILES.CONTROLLERS.GalleryController, GalleryController);

GalleryController.inject = ['$scope'];

function GalleryController($scope) {

}
