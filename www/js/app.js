angular.module(SMILES.APP_NAME, ['ionic', 'ionic.service.core', 'ionic.service.analytics', SMILES.MODULE_NAMES.CONTROLLERS, SMILES.MODULE_NAMES.FACTORIES, SMILES.MODULE_NAMES.UTILS, SMILES.MODULE_NAMES.DIRECTIVES, SMILES.MODULE_NAMES.MESSAGES])

.run(['$ionicPlatform', '$ionicAnalytics', '$state', 'utils', '$rootScope',
    function($ionicPlatform, $ionicAnalytics, $state, utils, $rootScope) {

        var user = utils.localStorage.getObject(SMILES.LOCAL_STORAGE.KEYS.USER);
        if (user) {
            $rootScope.user = user;
            $state.go(SMILES.STATES.DASHBOARD.name);
        } else {
            $state.go(SMILES.STATES.LOGIN.name);
        }

        $ionicPlatform.ready(function() {
            $ionicAnalytics.register();
            if (window.cordova && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }

            utils.init();
        });
    }
])

.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', '$logProvider',
    function($stateProvider, $urlRouterProvider, $compileProvider, $logProvider) {

        $stateProvider
            .state(SMILES.STATES.LOGIN.name, {
                url: SMILES.STATES.LOGIN.url,
                templateUrl: SMILES.STATES.LOGIN.templateUrl,
                controller: SMILES.STATES.LOGIN.controller,
                cache: SMILES.STATES.LOGIN.cache
            })
            .state(SMILES.STATES.REGISTER.name, {
                url: SMILES.STATES.REGISTER.url,
                templateUrl: SMILES.STATES.REGISTER.templateUrl,
                controller: SMILES.STATES.REGISTER.controller
            })
            .state(SMILES.STATES.SIDE_MENU.name, {
                url: SMILES.STATES.SIDE_MENU.url,
                abstract: true,
                templateUrl: SMILES.STATES.SIDE_MENU.templateUrl,
                controller: SMILES.STATES.SIDE_MENU.controller,

            })
            .state(SMILES.STATES.DASHBOARD.name, {
                url: SMILES.STATES.DASHBOARD.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.DASHBOARD.templateUrl,
                        controller: SMILES.STATES.DASHBOARD.controller
                    }
                }
            })
            .state(SMILES.STATES.ACTIVITY.name, {
                url: SMILES.STATES.ACTIVITY.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.ACTIVITY.templateUrl,
                        controller: SMILES.STATES.ACTIVITY.controller
                    }
                }
            })
            .state(SMILES.STATES.WISHLISTDETAIL.name, {
                url: SMILES.STATES.WISHLISTDETAIL.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.WISHLISTDETAIL.templateUrl,
                        controller: SMILES.STATES.WISHLISTDETAIL.controller
                    }
                }
            })
            .state(SMILES.STATES.ORPHANAGES.name, {
                url: SMILES.STATES.ORPHANAGES.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.ORPHANAGES.templateUrl,
                        controller: SMILES.STATES.ORPHANAGES.controller
                    }
                }
            })
            .state(SMILES.STATES.ORPHANAGE_DETAIL.name, {
                url: SMILES.STATES.ORPHANAGE_DETAIL.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.ORPHANAGE_DETAIL.templateUrl,
                        controller: SMILES.STATES.ORPHANAGE_DETAIL.controller
                    }
                }
            })
            .state(SMILES.STATES.GALLERY.name, {
                url: SMILES.STATES.GALLERY.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.GALLERY.templateUrl,
                        controller: SMILES.STATES.GALLERY.controller
                    }
                }
            })
            .state(SMILES.STATES.ABOUTUS.name, {
                url: SMILES.STATES.ABOUTUS.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.ABOUTUS.templateUrl,
                        controller: SMILES.STATES.ABOUTUS.controller
                    }
                }
            });

        $urlRouterProvider.otherwise(SMILES.STATES.LOGIN.url);
        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(true);
    }
]);
