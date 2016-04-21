var SMILES = {
    APP_NAME: "smiles",
    MESSAGES : "SMILES_MESSAGES",
    MODULE_NAMES: {
        CONTROLLERS: "smiles.controllers",
        FACTORIES: "smiles.factories",
        DIRECTIVES : "smiles.directives",
        UTILS: "smiles.utils",
        MESSAGES : "smiles.messages",
        LOGGER : "Logger",
        LOCAL_STORAGE : "LocalStorage"
    },
    CONTROLLERS : {
        LoginController: "LoginController",
        DashboardController: "DashboardController",
        SideMenuController: "SideMenuController",
        AboutMeController: "AboutUsController",
        ContactMeController: "ContactUsController"
    },
    FACTORIES : {
        WishListFactory: "WishListFactory",
        GalleryFactory: "GalleryFactory",
        LoginFactory: "LoginFactory",
        Logger : "Logger",
        LocalStorage : "LocalStorage"
    },
    STATES: {
        LOGIN: {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController',
            factory: 'LoginFactory',
            cache: false
        },
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
        ABOUTUS: {
            name: 'app.aboutus`',
            url: '/aboutus',
            templateUrl: 'templates/aboutus.html',
            controller: 'AboutUsController',
            cache: true
        },
        CONTACTUS: {
            name: 'app.contactus',
            url: '/contactus',
            templateUrl: 'templates/contactus.html',
            controller: 'ContactUsController',
            cache: true
        }
    },
    BACK_END: {
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

var controllers = angular.module(SMILES.MODULE_NAMES.CONTROLLERS, []);
var factories = angular.module(SMILES.MODULE_NAMES.FACTORIES, []);
var directives = angular.module(SMILES.MODULE_NAMES.DIRECTIVES, []);
var utils = angular.module(SMILES.MODULE_NAMES.UTILS, [SMILES.MODULE_NAMES.LOGGER, SMILES.MODULE_NAMES.LOCAL_STORAGE]);
var messages = angular.module(SMILES.MODULE_NAMES.MESSAGES, []);
var logger = angular.module(SMILES.MODULE_NAMES.LOGGER, []);
var localStorage = angular.module(SMILES.MODULE_NAMES.LOCAL_STORAGE, []);
