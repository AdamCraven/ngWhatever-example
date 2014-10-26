define(function() {
    "use strict";

    /**
     * The controller is an API for the view.
     * It knows about the models and makes accessing them much easier.
     * It CAN NOT communicate with the server
     * It DOES NOT handle data returned from the server.
     */
    function HabitFactoryController($scope, moduleController) {
        this.moduleController = moduleController;
        this.model = moduleController.model;
    }

    HabitFactoryController.prototype = {
        getHabits: function() {
            return this.model.habits.read();
        },
        getTotalPoints: function() {
            return this.model.events.getTotalPoints();
        },
        getEventsFilteredByHabit: function(habit) {
            return this.model.events.readByHabit(habit);
        },
        getTotalPointsForHabit: function(habit) {
            return this.model.events.getTotalPointsForHabit(habit);
        },
        isLoading: function() {
            return this.model.loading.isLoading();
        },
        save: function() {
            // Saves the changes from the table.
            // The module controller handles this as it can communicate with the server
            this.moduleController.save();
        }
    };

    HabitFactoryController.$inject = ['$scope', 'habitModuleController'];

    return HabitFactoryController;
});