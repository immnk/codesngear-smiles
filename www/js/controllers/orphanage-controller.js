controllers.controller(SMILES.CONTROLLERS.OrphanageController, OrphanageController);

OrphanageController.inject = ['$scope', 'OrphanageFactory'];

function OrphanageController($scope, OrphanageFactory){
  $scope.orphanages = [];
  init();

  function init(){
  	console.log('OrphanageController');
  	OrphanageFactory.getAllOrphanages().then(function(response){
  		$scope.orphanages = response;
  	}, function(error){
  		$scope.error = error;
  	});
  }
}

controllers.controller(SMILES.CONTROLLERS.OrphanageDetailController, OrphanageDetailController);

OrphanageDetailController.inject = ['$scope', '$state', '$stateParams', 'OrphanageFactory'];

function OrphanageDetailController($scope, $state, $stateParams, OrphanageFactory){
  
}