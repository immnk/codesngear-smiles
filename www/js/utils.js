utils.provider('utils', Core);

Core.$inject = [];

function Core() {

    var provider = {};
    provider.$get = Factory;
    return provider;

    Factory.$inject = ['$q', '$http', '$rootScope', '$ionicPopup', '$ionicLoading', '$ionicHistory', '$ionicSideMenuDelegate', 'Logger', 'LocalStorage', SMILES.MESSAGES];

    function Factory($q, $http, $rootScope, $ionicPopup, $ionicLoading, $ionicHistory, $ionicSideMenuDelegate, Logger, LocalStorage, SMILES_MESSAGES) {
        var service = {};

        service.Logger = Logger;
        service.SMILES_MESSAGES = SMILES_MESSAGES;

        service.init = init;
        service.localStorage = LocalStorage;
        service.showAlert = showAlert;
        service.showSpinner = showSpinner;
        service.hideSpinner = hideSpinner;
        service.callBackend = callBackend;
        service.handleError = handleError;
        service.encode = encode;
        service.formatDate = formatDate;
        service.getLocalData = getLocalData;

        function init() {
            Logger.debug("utils - init: start");

            $rootScope.goBack = function() {
                $ionicHistory.goBack();
            }

            $rootScope.toggleLeft = function() {
                $ionicSideMenuDelegate.toggleLeft();
            }
            $ionicSideMenuDelegate.canDragContent(false);

            $rootScope.SMILES_MESSAGES = SMILES_MESSAGES
            globalRootScope = $rootScope;
            Logger.debug("utils - init: end");
        }

        function showAlert(title, template) {
            $ionicPopup.alert({
                title: title,
                template: template
            });
        }

        function showSpinner() {
            $ionicLoading.show();
        }

        function hideSpinner() {
            $ionicLoading.hide();
        }

        function callBackend(requestType, methodName, requestData, headers) {
            Logger.debug("utils - callBackend: start");

            var deferred = $q.defer();

            var req = {
                method: requestType,
                url: SMILES.BACK_END.RootURL + methodName
            };

            if (requestData) {
                if (requestType == SMILES.BACK_END.RequestType.GET) {
                    req.params = requestData;
                } else if (requestType == SMILES.BACK_END.RequestType.POST) {
                    req.headers = {
                        'Content-Type': 'application/json',
                    };
                    req.data = requestData;
                }
            }

            Logger.debug("utils - callBackend: MethodType: " + req.method);
            Logger.debug("utils - callBackend: MethodName: " + methodName);
            Logger.debug("utils - callBackend: requestData: ");
            Logger.debug(requestData);

            $http(req).then(function(response) {
                Logger.debug("utils - callBackend: response: ");
                Logger.debug(response);

                deferred.resolve(response.data);

            }, function(error) {
                Logger.error(error);
                
                var errorResponse = {
                    success : false,
                    error : {}
                };
                
                if (error.status == 401) {
                    errorResponse.error.code = SMILES.BACK_END.ERROR_CODES.UNAUTHORIZED;
                }
                else {
                    errorResponse.error.code = SMILES.BACK_END.ERROR_CODES.NETWORK_ERROR;
                }
               
                deferred.reject(errorResponse);
            });


            return deferred.promise;

            Logger.debug("utils - callBackend: end");
        }

        function handleError(error) {
            service.Logger.debug("$utils.handleError : start");

            try {
                var message = service.SMILES_MESSAGES[error.error.code];
                message = service.SMILES_MESSAGES[error.error.code];
                return message;
            } catch (e) {
                return service.SMILES_MESSAGES.NETWORK_ERROR;
            }

            service.Logger.debug("$utils.handleError : end");
        }

        function encode(input) {
            var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
            var output = "";
            var chr1, chr2, chr3 = "";
            var enc1, enc2, enc3, enc4 = "";
            var i = 0;

            do {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);

                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;

                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }

                output = output +
                    keyStr.charAt(enc1) +
                    keyStr.charAt(enc2) +
                    keyStr.charAt(enc3) +
                    keyStr.charAt(enc4);
                chr1 = chr2 = chr3 = "";
                enc1 = enc2 = enc3 = enc4 = "";
            } while (i < input.length);

            return output;
        }

        function formatDate(date) {
            var returnValue = "";

            returnValue = date.substr(0, date.indexOf(":") - 3);

            return returnValue;
        }

        function getLocalData(fileName) {
            Logger.debug("utils - getLocalData: start");
            var deferred = $q.defer();
            
            $http.get(fileName).then(function(response){
                console.log(response);
                deferred.resolve(response);
            }, function(error){
                deferred.reject(error);
            });

            Logger.debug("utils - getLocalData: end");

            return deferred.promise;
        }

        return service;
    }
}
