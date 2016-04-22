controllers.controller(SMILES.CONTROLLERS.ManagementController, ManagementController);

ManagementController.inject = ['$scope', 'ManagementFactory', 'PeopleFactory'];

function ManagementController($scope, ManagementFactory, PeopleFactory) {
    $scope.allUsers = [];
    $scope.users = [];
    $scope.transactions = [];
    $scope.search = {
        'userName': ''
    };
    $scope.selectedUser = {};
    $scope.error = {
        'error': false
    }
    $scope.filterUsers = filterUsers;
    $scope.selectUser = selectUser;

    init();

    function init() {
        PeopleFactory.getAllUsers().then(function(users) {
            $scope.allUsers = users;
            $scope.users = users;
        }, function(error) {
            $scope.error.error = true;
            $scope.error.errMsg = error;
        });
    }

    function filterUsers(searchTerm) {
        $scope.users = [];
        $scope.transactions = [];
        $scope.selectedUser = {};
        if (searchTerm == "") {
            $scope.users = $scope.allUsers;
        } else {
            for (i = 0; i < $scope.allUsers.length; i++) {
                var user = $scope.allUsers[i];
                var userName = user.userName;

                if (userName.indexOf(searchTerm) > -1) {
                    $scope.users.push(user);
                }
            }
        }
    }

    function selectUser(user) {
        $scope.selectedUser = user;
        $scope.search.userName = user.userName;
        $scope.users = [];
        ManagementFactory.getUserClaimedItemDetails(user.userId)
            .then(function(transactions) {
                $scope.transactions = transactions;
            }, function(error) {
                $scope.error.error = true;
                $scope.error.errMsg = error;
            });
    }
}
