angular.module(MANI.MODULE_NAMES.LOCAL_STORAGE).factory(MANI.FACTORIES.LocalStorage, LocalStorage);

LocalStorage.$inject = [];

function LocalStorage() {
    var service = {};

    service.setItem = setItem;
    service.getItem = getItem;
    service.setObject = setObject;
    service.getObject = getObject;
    service.removeItem = removeItem;

    return service;

    function setItem(key, value) {
        window.localStorage.setItem(key, value);
    }

    function getItem(key) {
        return window.localStorage.getItem(key);
    }

    function setObject(key, value) {
        window.localStorage.setItem(key, JSON.stringify(value));
    }

    function getObject(key) {
        var value = window.localStorage.getItem(key);

        if(value) {
            return JSON.parse(value);
        }
        else {
            return null;
        }
    }

    function removeItem(key) {
        window.localStorage.removeItem(key);
    }
}