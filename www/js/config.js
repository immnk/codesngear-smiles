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
        GalleryController: "GalleryController",
        ManagementController: 'ManagementController',
        AboutUsController: "AboutUsController"
    },
    FACTORIES: {
        GalleryFactory: "GalleryFactory",
        PeopleFactory: "PeopleFactory",
        OrphanageFactory: "OrphanageFactory",
        ActivityFactory: "ActivityFactory",
        ManagementFactory: "ManagementFactory",
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
        ORPHANAGES: {
            name: 'app.orphanages',
            url: '/orphanages',
            templateUrl: 'templates/orphanages.html',
            controller: 'OrphanageController'
        },
        ACTIVITY: {
            name: 'app.activity',
            url: '/{activityId:int}',
            templateUrl: 'templates/activity.html',
            controller: 'ActivityController'
        },
        WISHLISTDETAIL: {
            name: 'app.wishlist',
            url: '/:activityId/:wishlistId',
            templateUrl: 'templates/wishlist_detail.html',
            controller: 'WishListDetailController'
        },
        GALLERY: {
            name: 'app.gallery',
            url: '/gallery',
            templateUrl: 'templates/gallery.html',
            controller: 'GalleryController'
        },
        MANAGEMENT: {
            name: 'app.management',
            url: '/management',
            templateUrl: 'templates/management.html',
            controller: 'ManagementController'
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
            "register": "Register",
            "viewOrphanages": "viewOrphanages",
            "getAllUserDetails": "getAllUserDetails",
            "getUserDonatedItemDetails": "getUserDonatedItemDetails",
            "getUserAvatar": "getUserAvatar",
            "getActivitiesList": "getActivitiesList"
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
