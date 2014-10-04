define([
    '../config/habit-config'
], function(
    config
) {
    "use strict";

    var eventDataFromServer =  config.endpoints.events;

    function EventEndpoint($q) {
        this.$q = $q;
    }

    EventEndpoint.prototype = {
        get: function() {
            var deferred = this.$q.defer();

            setTimeout(function() {
                deferred.resolve(eventDataFromServer);
            }, config.endpoints.loadingTime);

            return deferred.promise;
        }

    };

    EventEndpoint.$inject = ['$q'];

    return EventEndpoint;
});