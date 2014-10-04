define([
    '../config/habit-config'
], function(
    config
) {
    "use strict";

    var habitDataFromServer =  config.endpoints.habits;

    function HabitEndpoint($q) {
        this.$q = $q;
    }

    HabitEndpoint.prototype = {
        get: function () {
            var deferred = this.$q.defer();

            setTimeout(function () {
                deferred.resolve(habitDataFromServer);
            }, config.endpoints.loadingTime);

            return deferred.promise;
        }

    };

    HabitEndpoint.$inject = ['$q'];

    return HabitEndpoint;
});