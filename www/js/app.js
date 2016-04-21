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
            .state(SMILES.STATES.LOGIN.name, {
                url: SMILES.STATES.LOGIN.url,
                templateUrl: SMILES.STATES.LOGIN.templateUrl,
                controller: SMILES.STATES.LOGIN.controller,
                cache: SMILES.STATES.LOGIN.cache
            })
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
            .state(SMILES.STATES.ABOUTUS.name, {
                url: SMILES.STATES.ABOUTUS.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.ABOUTUS.templateUrl,
                        controller: SMILES.STATES.ABOUTUS.controller
                    }
                }
            })
            .state(SMILES.STATES.CONTACTUS.name, {
                url: SMILES.STATES.CONTACTUS.url,
                views: {
                    'menuContent': {
                        templateUrl: SMILES.STATES.CONTACTUS.templateUrl,
                        controller: SMILES.STATES.CONTACTUS.controller
                    }
                }
            });

        $urlRouterProvider.otherwise(SMILES.STATES.LOGIN.url);
        $compileProvider.debugInfoEnabled(false);
        $logProvider.debugEnabled(true);
    }
]);
