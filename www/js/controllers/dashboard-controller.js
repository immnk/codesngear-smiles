controllers.controller(SMILES.CONTROLLERS.DashboardController, DashboardController);

DashboardController.inject = ['$scope','$http','$state'];

function DashboardController($scope,$http,$state){
	$scope.data = {};
	$scope.control = {
		parseDate : function(response){
			for (var i = 0; i < response.length; i++) {
				var date = new Date(response[i].VISIT_DATE);
				response[i].VISIT_DATE = date.getDate()+"-"+date.getMonth()+"-"+date.getFullYear();
			};
			$scope.data.activities = response;
		},
		navigateToWishlist : function(){
			$state.go('app.dashboard.activity',{activityId: "1"});
		}
	};
	$scope.data.initialize = function(){
		$http.get(SMILES.BACK_END.RootURL+SMILES.BACK_END.MethodName.getActivitiesList).then(function(response) {
			console.log(JSON.stringify(response));
		  	 $scope.control.parseDate(response.data);
		 });  
	}
	$scope.data.initialize();
	 
}