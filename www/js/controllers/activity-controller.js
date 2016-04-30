controllers.controller(SMILES.CONTROLLERS.ActivityController, ActivityController);

ActivityController.inject = ['$scope', '$stateParams', 'ActivityFactory'];

function ActivityController($scope, $stateParams, ActivityFactory) {
    $scope.activeTabId = 0;
    $scope.activityId = '';
    $scope.error = {
        'error': false
    }
    $scope.changeActiveTabTo = changeActiveTabTo;
    $scope.getCompletedValue = getCompletedValue;
    $scope.toggleShowHideDetails = toggleShowHideDetails;
    init();

    function toggleShowHideDetails(item){
        if(item.showDetails){
            item.showDetails = false;
        }else{
            item.showDetails = true;
        }
    }

    function changeActiveTabTo(tabId){
        $scope.activeTabId = tabId;
    }

    function getCompletedValue(item){
        return Math.ceil(item.itemRecv*100/item.qty);
    }

    function init() {
        $scope.items = [{
            itemName: "Notebooks",
            description: "",
            qty: 150,
            apprPrice: "4500.00",
            itemRecv: 100,
            itemImg: "../img/books.jpg",
            pickupItems: [{

            },]
        },{
            itemName: "Pencils",
            description: "",
            qty: 200,
            apprPrice: "600.00",
            itemRecv: 120,
            itemImg: "../img/pencils.jpeg"
        },{
            itemName: "Bags",
            description: "",
            qty: 10,
            apprPrice: "4000.00",
            itemRecv: 10,
            itemImg: "../img/bags.jpg"
        },{
            itemName: "Cricket Kit",
            description: "",
            qty: 2,
            apprPrice: "1600.00",
            itemRecv: 1,
            itemImg: "../img/sports-kit.png"
        },{
            itemName: "Shampoo Bottles",
            description: "",
            qty: 10,
            apprPrice: "4000.00",
            itemRecv: 9,
            itemImg: "../img/bags.jpg"
        }]
        /*$scope.activityId = $stateParams.activityId;
        ActivityFactory.getWishListItems($scope.activityId).then(function(response) {
        	$scope.items = response;
        }, function(error) {
            $scope.error = {
                'error': true,
                'errMsg': error
            }
        })*/
    }
}

controllers.controller(SMILES.CONTROLLERS.WishListController, WishListController);

WishListController.inject = ['$scope'];

function WishListController($scope) {
    console.log('in WishListController');
}

controllers.controller(SMILES.CONTROLLERS.PickupController, PickupController);

PickupController.inject = ['$scope'];

function PickupController($scope) {
    console.log('in PickupController');
}

controllers.controller(SMILES.CONTROLLERS.WishListDetailController, WishListDetailController);

WishListDetailController.inject = ['$scope', '$state', '$stateParams'];

function WishListDetailController($scope, $state, $stateParams) {

}

controllers.controller(SMILES.CONTROLLERS.GalleryController, GalleryController);

GalleryController.inject = ['$scope'];

function GalleryController($scope) {

}
