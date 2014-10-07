define([
    '../config/habit-config'
], function(
    config
) {
    "use strict";

    function HabitModuleEndpoint($q, habitEndpoint, eventEndpoint) {
        this.$q = $q;
        this.habitEndpoint = habitEndpoint;
        this.eventEndpoint = eventEndpoint;
    }

    HabitModuleEndpoint.prototype = {
        getHabitsAndEvents: function () {
            return this.$q.all([this.habitEndpoint.get(), this.eventEndpoint.get()]);
        }

    };

    HabitModuleEndpoint.$inject = ['$q', 'habitEndpoint', 'eventEndpoint'];

    return HabitModuleEndpoint;
});