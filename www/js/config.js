var MANI = {
    APP_NAME: "mani",
    MESSAGES : "MANI_MESSAGES",
    MODULE_NAMES: {
        CONTROLLERS: "mani.controllers",
        FACTORIES: "mani.factories",
        DIRECTIVES : "mani.directives",
        UTILS: "mani.utils",
        MESSAGES : "mani.messages",
        LOGGER : "Logger",
        LOCAL_STORAGE : "LocalStorage"
    },
    CONTROLLERS : {
        DashboardController : "DashboardController",
        ProjectsController : "ProjectsController",
        ProjectController : "ProjectController",
        SideMenuController : "SideMenuController",
        AboutMeController: "AboutMeController",
        ContactMeController: "ContactMeController"
    },
    FACTORIES :  {
        ProjectsFactory: "ProjectsFactory",
        Logger : "Logger",
        LocalStorage : "LocalStorage"
    },
    STATES: {
        SIDE_MENU: {
            name: 'app',
            url: '/app',
            templateUrl: 'templates/menu.html',
            controller: 'SideMenuController',
            factory: 'SideMenuFactory',
            cache: true
        },
        DASHBOARD: {
            name: 'app.dashboard',
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardController',
            cache: false
        },
        PROJECTS: {
            name: 'app.projects',
            url: '/projects',
            templateUrl: 'templates/project-list.html',
            controller: 'ProjectsController',
            factory: 'ProjectsFactory',
            cache: true
        },
        PROJECTDETAIL: {
            name: 'app.projectdetail',
            url: '/projects/:projectId',
            templateUrl: 'templates/project.html',
            controller: 'ProjectController',
            cache: false
        },
        ABOUTME: {
            name: 'app.aboutme',
            url: '/aboutme',
            templateUrl: 'templates/aboutme.html',
            controller: 'AboutMeController',
            cache: true
        },
        CONTACTME: {
            name: 'app.contactme',
            url: '/contactme',
            templateUrl: 'templates/contactme.html',
            controller: 'ContactMeController',
            cache: true
        }
    },
    BACK_END: {
        LocalService: "file:///android_asset/www/",
        RootURL: "http://satwebdev2.siriuscom.com/ela/mobiledev/rest.php?methodName=",
        IMAGEURL: "http://satwebdev2.siriuscom.com/ela/mobiledev/imageprovider.php?methodName=getUserAvatar&eid=",
        MethodName: {
            "login" : "login",
            "getUserPermission" : "getUserPermission",
            "getAllEmployees" : "getAllEmployees",
            "getEmployeeDetails" : "getEmployeeDetails",
            "getReportingEmployees" : "getReportingEmployees",
            "updateSalesRepNum" : "updateSalesRepNum",
            "getUserAvatar" : "getUserAvatar"
        },
        RequestType: {
            GET: "GET",
            POST: "POST"
        },
        ResponseType: {
            SUCCESS: "success",
            ERROR: "error"
        },
        ERROR_CODES : {
            NETWORK_ERROR : "NETWORK_ERROR",
            UNAUTHORIZED : "UNAUTHORIZED"
        }
    },
    LOCAL_STORAGE : {
        KEYS : {
            USER : "USER",
        }
    }
};

var controllers = angular.module(MANI.MODULE_NAMES.CONTROLLERS, []);
var factories = angular.module(MANI.MODULE_NAMES.FACTORIES, []);
var directives = angular.module(MANI.MODULE_NAMES.DIRECTIVES, []);
var utils = angular.module(MANI.MODULE_NAMES.UTILS, [MANI.MODULE_NAMES.LOGGER, MANI.MODULE_NAMES.LOCAL_STORAGE]);
var messages = angular.module(MANI.MODULE_NAMES.MESSAGES, []);
var logger = angular.module(MANI.MODULE_NAMES.LOGGER, []);
var localStorage = angular.module(MANI.MODULE_NAMES.LOCAL_STORAGE, []);
