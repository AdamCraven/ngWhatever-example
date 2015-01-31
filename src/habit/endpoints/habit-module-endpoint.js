define([
    '../config/habit-config'
], function(
    config
) {
    "use strict";

    class HabitModuleEndpoint {
        constructor ($q, habitEndpoint, eventEndpoint) {
            this.$q = $q;
            this.habitEndpoint = habitEndpoint;
            this.eventEndpoint = eventEndpoint;
        }
        getHabitsAndEvents() {
            return this.$q.all([this.habitEndpoint.get(), this.eventEndpoint.get()]);
        }
        saveHabitsAndEvents(habit, events) {
            this.$q.all([this.habitEndpoint.save(habits), this.eventEndpoint.save(events)]);
        }

    }

    HabitModuleEndpoint.$inject = ['$q', 'habitEndpoint', 'eventEndpoint'];

    return HabitModuleEndpoint;
});