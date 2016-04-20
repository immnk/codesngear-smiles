controllers.controller(MANI.CONTROLLERS.ProjectsController, ProjectsController);

ProjectsController.inject = ['$scope', '$state', MANI.FACTORIES.ProjectsFactory];

function ProjectsController($scope, $state, ProjectsFactory){
	
	init();

	function init(){
		ProjectsFactory.getAllProjects().then(function(data){
			console.log(data);
			$scope.projects = data;
		}, function(error){
			console.error(error);
			$scope.projects = [];
		});
	}
}