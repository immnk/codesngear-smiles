angular.module(SMILES.APP_NAME, ['ionic','ionic.service.core',  'ionic.service.analytics', SMILES.MODULE_NAMES.CONTROLLERS, SMILES.MODULE_NAMES.FACTORIES, SMILES.MODULE_NAMES.UTILS, SMILES.MODULE_NAMES.DIRECTIVES, SMILES.MODULE_NAMES.MESSAGES])

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
            .state(SMILES.STATES.SIDE_MENU.name, {
                url: SMILES.STATES.SIDE_MENU.url,
                abstract: true,
                templateUrl: SMILES.STATES.SIDE_MENU.templateUrl,
                controller: SMILES.STATES.SIDE_MENU.controller,
                cache: SMILES.STATES.SIDE_MENU.cache
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
            .state(SMILES.STATES.PROJECTS.name, {
                url: SMILES.STATES.PROJECTS.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.PROJECTS.templateUrl,
                        controller: SMILES.STATES.PROJECTS.controller
                    }
                }
            })
            .state(SMILES.STATES.PROJECTDETAIL.name, {
                url: SMILES.STATES.PROJECTDETAIL.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.PROJECTDETAIL.templateUrl,
                        controller: SMILES.STATES.PROJECTDETAIL.controller
                    }
                }
            })
            .state(SMILES.STATES.ABOUTME.name, {
                url: SMILES.STATES.ABOUTME.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.ABOUTME.templateUrl,
                        controller: SMILES.STATES.ABOUTME.controller
                    }
                }
            })
            .state(SMILES.STATES.CONTACTME.name, {
                url: SMILES.STATES.CONTACTME.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.CONTACTME.templateUrl,
                        controller: SMILES.STATES.CONTACTME.controller
                    }
                }
            });

        $urlRouterProvider.otherwise(SMILES.STATES.SIDE_MENU.url + SMILES.STATES.DASHBOARD.url);
        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(true);
    }
]);
