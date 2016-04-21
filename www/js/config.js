var SMILES = {
    APP_NAME: "smiles",
    MESSAGES: "SMILES_MESSAGES",
    MODULE_NAMES: {
        CONTROLLERS: "smiles.controllers",
        FACTORIES: "smiles.factories",
        DIRECTIVES: "smiles.directives",
        UTILS: "smiles.utils",
        MESSAGES: "smiles.messages",
        LOGGER: "Logger",
        LOCAL_STORAGE: "LocalStorage"
    },
    CONTROLLERS: {
        LoginController: "LoginController",
        RegistrationController: "RegistrationController",
        SideMenuController: "SideMenuController",
        DashboardController: "DashboardController",
        ActivityController: "ActivityController",
        WishListDetailController: "WishListDetailController",
        OrphanageController: "OrphanageController",
        OrphanageDetailController: "OrphanageDetailController",
        GalleryController: "GalleryController",
        AboutUsController: "AboutUsController"
    },
    FACTORIES: {
        GalleryFactory: "GalleryFactory",
        PeopleFactory: "PeopleFactory",
        OrphanageFactory: "OrphanageFactory",
        ActivityFactory: "ActivityFactory",
        Logger: "Logger",
        LocalStorage: "LocalStorage"
    },
    STATES: {
        LOGIN: {
            name: 'login',
            url: '/login',
            templateUrl: 'templates/login.html',
            controller: 'LoginController',
            cache: false
        },
        REGISTER: {
            name: 'register',
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'RegistrationController'
        },
        SIDE_MENU: {
            name: 'app',
            url: '/app',
            templateUrl: 'templates/menu.html',
            controller: 'SideMenuController'

        },
        DASHBOARD: {
            name: 'app.dashboard',
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller: 'DashboardController'
        },
        ACTIVITY: {
            name: 'app.activity',
            url: '/:activityId',
            templateUrl: 'templates/activity.html',
            controller: 'ActivityController'
        },
        WISHLISTDETAIL: {
            name: 'app.activity.wishlist',
            url: '/:wishlistId',
            templateUrl: 'templates/wishlist_detail.html',
            controller: 'WishListDetailController'
        },
        GALLERY: {
            name: 'app.gallery',
            url: '/gallery',
            templateUrl: 'templates/gallery.html',
            controller: 'GalleryController'
        },
        ORPHANAGE: {
            name: 'app.orphanage',
            url: '/orphanage',
            templateUrl: 'templates/orphanages.html',
            controller: 'OrphanageController'
        },
        ORPHANAGE_DETAIL: {
            name: 'app.orphangeDetail',
            url: '/:orphangeId',
            templateUrl: 'templates/orphanage_detail.html',
            controller: 'OrphanageDetailController'
        },
        ABOUTUS: {
            name: 'app.aboutus',
            url: '/aboutus',
            templateUrl: 'templates/aboutus.html',
            controller: 'AboutUsController'
        }
    },
    BACK_END: {
        RootURL: "http://52.70.70.64:3300/",
        MethodName: {
            "login": "Login",
            "getUserPermission": "getUserPermission",
            "getAllEmployees": "getAllEmployees",
            "getEmployeeDetails": "getEmployeeDetails",
            "getReportingEmployees": "getReportingEmployees",
            "updateSalesRepNum": "updateSalesRepNum",
            "getUserAvatar": "getUserAvatar"
        },
        RequestType: {
            GET: "GET",
            POST: "POST"
        },
        ResponseType: {
            SUCCESS: "success",
            ERROR: "error"
        },
        ERROR_CODES: {
            NETWORK_ERROR: "NETWORK_ERROR",
            UNAUTHORIZED: "UNAUTHORIZED"
        }
    },
    LOCAL_STORAGE: {
        KEYS: {
            USER: "USER",
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
