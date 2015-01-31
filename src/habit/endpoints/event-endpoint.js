define([
    '../config/habit-config',
    './event-parser'
], function(
    config,
    eventParser
) {
    "use strict";

    class EventEndpoint {
        constructor($q) {
            this.$q = $q;
        }
        get() {
            var deferred = this.$q.defer();
            var serverFormattedEvents = config.endpoints.events;

            setTimeout(function fakeServerRequest() {
                // Often when getting data from the server, the format the client expects it
                // may be slightly different from what the server sends.
                // A parsing function is used to transform the data
                var clientFormattedEvents = eventParser.decode(serverFormattedEvents);
                deferred.resolve(clientFormattedEvents);
            }, config.endpoints.loadingTime);

            return deferred.promise;
        }
        save(clientFormattedEvents) {
            var deferred = this.$q.defer();

            // Often when sending data to the server, the format the server expects it
            // may be slightly different from what the client sends.
            // A parsing function is used to transform the data
            var serverFormattedEvents = eventParser.encode(clientFormattedEvents);

            setTimeout(function fakeServerPost() {
                deferred.resolve();
            }, config.endpoints.loadingTime);

            return deferred.promise;
        }
    }

    EventEndpoint.$inject = ['$q'];

    return EventEndpoint;
});