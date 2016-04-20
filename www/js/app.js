angular.module(MANI.APP_NAME, ['ionic','ionic.service.core',  'ionic.service.analytics', MANI.MODULE_NAMES.CONTROLLERS, MANI.MODULE_NAMES.FACTORIES, MANI.MODULE_NAMES.UTILS, MANI.MODULE_NAMES.DIRECTIVES, MANI.MODULE_NAMES.MESSAGES])

.run(function($ionicPlatform, $ionicAnalytics) {
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
    });
})

.config(['$stateProvider', '$urlRouterProvider', '$compileProvider', '$logProvider',
    function($stateProvider, $urlRouterProvider, $compileProvider, $logProvider) {

        $stateProvider
            .state(MANI.STATES.SIDE_MENU.name, {
                url: MANI.STATES.SIDE_MENU.url,
                abstract: true,
                templateUrl: MANI.STATES.SIDE_MENU.templateUrl,
                controller: MANI.STATES.SIDE_MENU.controller,
                cache: MANI.STATES.SIDE_MENU.cache
            })
            .state(MANI.STATES.DASHBOARD.name, {
                url: MANI.STATES.DASHBOARD.url,
                views: {
                    'menuContent': {
                        templateUrl: MANI.STATES.DASHBOARD.templateUrl,
                        controller: MANI.STATES.DASHBOARD.controller
                    }
                }
            })
            .state(MANI.STATES.PROJECTS.name, {
                url: MANI.STATES.PROJECTS.url,
                views: {
                    'menuContent': {
                        templateUrl: MANI.STATES.PROJECTS.templateUrl,
                        controller: MANI.STATES.PROJECTS.controller
                    }
                }
            })
            .state(MANI.STATES.PROJECTDETAIL.name, {
                url: MANI.STATES.PROJECTDETAIL.url,
                views: {
                    'menuContent': {
                        templateUrl: MANI.STATES.PROJECTDETAIL.templateUrl,
                        controller: MANI.STATES.PROJECTDETAIL.controller
                    }
                }
            })
            .state(MANI.STATES.ABOUTME.name, {
                url: MANI.STATES.ABOUTME.url,
                views: {
                    'menuContent': {
                        templateUrl: MANI.STATES.ABOUTME.templateUrl,
                        controller: MANI.STATES.ABOUTME.controller
                    }
                }
            })
            .state(MANI.STATES.CONTACTME.name, {
                url: MANI.STATES.CONTACTME.url,
                views: {
                    'menuContent': {
                        templateUrl: MANI.STATES.CONTACTME.templateUrl,
                        controller: MANI.STATES.CONTACTME.controller
                    }
                }
            });

        $urlRouterProvider.otherwise(MANI.STATES.SIDE_MENU.url + MANI.STATES.DASHBOARD.url);
        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(true);
    }
]);
