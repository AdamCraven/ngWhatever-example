define([
    '../config/habit-config',
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
        },
        save: function(eventsUnparsed) {
            var deferred = this.$q.defer();

            // Often when sending data to the server, the format the server expects it
            // may be slightly different from what the client sends.
            // A parsing function is required

            var eventsForServer = encode(eventsUnparsed);

            setTimeout(function() {
                deferred.resolve();
            }, config.endpoints.loadingTime);

            return deferred.promise;
        }

    };

    EventEndpoint.$inject = ['$q'];

    return EventEndpoint;
});