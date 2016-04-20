controllers.controller(MANI.CONTROLLERS.ProjectController, ProjectController);

ProjectController.inject = ['$scope', '$stateParams', MANI.FACTORIES.ProjectsFactory];

function ProjectController($scope, $stateParams, ProjectsFactory){
  init();

  function init(){
  	console.log($stateParams.projectId);
  	ProjectsFactory.getProjectById($stateParams.projectId).then(function(project){
  		$scope.project = project;
  	}, function(error){
  		console.log(error);
  	});
  }

  $scope.openBrowser = openBrowser;

  function openBrowser(url){
  	window.open(url, '_blank' , 'location=no');
  }
}