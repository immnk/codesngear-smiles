angular.module(MANI.MODULE_NAMES.LOGGER).factory(MANI.FACTORIES.Logger, Logger);

	Logger.$inject = ['$log'];

	function Logger($log) {
		var service = {};

		service.success = success;
		service.debug = debug;
		service.warning = warning;
		service.error = error;

		return service;

		function success(message) {
			$log.debug(getCurrentTime() + " : ", message);
		}
		
		function debug(message) {
			$log.debug(getCurrentTime()  + " : ", message);
		}

		function warning(message) {
			$log.warning(getCurrentTime()  + " : ", message);
		}

		function error(message) {
			$log.error(getCurrentTime() + " : ", message);
		}

		function getCurrentTime() {
			return new Date().toISOString().replace('T', " ").substr(0, 19);
		}
	}