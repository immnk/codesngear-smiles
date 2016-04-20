factories.factory(MANI.FACTORIES.ProjectsFactory, ProjectsFactory);

ProjectsFactory.$inject = ['$q', 'utils'];

function ProjectsFactory($q, utils) {

    var serviceUrl = MANI.BACK_END.LocalService + 'assets/projects.json';

    var service = {};
    service.projects = [];
    service.getAllProjects = getAllProjects;
    service.getProjectById = getProjectById;

    return service;

    function getAllProjects() {
        var deferred = $q.defer();

        if (service.projects.length > 0) {
            deferred.resolve(service.projects);
        } else {
            
            var url = "../assets/projects.json";
            //get all the projects from backend here...
            utils.getLocalData(serviceUrl).then(function(data) {
                deferred.resolve(data.data.projects);
            }, function(error) {
                deferred.reject(error);
            });
        }

        return deferred.promise;
    }

    function getProjectById(id) {
        var deferred = $q.defer();

        utils.getLocalData(serviceUrl).then(function(data) {
            service.projects = data.data.projects;
            if (service.projects.length > 0) {
                var foundProject = {};
                for (i = 0; i < service.projects.length; i++) {
                    var project = service.projects[i];
                    if (id == project.id) {
                        foundProject = project;
                        break;
                    }
                }
                if (foundProject.id) {
                    deferred.resolve(foundProject);
                } else {
                    foundProject.error = "No project found";
                    deferred.reject(foundProject);
                }
            }
        }, function(error) {
            deferred.reject(error);
        });

        return deferred.promise;
    }
}
