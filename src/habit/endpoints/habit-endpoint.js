define([
    '../config/habit-config',
    './habit-parser'
], function(
    config,
    habitParser
) {
    "use strict";


    class HabitEndpoint {
        constructor($q) {
            this.$q = $q;
        }
        get() {
            var deferred = this.$q.defer();
            var serverFormattedHabits = config.endpoints.habits;

            setTimeout(function fakeServerRequest() {
                // Often when getting data from the server, the format the client expects it
                // may be slightly different from what the server sends.
                // A parsing function is used to transform the data
                var clientFormattedHabits = habitParser.decode(serverFormattedHabits);
                deferred.resolve(clientFormattedHabits);
            }, config.endpoints.loadingTime);

            return deferred.promise;
        }
        save(habitsUnparsed) {
            var deferred = this.$q.defer();

            // Often when sending data to the server, the format the server expects it
            // may be slightly different from what the client sends.
            // A parsing function is used to transform the data
            var serverFormattedEvents = habitParser.encode(habitFormattedEvents);

            setTimeout(function fakeServerPost() {
                deferred.resolve();
            }, config.endpoints.loadingTime);

            return deferred.promise;
        }
    }

    HabitEndpoint.$inject = ['$q'];

    return HabitEndpoint;
});